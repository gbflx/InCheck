import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Styles from './style';


export default function CadastroUsuario() {
 return (
   <View style={Styles.container}>
    <Text style={Styles.title}>Recuperar Senha</Text>
    <View>
      <Button>Entrar</Button>
    </View>
   </View>
  );
}