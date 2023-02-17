import React from 'react';
import { View, StyleSheet, Text, ScrollView, StatusBar, SafeAreaView, Platform } from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.content}>
                <Text>Content 1</Text>
            </View>
            <View style={styles.content}>
                <Text>Content 2</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
            <View style={styles.content}>
                <Text>Content</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
    },
    content: {
        alignSelf: 'center',
        flex: 1,
        width: '98%',
        height: 120,
        marginBottom: 20,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        justifyContent: 'center',
    }
})