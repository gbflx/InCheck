import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

export default function BtnGG() {
 return (
    <View style={Styles.container}>
    <TouchableOpacity style={Styles.BtnGG}>
    <Text style={Styles.Text}>Entrar com Google</Text>
    <Icon name="google" style={Styles.Icon}/>   
    </TouchableOpacity>
    <View>
    </View>
  </View>
  );
}