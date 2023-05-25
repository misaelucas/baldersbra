import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.h1}> Macro Calculator </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  h1: {
    color: "red",
    marginTop: "10%",
    
  },
});
