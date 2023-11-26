import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import TitleAuth from '@/shared/components/titleAuth';
import Input from '@/shared/components/input';
import Icon from '@/shared/components/icon';
import {eyeOff, lock, mail} from '@/shared/assets/icons';
import {Button} from '@/shared/components/buttons';
import Typography from '@/shared/components/typography';
import Wrapper from '@/shared/components/wrapper';
import CheckBox from '@/shared/components/checkbox';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';

export default function Login() {
  const navigation = useNavigation<NavigationProps>();

  function doLogin() {
    // @ts-ignore
    navigation.navigate('tab');
  }
  return (
    <Wrapper>
      <View style={styles.container}>
        <TitleAuth title="Inicia Sesión en Mardelicias" />

        <View style={styles.form}>

          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={mail} />}
              label="Correo Electronico"
              placeholder="Correo Electrónico"
            />
          </View>

          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={lock} />}
              rightIcon={<Icon icon={eyeOff} />}
              secureTextEntry={true}
              label="Contraseña"
              placeholder="Contraseña"
            />
          </View>
        </View>

        <View style={styles.formControl}>
          <Button onPress={doLogin} title="Iniciar Sesión" />
        </View>
      </View>
    </Wrapper>
  );
}
