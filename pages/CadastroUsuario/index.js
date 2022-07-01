import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Styles from './style';
import TextBox from '../../componentes/TextBox';

export default function CadastroUsuario() {
 return (
   <View style={Styles.container}>
     <Image style={Styles.imglogo} source={require('../../assets/imgs/logo.png')}/>
    <Text style={Styles.title}>Recuperar Senha</Text>
      <TextBox inputTitle={'E-mail'}/>
    <View>
    </View>
   </View>
  );
}