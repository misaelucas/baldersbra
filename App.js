import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./src/components/Header"
import Boxes from "./src/components/Boxes"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Boxes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
