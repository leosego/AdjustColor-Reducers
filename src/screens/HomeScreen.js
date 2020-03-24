import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
        <Text style={styles.text}>Welcome!</Text>

        <TouchableOpacity 
            onPress={() => props.navigation.navigate('List')}>
                <Text>Go to List Demo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() => props.navigation.navigate('Components')}>
                <Text>Go to Components Demo</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;