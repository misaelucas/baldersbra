import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Header from "./src/components/Header"
import MacroCalculator from "./src/components/MacroCalculator"

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <MacroCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
