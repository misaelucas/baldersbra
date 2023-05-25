import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.h1}> Baldersbra </Text>
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
    color: "white",
    marginTop: "%",
    fontSize: '32px',
    letterSpacing: '-1px',
    
    fontFamily: 'monospace',
    fontWeight: 'bold',
    
  },
});
