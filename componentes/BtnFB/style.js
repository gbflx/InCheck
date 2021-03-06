import { StyleSheet, StatusBar } from "react-native";

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  BtnFB: {
    backgroundColor: "#1876F4",
          flexDirection: 'row',
          width: "70%",
          height: 50,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 35,
          borderRadius: 10,
  },

  Text: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  Icon:{
    color:'#FFF',
    fontSize:35,
     marginRight: '5%',
     marginLeft: '5%'
  }
});

export default Styles;
