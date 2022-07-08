import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "../Button";
import Styles from "./style";

const TextBox = (props) => {
  const [value, setValue] = useState(null);

  return (
    <View style={[Styles.container, props.style]}>
      <View style={[Styles.ctInput]}>
        <Text style={Styles.Text} allowFontScaling={false}>
          {props.inputTitle}
        </Text>
        <TextInput
          value={value}
          secureTextEntry={props.secureTextEntry}
          keyboardType="ascii-capable"
          onChangeText={(text) => {
            setValue(text);
          }}
          style={Styles.TextBox}
          
        />
      </View>
    </View>
  );
};

export default TextBox;
