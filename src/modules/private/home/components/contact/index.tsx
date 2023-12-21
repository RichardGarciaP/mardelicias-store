import Typography from '@/shared/components/typography';
import React from 'react';
import {Linking, Text, View} from 'react-native';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {location, mail, phone} from '@/shared/assets/icons';
import Icon from '@/shared/components/icon';

const info = [
  {
    title: 'Llamanos',
    description: '0991062813',
    url: 'tel:0991062813',
    icon: phone,
  },
  {
    title: 'Escribenos',
    description: 'mardelicias2021@gmail.com',
    url: 'mailto:mardelicias2021@gmail.com',
    icon: mail,
  },
  {
    title: 'Visitanos',
    description: 'Circunvalación Calle 304 Avenida 224',
    url: 'https://maps.app.goo.gl/DZzczYc2biBuSrRY6',
    icon: location,
  },
];

const Contact = () => {
  const onPress = (url: string) => {
    console.log('Press', url);
    Linking.openURL(url);
  };

  return (
    <View>
      <Typography style={styles.titleSection}>Contactanos</Typography>
      <View style={styles.innerContainer}>
        {info.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.contactCard}
            onPress={() => onPress(item.url)}
            key={`card-action-${index}`}>
            <View style={styles.cardContainer}>
              <Icon icon={item.icon} customStyles={styles.icon} />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.desccription}>{item.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Contact;
