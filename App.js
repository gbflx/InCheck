import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CadastroUsuario from "./pages/CadastroUsuario";
import CadastroPrin from "./pages/CadastroPrin";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario}/>
        <Stack.Screen name="CadastroPrin" component={CadastroPrin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
