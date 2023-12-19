import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Typography from '@/shared/components/typography';
import {currencyType} from '@/shared/constants/global';
import {_styles} from './styles';
import useDarkMode from '@/shared/hooks/useDarkMode';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import Counter from '@/shared/components/counter';
import Icon from '@/shared/components/icon';
import {trash} from '@/shared/assets/icons';
import {Product} from '@/shared/DTO';
import {StoreContext} from '@/context/context';

interface CardProductHorizontalProps {
  product?: Product;
  onRemoveCart?: (product: Product) => void;
  checkout?: any;
  actions?: any;
}

export default function CardProductHorizontal({
  product,
  onRemoveCart = () => {},
  checkout,
  actions = true,
}: CardProductHorizontalProps) {
  const {isDarkMode} = useDarkMode();
  const styles = _styles(isDarkMode);
  const [cant, setCant] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const {cart} = React.useContext(StoreContext);

  const navigation = useNavigation<NavigationProps>();

  function navigateTo() {
    navigation.navigate('detailPlant', {
      product: {
        id: product!.id,
        name: product!.name,
        description: product!.description,
        price: product!.price,
        imageUrl: product!.imageUrl,
        stock: product!.stock,
        created_at: product!.created_at,
      },
    });
  }

  useEffect(() => {
    if (cart && cart.length > 0 && product) {
      const currentProduct = cart.find(
        (item: Product) => item.id === product.id,
      );

      if (currentProduct) {
        setIsDisabled(product.stock <= currentProduct.qty);
      }
    }
  }, [cart, product]);

  if (!product) return null;

  return (
    <TouchableOpacity onPress={navigateTo} style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: product?.imageUrl}}
        />
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.actions}>
          <Typography style={styles.name} translate={false}>
            {product?.name}
          </Typography>
          {actions && (
            <TouchableOpacity onPress={() => onRemoveCart(product)}>
              <Icon icon={trash} />
            </TouchableOpacity>
          )}
        </View>
        {actions ? (
          <>
            <Typography style={styles.price} translate={false}>
              {currencyType} {product?.price.toFixed(2)}
            </Typography>
          </>
        ) : (
          <>
            <View style={styles.containerCant}>
              <Typography style={styles.price} translate={false}>
                {currencyType} {product?.price.toFixed(2)}
              </Typography>
              {checkout && (
                <View style={styles.cant}>
                  <Typography style={styles.cantText} translate={false}>
                    {product.qty}
                  </Typography>
                </View>
              )}
            </View>
          </>
        )}

        {actions && (
          <View style={styles.actions}>
            <Counter product={product} isDisabled={isDisabled} />
            <Typography style={styles.totalPrice} translate={false}>
              {currencyType} {(product!.price * product.qty).toFixed(2)}
            </Typography>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
