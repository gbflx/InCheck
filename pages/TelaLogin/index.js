import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import TextBox from "../../componentes/TextBox";
import Styles from "./style";
import Button from "../../componentes/Button";
import BtnFB from "../../componentes/BtnFB";
import BtnGG from "../../componentes/BtnGG";


export default function TelaLogin() {
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
      <Button style={Styles.BTN} inputTitle={"Entrar"}></Button>
      <View style={Styles.Line}></View>
      <BtnFB/>
      <BtnGG style={Styles.BtnGG}/>
    </View>
    </ScrollView>
  );
}
