import React from 'react';
import List from '@/shared/components/list';
import {View, useWindowDimensions} from 'react-native';
import CardProduct from '@/shared/components/cardProduct';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import { getProducts } from '@/shared/helpers/services/products';
import useProducts from '@/shared/hooks/useProducts';

export default function MostPopular({products}) {

  const {height, width} = useWindowDimensions();

  function renderItem(item, key) {
    return <CardProduct product={item} key={key}  width={(width/2) - 35} height={(height / 3) -80} imageHeight={103}/>;
  }

  return (
    <View>
      <Typography style={styles.titleSection}>Productos</Typography>
      {!products ? (
        <Typography style={styles.titleSection}>
          Productos no disponibles
        </Typography>
      ) : (
        <List between data={products} rows={2} renderItem={renderItem}/>
      )}
    </View>
  );
}
