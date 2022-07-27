import { View, Text } from "react-native";
import React from "react";
import Styles from "./style";
import Icons from "react-native-vector-icons/FontAwesome5";

export default function Marks(props) {
  return (
    <View style={Styles.container}>
        <Icons name={props.name} style={Styles.Icon} color={props.colorIcon}/>
        <Text style={Styles.TEXTO}>{props.text}</Text>
        <Text style={Styles.num}>{props.number}</Text>
    </View>
  );
}
