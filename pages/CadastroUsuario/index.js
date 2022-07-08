import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Styles from "./style";
import TextBox from "../../componentes/TextBox";
import Button from "../../componentes/Button";

export default function CadastroUsuario({ navigation }) {
  const navegar = () => {
    navigation.navigate("CadastroPrin");
  };
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.imglogo}
        source={require("../../assets/imgs/logo.png")}
      />
      <Text style={Styles.title}>Recuperar Senha</Text>
      <TextBox inputTitle={"E-mail"} style={Styles.BoxMail}/>
      <Button navigation={navigation} inputTitle={"Entrar"} onPress={navegar.bind(this)}/>
      <View></View>
    </View>
  );
}
