import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Boxes() {
  return (
    <View style={styles.container}>
      <Text>Box 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
