import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Search() {
  return (
    <View style={styles.container}>
        <Text>Search</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Search;