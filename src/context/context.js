import {storage} from '@/shared/helpers';
import React, {createContext} from 'react';
import {ToastAndroid} from 'react-native';
import {createOrder} from '@/shared/helpers/services/orders';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
  const [orders, setOrders] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState(false);
  const [user, setUser] = React.useState(undefined);
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [pending, setPending] = React.useState(0);
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [orderCreated, setOrderCreated] = React.useState(false);

  const getLocalUser = async () => {
    const user = await storage.get('user');
    const localCart = await storage.get('cart');
    setCart(localCart);
    setUser(user);
  };

  const setLocalUser = async newUser => {
    await storage.create('user', newUser);
  };

  const getTotal = () => {
    let newTotal = total;
    if (cart && cart?.length > 0) {
      cart.forEach(currentItem => {
        newTotal = newTotal + currentItem.qty * currentItem.price;
      });
    }

    setTotal(newTotal);
  };

  const updateLocalCart = async () => {
    await storage.create('cart', cart);
  };

  const handleAddItem = item => {
    if (!item) return;

    let newCart = [...cart];
    const itemExist = cart.find(currentItem => currentItem.id === item.id);

    if (itemExist) {
      newCart = cart.map(currentItem => {
        if (currentItem.id === item.id) {
          return {
            ...currentItem,
            qty: currentItem.qty + item.qty,
          };
        }
        return currentItem;
      });
    }

    if (!itemExist) {
      newCart = [item, ...newCart];
    }

    ToastAndroid.show('Producto añadido con exito!', ToastAndroid.SHORT);
    Toast.show({
      type: 'success',
      text1: 'Producto añadido con exito!',
    });
    setCart(newCart);
    getTotal();
  };

  const handleRemoveItem = item => {
    if (!item) return;

    let newCart = [...cart];
    newCart = cart.filter(currentItem => currentItem.id !== item.id);
    setCart(newCart);
    getTotal();
  };

  const handleClearCart = () => {
    setCart([]);
    getTotal();
  };

  const handleIncrementItem = item => {
    if (!item) return;

    let newItems = [...cart];
    newItems = cart.map(currentItem => {
      if (currentItem.id === item.id) {
        return {
          ...currentItem,
          qty: currentItem.qty + 1,
        };
      }

      return currentItem;
    });

    setCart(newItems);
    getTotal();
  };

  const handleDecrementItem = item => {
    if (!item) return;

    let newItems = [...cart];
    newItems = cart.map(currentItem => {
      if (currentItem.id === item.id) {
        return {
          ...currentItem,
          qty: currentItem.qty - 1,
        };
      }
      return currentItem;
    });

    setCart(newItems);
    getTotal();
  };

  const resetCart = () => {
    setCart([]);
    setTotal(0);
    setPending(0);
    setPaymentMethod(null);
  };

  const handleSubmitOrder = async () => {
    if (!paymentMethod) {
      ToastAndroid.show(
        'Debe seleccionar el metodo de pago',
        ToastAndroid.SHORT,
      );
      Toast.show({
        type: 'error',
        text1: 'Debe seleccionar el metodo de pago',
      });
      return;
    }
    let order = {
      products: cart,
      user_id: user.id,
      payment_method: paymentMethod.title,
      payment_pending: pending,
      total,
      status: 'procesando',
    };

    const {error, data} = await createOrder(order);

    if (error) {
      ToastAndroid.show(
        'La orden no ha podido ser procesada',
        ToastAndroid.SHORT,
      );
      Toast.show({type: 'error', text1: 'La orden no ha podido ser procesada'});
      return;
    }

    setOrderCreated(true);
    resetCart();
  };

  React.useEffect(() => {
    getLocalUser();
    getTotal();
  }, []);

  React.useEffect(() => {
    updateLocalCart();
    getTotal();
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        total,
        orders,
        setOrders,
        showLoader,
        setShowLoader,
        user,
        setUser,
        cart,
        setCart,
        paymentMethod,
        setPaymentMethod: paymentMethod => setPaymentMethod(paymentMethod),
        pending,
        setPending: pending => setPending(pending),
        orderCreated,
        setOrderCreated: orderCreated => setOrderCreated(orderCreated),
        handleAddItem: item => handleAddItem(item),
        handleRemoveItem: item => handleRemoveItem(item),
        handleIncrementItem: item => handleIncrementItem(item),
        handleDecrementItem: item => handleDecrementItem(item),
        handleClearCart: () => handleClearCart(),
        handleSubmitOrder: () => handleSubmitOrder(),
      }}>
      {children}
    </StoreContext.Provider>
  );
};
