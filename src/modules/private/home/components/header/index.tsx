import React from 'react';
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/typography";
import {styles} from './styles'
import Icon from "@/shared/components/icon";
import { location, homeNotifications, homeLike, homeNotificationsDark, homeLikeDark } from "@/shared/assets/icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function Header() {
  const {isDarkMode} = useDarkMode()
  const {navigate} = useNavigation<NavigationProps>()
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={{uri: 'https://i.ibb.co/hZqwx78/049-girl-25.png'}} />
        <View>
          <Typography style={styles.nameUser} translate={false}>Bryan</Typography>
          <View style={styles.row}>
            <Icon customStyles={styles.iconLocation} icon={location} />
            <Typography style={styles.location} translate={false}>Manta</Typography>
          </View>
        </View>
      </View>
    </View>
  )
}
