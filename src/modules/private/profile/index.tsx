import {
  arrowBack,
  dots,
  edit,
  eyeFilled,
  help,
  location,
  logout,
  notification,
  order,
  security,
  user,
  vocher,
  walletFilled,
} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';
import Typography from '@/shared/components/typography';
import Wrapper from '@/shared/components/wrapper';
import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Section from './components/section';
import Toggle from '@/shared/components/toggle';

import {styles} from './styles';
import {normalize, storage} from '@/shared/helpers';
import {NavigationProps} from '@/shared/routes/stack';
import {useNavigation} from '@react-navigation/native';
import ButtonSheet from '@/shared/components/buttonSheet';
import ListOptionCard, {
  OptionCardOptions,
} from '@/shared/components/ListOptionCard';
import {Button} from '@/shared/components/buttons';
import useDarkMode from '@/shared/hooks/useDarkMode';
import UserValidation from '@/shared/components/user-validation/userValidation';
import { StoreContext } from '@/context/context';
import { signOut } from '@/shared/helpers/services/login';

const Profile = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(false);
  const {navigate} = useNavigation<NavigationProps>();

  const [openModal, setOpenModal] = useState(false);
  const [addressSelected, setAddressSelected] = useState<OptionCardOptions>();
  const {isDarkMode, changeColorScheme} = useDarkMode();
  const { user, setUser } = React.useContext(StoreContext)

  function onSelectAddress(option: OptionCardOptions) {
    setAddressSelected(option);
  }
  function toggleModal() {
    setOpenModal(!openModal);
  }

  function navigateToNewAddress() {
    toggleModal();
    navigate('addNewAddress');
  }

  const handleLogOut = async () => {
    await signOut();
    await storage.delete('user');
    setUser(undefined)
  }



  return (
    <>
      {user ? (
        <Wrapper>
          <View style={styles.container}>
            <View style={styles.profileText}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon icon={user} />
                <Typography
                  style={{
                    fontWeight: '700',
                    fontSize: 24,
                    marginLeft: normalize(10),
                  }}>
                  Mi Perfil
                </Typography>
              </View>
            </View>

            <View style={styles.profileInfo}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                  }}>
                  <Typography style={{fontWeight: '700', fontSize: 16}}>
                    {`${user.user_metadata?.first_name} ${user.user_metadata.last_name}`}
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {user.user_metadata.dni}
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {user.phone}
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {user.email}
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {user.user_metadata.direction}
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {user.user_metadata.direction_detail}
                  </Typography>
                  
                </View>
              </View>
              {/* <TouchableOpacity onPress={() => navigate('editProfile')}>
                <Icon icon={edit} />
              </TouchableOpacity> */}
            </View>


            <Section
              title="Configuración de la app"
              elements={[
                {name: "Cierra sesión", leftIcon: <Icon icon={logout} />, onPress: () => handleLogOut() },
              ]}
            />

            <ButtonSheet dispatch={openModal}>
              <View style={{padding: normalize(24)}}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon icon={arrowBack} />
                  <Typography
                    style={{
                      fontWeight: '700',
                      fontSize: normalize(24),
                      marginLeft: normalize(10),
                    }}>
                    {'general.address'}
                  </Typography>
                </TouchableOpacity>

                <ListOptionCard
                  value={addressSelected}
                  onChange={onSelectAddress}
                  options={[
                    {
                      id: '1',
                      icon: location,
                      title: 'Home',
                      description:
                        'Snow Street, San Francisco, California 42343',
                      active: false,
                    },
                    {
                      id: '2',
                      icon: location,
                      title: 'Parent House',
                      description:
                        'Snow Street, San Francisco, California 423433123',
                      active: false,
                    },
                  ]}
                />

                <Button
                  onPress={navigateToNewAddress}
                  title="Add New Address"
                />
              </View>
            </ButtonSheet>
          </View>
        </Wrapper>
      ) : (
          <UserValidation />
      )}
    </>
  );
};

export default Profile;
