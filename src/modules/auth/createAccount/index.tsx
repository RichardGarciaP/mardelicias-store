import React from 'react';
import Wrapper from "@/shared/components/wrapper";
import Typography from "@/shared/components/typography";
import Input from "@/shared/components/input";
import { View } from "react-native";
import { Button } from "@/shared/components/buttons";
import { styles } from "./styles";
import TitleAuth from "@/shared/components/titleAuth";
import Icon from "@/shared/components/icon";
import { eyeOff, lock, mail, user, location } from "@/shared/assets/icons";

export default function CreateAccount() {
  return (
    <Wrapper>
      <View style={styles.container}>
        <TitleAuth title="Crea tu cuenta" />

        <View style={styles.form}>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={user} />}
              label="Nombres"
              placeholder="Nombres"
            />
          </View>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={user} />}
              label="Apellidos"
              placeholder="Apellidos"
            />
          </View>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={mail} />}
              label="Correo Electrónico"
              placeholder="Correo Electrónico"
            />
          </View>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={location} />}
              label="Dirección"
              placeholder="Dirección"
              multiline
            />
          </View>
          <View style={styles.formControl}>
            <Input
              leftIcon={<Icon icon={lock} />}
              rightIcon={<Icon icon={eyeOff} />}
              secureTextEntry={true}
              label="Contraseña"
              placeholder="contraseña"
            />
          </View>
        </View>

        <View style={styles.formControl}>
          <Button title="Registrar" />
        </View>
      </View>
    </Wrapper>
  )
}
