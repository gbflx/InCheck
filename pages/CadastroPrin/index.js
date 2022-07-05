import React from "react";
import { View, Text, Image, TextInput, ScrollView } from "react-native";
import Styles from "./style";
import TextBox from "../../componentes/TextBox";
import Button from "../../componentes/Button";
import BtnFB from "../../componentes/BtnFB";
import BtnGG from "../../componentes/BtnGG";

export default function CadastroPrin(props) {
  return (
    <ScrollView>
      <View style={Styles.container}>
        <Image
          source={require("../../assets/imgs/logo.png")}
          style={Styles.img}
        />
        <Text style={Styles.TXT}>Cadastro</Text>
        <TextBox style={Styles.BoxName} inputTitle={"Nome"}></TextBox>
        <TextBox style={Styles.BoxMail} inputTitle={"E-mail"}></TextBox>
        <TextBox
          style={Styles.Password}
          inputTitle={"Senha"}
        ></TextBox>
        <TextBox
          style={Styles.Confirm}
          inputTitle={"Confirmar Senha"}
        ></TextBox>
        <Button inputTitle={"Cadastrar"} style={Styles.Btn} />
        <View style={Styles.Line}></View>
        <BtnFB />
        <BtnGG />
      </View>
    </ScrollView>
  );
}
