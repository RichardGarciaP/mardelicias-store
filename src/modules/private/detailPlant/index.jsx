import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import {_styles} from './styles'
import Header from "./components/header";
import useDarkMode from "@/shared/hooks/useDarkMode";
import Typography from "@/shared/components/typography";
import Icon from "@/shared/components/icon";
import { star, shippingCart, shoppingBag } from "@/shared/assets/icons";
import Counter from "@/shared/components/counter";
import { currencyType } from "@/shared/constants/global";
import { Button } from "@/shared/components/buttons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DetailPlant({route}) {
  const {navigate} = useNavigation()
  const {isDarkMode} = useDarkMode()
  const {product} = route.params;
  const styles = _styles(isDarkMode)
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Header title={product.name}/>
        <View style={styles.containerImage}>
          <Image resizeMode="contain" style={styles.image} source={{uri: product.imageUrl}} />
        </View>

        <View style={styles.containerName}>
          <Typography style={styles.name} translate={false}>{product.name}</Typography>
        </View>

        <View style={styles.containerDescription}>
          <Typography style={styles.descriptionTitle}>Descripción del producto</Typography>

          <Typography style={styles.description} translate={false}>
            {product.description}
          </Typography>
        </View>

        <View style={styles.containerName}>
          <Typography style={styles.quantity}>Cantidad</Typography>
          <Counter onChange={() => console.log('juga')} />
        </View>

        <View style={styles.containerName}>
          <View style={{flex: 1,}}>
            <Typography style={styles.price}>Precio</Typography>
            <Typography style={styles.total} translate={false}>{currencyType} 20.00</Typography>
          </View>
          <View style={{flex: 1}}>
            <Button leftIcon={<Icon customStyles={{tintColor: 'white'}} icon={shoppingBag} />} title="Agregar al carrito" />
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  )
}
