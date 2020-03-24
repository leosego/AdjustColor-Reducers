import React from "react"
import { Text, StyleSheet, View } from "react-native"
import NameTag from '../components/NameTag'
import { color } from 'react-native-reanimated';

const ComponentsScreen = () => {
  return (
    <View style={styles.background}>
      <Text style={styles.text}>Components</Text>

      <NameTag
        Name="Amy"
        Desc="Likes to play in the park."
      />
      <NameTag
        Name="John"
        Desc="Hate going to the mall."
      />
    </View>
  )
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'lightgray',
    flex: 1
  },
  text: {
    fontSize: 30,
    padding: 10,
    alignItems: 'center' /* TODO: not working */
  },
  tagStyle: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ComponentsScreen;