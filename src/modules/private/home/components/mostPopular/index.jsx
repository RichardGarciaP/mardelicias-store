import React from 'react';
import List from '@/shared/components/list';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Typography from '@/shared/components/typography';
import {styles} from './styles';
import CardProductFull from '@/shared/components/cardProductFull';

export default function MostPopular({products}) {
  return (
    <View>
      <Typography style={styles.titleSection}>Productos</Typography>
      {!products ? (
        <Typography style={styles.titleSection}>
          Productos no disponibles
        </Typography>
      ) : (
        <SafeAreaView>
          <FlatList
            data={products}
            numColumns={2}
            keyExtractor={product => product.id}
            renderItem={({item}) => (
              <CardProductFull product={item} imageHeight={103} />
            )}
          />
        </SafeAreaView>
      )}
    </View>
  );
}
