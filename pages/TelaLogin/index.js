import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import TextBox from "../../componentes/TextBox";
import Styles from "./style";
import Button from "../../componentes/Button";
import BtnFB from "../../componentes/BtnFB";
import BtnGG from "../../componentes/BtnGG";
import { useLinkProps } from "@react-navigation/native";


export default function TelaLogin(props, navigation) {
  const navegar = () =>{
    props.navigation.navigate('Inicio')
  }
  return (
    <ScrollView>
    <View style={Styles.container}>
      <Image
        source={require("../.././assets/imgs/logo.png")}
        style={Styles.Logo}
      />
      <Text style={Styles.TXT}>LOGIN</Text>
      <TextBox style={Styles.BoxMail} inputTitle={"E-mail"}></TextBox>
      <TextBox style={Styles.password} inputTitle={"Senha"} secureTextEntry={true}></TextBox>
      <Button style={Styles.BTN} inputTitle={"Entrar"} onPress={navegar.bind(this)}></Button>
      <View style={Styles.Line}></View>
      <BtnFB style={Styles.BtnFB}/>
      <BtnGG style={Styles.BtnGG}/>
    </View>
    </ScrollView>
  );
}
