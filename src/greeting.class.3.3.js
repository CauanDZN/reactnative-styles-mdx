import React from "react";
import { View, Text } from "react-native-web";
import { StyleSheet } from "react-native-web";

export default function App() {
  return (
    <View>
      <Text style={estilos.azul}>Oi, Cauan</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  vermelho: {
    color: "red"
  },
  azul: {
    color: "blue"
  }
})