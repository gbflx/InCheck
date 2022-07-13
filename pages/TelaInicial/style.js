import { StyleSheet, StatusBar } from "react-native";

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F1EFF4",
  },
  logo: {
    marginTop: 40,
    width: 122,
    height: 35,
    marginLeft:22
  },
  pt1:{
    width:'100%',
    height:'40%',
    backgroundColor:'#FFF',
    borderRadius:30,
    shadowColor: "#000",
shadowOffset:{
width: 0,
height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,
elevation: 6,
  },
  Name:{
    marginTop:20,
    marginLeft:22,
    fontSize:28,
    color:'#8257E5',
  },
  Date:{
    width:179,
    height:25,
    borderColor:'#8257E5',
    borderWidth:1,
    borderRadius:12,
    marginLeft:180, 
  }
});

export default Styles;
