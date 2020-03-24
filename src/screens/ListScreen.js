import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
    const namesList = [
        { age: '1', name: 'Josh' },
        { age: '2', name: 'Amy' },
        { age: '3', name: 'Rose' },
        { age: '4', name: 'Joshua' },
        { age: '5', name: 'Amanda' },
        { age: '6', name: 'Roselie' },
        { age: '7', name: 'Jan' },
        { age: '9', name: 'Robert' },
        { age: '10', name: 'Joe' },
        { age: '11', name: 'Manny' },
        { age: '12', name: 'Ronald' },
      ];

    return (
        <View>
        <Text style={styles.title}>Here is a List of Names</Text>
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={obj => obj.name}
            data={namesList}
            renderItem={({item}) => {
            return (
                <Text style={styles.listItem}>{item.name} - Age {item.age}</Text>
            );
            }}
        />
        </View>
  )
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 10,
  },
  listItem: {
    fontSize: 20,
    color: 'blue',
    padding: 5,
  },
});

export default ListScreen;