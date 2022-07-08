import { StyleSheet, StatusBar } from "react-native";

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    
  },
  TextBox: {
    borderBottomColor: "#8257E5",
    borderBottomWidth: 1,
    width: "100%",
    paddingHorizontal: 4,
    fontSize:16,
  },
  ctInput: {
    paddingHorizontal: 3,
    paddingVertical: 15,
    height: 49,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: "80%",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  Text: {
    color: "#D0C1F5",
  },
 
});

export default Styles;
