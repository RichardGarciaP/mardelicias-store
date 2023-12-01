import {storage} from '@/shared/helpers';
import React, {createContext} from 'react';

export const StoreContext = createContext();

export const StoreProvider = ({children}) => {
  const [orders, setOrders] = React.useState([]);
  const [showLoader, setShowLoader] = React.useState(false);
  const [user, setUser] = React.useState(undefined);
  const [cart, setCart] = React.useState([]);

  const getLocalUser = async () => {
    const user = await storage.get('user');
    const localCart = await storage.get('cart');
    console.log('---', localCart);
    setCart(localCart);
    setUser(user);
  };

  const setLocalUser = async newUser => {
    await storage.create('user', newUser);
  };

  React.useEffect(() => {
    getLocalUser();
  }, []);

  // React.useEffect(() => {
  //   setLocalUser(user);
  // }, [user]);

  const updateLocalCart = async () => {
    await storage.create('cart', cart);
  };

  React.useEffect(() => {
    updateLocalCart();
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        orders,
        setOrders,
        showLoader,
        setShowLoader,
        user,
        setUser,
        cart,
        setCart,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
