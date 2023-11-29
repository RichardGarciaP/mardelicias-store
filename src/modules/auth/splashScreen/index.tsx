import React from 'react';
import {NavigationProps} from '@/shared/routes/stack';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>sdasda</Text>
    </View>
  );
};

export default SplashScreen;
