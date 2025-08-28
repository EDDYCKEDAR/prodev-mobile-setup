import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
   <View>
  <Text style={styles.largeText}>Typescript is great if you practice more</Text>
  <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
  <Text style={styles.smallText}>ALX is awesome</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  mediumText: {
    fontSize: 18,
    marginTop: 10,
  },
  smallText: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 10,
  },
});
