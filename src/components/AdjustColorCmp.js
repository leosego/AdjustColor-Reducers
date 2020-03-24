import React from "react";
import {Button, StyleSheet, Text, View } from "react-native";

const AdjustColorCmp = ({colorName, onIncrease, onDecrease }) => {
    return (
        <View>
                <View style={ styles.spacer }/>
            <Text style={ styles.text }>{colorName}</Text>
                <View style={ styles.spacer }/>
            <Button title={ `Increase ${colorName}` } onPress={() => onIncrease()} />
                <View style={ styles.spacer }/>
            <Button title={ `Decrease ${colorName}` } onPress={() => onDecrease()} />
                <View style={ styles.spacer }/>
        </View>
    )
};

const styles = StyleSheet.create({
    spacer: {
        padding: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default AdjustColorCmp;