import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Boxes() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Calculate your macros!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '85%',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#0f1117',
  },
  subtitle: {
    marginTop: '5%',
    color: '#1cd68f',
    fontFamily: 'monospace',
    fontWeight: 'bold',
  },
});
