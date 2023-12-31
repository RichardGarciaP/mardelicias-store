/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RoutesStack, {RootStackParamList} from '@/shared/routes/stack';
import RoutesTab from '@/shared/routes/tab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {palette, semantic} from '@/shared/constants/colors';
import Icon from '@/shared/components/icon';
import useDarkMode from '@/shared/hooks/useDarkMode';
import useEffectOnce from '@/shared/hooks/useEffectOnce';
import {storage} from '@/shared/helpers';
import i18n from 'i18next';
import {SessionContextProvider} from '@supabase/auth-helpers-react';
import {supabase} from '@/shared/helpers/services/client';
import {StoreProvider} from '@/context/context';
import SplashScreen from 'react-native-splash-screen';
import {enableLatestRenderer} from 'react-native-maps';
import {PremissionsProvider} from '@/context/PermissionsContext';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

// enableLatestRenderer();

function TabNavigation() {
  const {isDarkMode} = useDarkMode();

  useEffectOnce(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {RoutesTab.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarStyle: {
              backgroundColor: isDarkMode
                ? semantic.background.dark.d500
                : semantic.background.white.w500,
            },
            tabBarIcon: ({focused}) => {
              return (
                <Icon
                  customStyles={{
                    tintColor: focused ? palette.main.p500 : semantic.text.grey,
                  }}
                  icon={route.icon}
                />
              );
            },
            tabBarLabel: ({focused}) => {
              return null;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  async function getTranslate() {
    const ing = await storage.get('language');
    if (ing) {
      await i18n.changeLanguage(ing);
      return;
    }
    await i18n.changeLanguage('en');
  }
  useEffectOnce(() => {
    getTranslate().catch();
  }, []);

  return (
    <SessionContextProvider supabaseClient={supabase}>
      <NavigationContainer>
        <PremissionsProvider>
          <StoreProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="tab" component={TabNavigation} />
              {RoutesStack.map(route => {
                return (
                  <Stack.Screen
                    key={route.path}
                    name={route.path}
                    component={route.component}
                  />
                );
              })}
            </Stack.Navigator>
          </StoreProvider>
        </PremissionsProvider>
      </NavigationContainer>
    </SessionContextProvider>
  );
}

export default App;
