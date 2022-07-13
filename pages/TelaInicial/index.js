import React from "react";
import { View, Text, Image, Input } from "react-native";
import Styles from "./style";

const TelaInicial = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.pt1}>
      <Image source={require('../../assets/imgs/logo.png')} style={Styles.logo}/> 
      <Text style={Styles.Name}>Olá, Glauber!</Text>
      <View style={Styles.Date}>
        <Text>16/05/2022 a 15/05/2022</Text>
      </View>
      </View>
      
    </View>
  );
};

export default TelaInicial;
