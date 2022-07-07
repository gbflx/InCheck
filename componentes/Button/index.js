import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "./style";


import { NavigationContainer, useLinkProps} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Button({ navigation, inputTitle }) {
  return (
    <View style={Styles.container}>
      <TouchableOpacity style={Styles.Btn} onPress={() => {
        props.onPress();
      }}>
        <Text style={Styles.Txt}>{inputTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}
