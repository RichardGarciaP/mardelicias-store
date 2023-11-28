import React, {useEffect, useState} from 'react';
import Wrapper from '@/shared/components/wrapper';
import HeaderWithIcon from '@/shared/components/headerBack';
import {shoppingBag} from '@/shared/assets/icons';
import TopNavigation from '@/modules/private/orders/components/topNavigation';
import {View} from 'react-native';
import {styles} from './styles';
import Order from '@/modules/private/orders/components/order';
import UserValidation from '@/shared/components/user-validation/userValidation';
import {StoreContext} from '@/context/context';
import useOrders from '@/shared/hooks/useOrders';
import {TAB_LIST} from '@/shared/constants/global';
import {mutate} from 'swr';

export default function Orders() {
  const {user} = React.useContext(StoreContext);

  const [currentTab, setCurrentTab] = useState<string>(TAB_LIST[0].id);
  const {data, error, isLoading, isValidating} = useOrders(
    currentTab ? currentTab : TAB_LIST[0].id,
  );

  useEffect(() => {
    mutate('/orders');
  }, [currentTab]);

  return (
    <>
      {user ? (
        <Wrapper loading={isLoading || isValidating}>
          <View style={styles.container}>
            <HeaderWithIcon icon={shoppingBag} title={'orders.title'} />
            <TopNavigation setCurrentTab={setCurrentTab} />
            {data?.map(order => (
              <Order order={order} key={`product-${order.id}`} />
            ))}
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
