import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const colorWhite = '#fff';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const myComponent = () => (
  // Stuff here
  <View style={styles.container}>
    <Text>
      Open up App.js to start working on your app!
    </Text>
  </View>
);

export default class App extends React.Component {
  render() {
    return myComponent;
  }
}
