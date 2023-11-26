import React from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import {shoppingBag} from '@/shared/assets/icons';
import TopNavigation from '@/modules/private/orders/components/topNavigation';
import {View} from 'react-native';
import {styles} from './styles';
import Order from '@/modules/private/orders/components/order';
import UserValidation from '@/shared/components/user-validation/userValidation';
import {StoreContext} from '@/context/context';

export default function Orders() {
  const {user} = React.useContext(StoreContext);

  return (
    <>
      {user ? (
        <Wrapper>
          <View style={styles.container}>
            <HeaderWithIcon icon={shoppingBag} title={'orders.title'} />
            <TopNavigation />
            <Order
              product={{
                id: '1',
                image: 'https://i.ibb.co/5Tk0vKM/Img-1.png',
                name: 'Variegated snake',
                category: 'Indoor',
                price: 20.0,
                size: 'Medium',
                cant: 1,
              }}
            />
            <Order
              product={{
                id: '3',
                image: 'https://i.ibb.co/H2HKBWK/Img-3.png',
                name: 'Strelitzia Nicolai',
                category: 'Indoor',
                price: 25.0,
                size: 'Medium',
                cant: 2,
              }}
            />
          </View>
        </Wrapper>
      ) : (
        <View style={{flex: 1, alignContent: 'center'}}>
          <UserValidation />
        </View>
      )}
    </>
  );
}
