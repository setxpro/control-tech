import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Favorites() {
  return (
    <View style={styles.container}>
        <Text>Salvos</Text>
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

export default Favorites;