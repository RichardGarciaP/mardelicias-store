import React from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/typography";
import { currencyType } from "@/shared/constants/global";
import {_styles} from './styles'
import useDarkMode from "@/shared/hooks/useDarkMode";
import { normalize } from "@/shared/helpers";
import { useNavigation } from "@react-navigation/native";

export default function CardProduct({product}) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  const navigation = useNavigation();

  function navigateTo() {
    navigation.navigate('detailPlant', {product:product})
  }
  return (
    <TouchableOpacity onPress={navigateTo} style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.image} resizeMode="contain" source={{uri: product.imageUrl}} />
        </View>

        <View style={{marginTop: normalize(12)}}>
          <Typography style={styles.name} translate={false}>{product.name}</Typography>
          <Typography style={styles.price} translate={false}>{currencyType} {product.price.toFixed(2)}</Typography>
        </View>
    </TouchableOpacity>
  )
}
