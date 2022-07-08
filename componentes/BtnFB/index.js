import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Styles from "./style";
import Icon from'react-native-vector-icons/FontAwesome5'
 
export default function BtnFB() {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.BtnFB}>
        <Icon name="facebook" style={Styles.Icon}/>
      <Text style={Styles.Text}>Entrar com Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}
