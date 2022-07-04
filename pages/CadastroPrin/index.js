import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Styles from "./style";
import TextBox from "../../componentes/TextBox";
import Button from "../../componentes/Button";

export default function CadastroPrin(props) {
  return (
    <View style={Styles.container}>
      <Image
        source={require("../../assets/imgs/logo.png")}
        style={Styles.img}
      />
      <Text style={Styles.TXT}>Cadastro</Text>
      <TextBox style={Styles.BoxName} inputTitle={'Nome'}></TextBox>
      <TextBox style={Styles.BoxMail} inputTitle={'E-mail'}></TextBox>
      <TextBox secureTextEntry={true} style={Styles.Password}  inputTitle={'Senha'}></TextBox>
      <Button inputTitle={'Cadastrar'} style={Styles.Btn}/>
    </View>
  );
}
