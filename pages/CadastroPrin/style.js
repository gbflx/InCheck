import { StyleSheet, StatusBar } from "react-native";

const Styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F1EFF4",
    height: "100%",
    width: "100%",
  
  },
  img: {
    marginTop: 40,
    width: 210,
    height: 60,
  },
  TXT: {
    marginTop: 44,
    fontSize: 36,
    fontWeight: "bold",
    color: "#3A2766",
  },
  BoxName: {
    height: 49,
    marginTop: 41,
  },
  BoxMail: {
    marginTop: 30,
  },
  password: {
    marginTop: 30,
  },
  Btn: {
      marginTop: 31,
  },
  confirm:{
marginTop:30
  },
  Line:{
    marginTop:47,
    width:'90%',
    borderBottomWidth:1,
    borderColor:'#9D7DE8'
  }
});

export default Styles;
