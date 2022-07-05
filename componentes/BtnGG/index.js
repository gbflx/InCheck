import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './style';

export default function BtnGG() {
 return (
    <View style={Styles.container}>
    <TouchableOpacity style={Styles.BtnFB}>
    <Text style={Styles.Text}>Entrar com Google</Text>
    </TouchableOpacity>
  </View>
  );
}