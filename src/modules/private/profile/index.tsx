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
import {StoreContext} from '@/context/context';
import {signOut} from '@/shared/helpers/services/login';

const Profile = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState<boolean>(false);
  const {navigate} = useNavigation<NavigationProps>();

  const [openModal, setOpenModal] = useState(false);
  const [addressSelected, setAddressSelected] = useState<OptionCardOptions>();
  const {isDarkMode, changeColorScheme} = useDarkMode();
  const {user, setUser} = React.useContext(StoreContext);

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
    setUser(undefined);
  };

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
                  Mi perfil
                </Typography>
              </View>
            </View>

            <View style={styles.profileInfo}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  style={styles.image}
                  borderRadius={50}
                  source={{
                    uri: 'https://as1.ftcdn.net/v2/jpg/03/39/45/96/1000_F_339459697_XAFacNQmwnvJRqe1Fe9VOptPWMUxlZP8.jpg',
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'            
                  }}>
                  <Typography style={{fontWeight: '700', fontSize: 16}}>
                    Username
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {`${user.user_metadata.first_name} ${user.user_metadata.last_name}`}
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {user.phone}
                  </Typography>
                  <Typography style={{fontWeight: '500', fontSize: 14}}>
                    {user.email}
                  </Typography>
                </View>
              </View>
            </View>

            <Section
              title="Información de la cuenta"
              elements={[
                {
                  name: 'Dirección',
                  leftIcon: <Icon icon={location} />,
                  onPress: () => toggleModal(),
                },
                {
                  name: 'Cerrar sesión',
                  leftIcon: <Icon icon={logout} />,
                  onPress: () => handleLogOut(),
                },
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
                    Dirección
                  </Typography>
                </TouchableOpacity>

                <ListOptionCard
                  value={addressSelected}
                  onChange={onSelectAddress}
                  options={[
                    {
                      id: '1',
                      icon: location,
                      title: user.user_metadata.city,
                      description: user.user_metadata.direction,
                      active: false,
                    },
                  ]}
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
