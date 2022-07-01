import React from "react";
import { View, TextInput, Text,  TouchableOpacity } from "react-native";
import Styles from "./style";

const TextBox = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.ctInput}>
        <Text style={Styles.Text} allowFontScaling={false}>{props.inputTitle}</Text>
        <TextInput style={Styles.TextBox} keyboardType={'url'}/>
      </View>
      <TouchableOpacity style={Styles.Btn}><Text style={Styles.Txt}>Entrar</Text></TouchableOpacity>
    </View>
  );
};

export default TextBox;
