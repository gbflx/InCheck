import React from "react";
import { View, TextInput, Text,  TouchableOpacity } from "react-native";
import Button from "../Button";
import Styles from "./style";

const TextBox = (props) => {
  return (
    <View style={Styles.container}>
      <View style={[Styles.ctInput, props.style]}>
        <Text style={Styles.Text} allowFontScaling={false}>{props.inputTitle}</Text>
        <TextInput secureTextEntry={props.secureTextEntry} style={Styles.TextBox} keyboardType={'email-address'} placeholder={props.inputTitle}/>
      </View>
    </View>
  );
};

export default TextBox;
