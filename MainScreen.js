// MainScreen.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import { changeColor } from './store'; // Import the changeColor action

const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const backgroundColor = useSelector((state) => state.backgroundColor);

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Button title="Change Background Color" onPress={() => dispatch(changeColor())} />
            <Button title="Go to Increment Screen" onPress={() => navigation.navigate('Increment')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MainScreen;
