import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./style";


import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Button({ navigation }) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.Btn} onPress={() => navigation('CadastroPrin')}>
        <Text style={Styles.Txt}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
