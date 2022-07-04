import React from "react";
import { View, TextInput, Text,  TouchableOpacity } from "react-native";
import Button from "../Button";
import Styles from "./style";

const TextBox = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.ctInput}>
        <Text style={Styles.Text} allowFontScaling={false}>{props.inputTitle}</Text>
        <TextInput style={Styles.TextBox} keyboardType={'email-address'}/>
      </View>
       <Button/>
    </View>
  );
};

export default TextBox;
