import React from "react";
import { View, Text, Image, Input, ScrollView } from "react-native";
import Styles from "./style";
import Marks from "../../componentes/Marks";


const TelaInicial = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.pt1}>
      <Image source={require('../../assets/imgs/logo.png')} style={Styles.logo}/> 
      <Text style={Styles.Name}>Olá, Glauber!</Text>      
      <ScrollView horizontal={true}>
        <Marks text={'Checklists Aplicados'} colorIcon={'#007CDE'} name={'check-double'} number={19}/>
        <Marks text={'Checklists conformes'} colorIcon={'#8DC643'} name={'check-double'} number={13}/>
        <Marks text={'Checklists não conformes'} colorIcon={'#FE1243'} name={'check-double'}/>
        <Marks text={'Checklists não aplicados'} colorIcon={'#FE1243'} name={'window-close'}/>
      </ScrollView>
      </View>
    </View>
  );
};

export default TelaInicial ;
