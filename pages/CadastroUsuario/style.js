import { StyleSheet, StatusBar } from "react-native";

const Styles = StyleSheet.create({
    container:{
       alignItems:'center',
       backgroundColor:'#F1EFF4',
       height:'100%'
       
    },
    title:{
     display:'flex', 
    marginTop: 22,
    fontSize:30,
    width:'50%',
    textAlign:'center',
    fontWeight:'bold',
    color:'#3A2766'
    
    },
    imglogo:{
        width:210,
        resizeMode:'contain',
        marginTop:StatusBar.currentHeight + 60
    },
    BoxMail:{
        marginTop:26,
    }

})

export default Styles;