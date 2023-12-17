import React from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import {Linking, ToastAndroid, View} from 'react-native';
import TitleAuth from '@/shared/components/titleAuth';
import Typography from '@/shared/components/typography';
import Input from '@/shared/components/input';
import Icon from '@/shared/components/icon';
import {mail} from '@/shared/assets/icons';
import {Button} from '@/shared/components/buttons';
import {styles} from './styles';
import * as Yup from 'yup';
import {Formik, FormikHelpers, FormikProps} from 'formik';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '@/shared/routes/stack';
import {recoveryPassword} from '@/shared/helpers/services/login';

type RecoveryProps = {
  email: string;
  submit: string;
};

export default function ForgotPassword() {
  const navigation = useNavigation<NavigationProps>();

  const makeCall = () => {
    Linking.openURL(`mailto:santos21mayru@gmail.com`);
  };

  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderWithIcon title="Recuperar Contraseña" />

        <View style={styles.innerWrapper}>
          <Typography style={styles.description}>
            {'auth.forgot_password.description'}
          </Typography>
          <View style={styles.form}>
            <Button
              title={'Contactar al administrador'}
              onPress={() => makeCall()}
            />
          </View>
        </View>
      </View>
    </Wrapper>
  );
}
