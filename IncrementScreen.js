// IncrementScreen.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, Text, StyleSheet } from 'react-native';
import { increment } from './store'; // Import the increment action

const IncrementScreen = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Count: {count}</Text>
            <Button title="Increment" onPress={() => dispatch(increment())} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default IncrementScreen;
