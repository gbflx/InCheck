import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./style";

const TelaInicial = () => {
  return (
    <View style={Styles.container}>
      <Image source={require('../../assets/imgs/logo.png')} style={Styles.logo}/>
    </View>
  );
};

export default TelaInicial;
