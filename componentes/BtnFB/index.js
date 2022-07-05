import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Styles from "./style";
import Icon from'react-native-vector-icons/FontAwesome'

export default function BtnFB() {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.BtnFB}>
      <Text style={Styles.Text}>Entrar com Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}
