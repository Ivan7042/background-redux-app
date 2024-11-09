import 'react-native-gesture-handler';
import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './store';
import MainScreen from './MainScreen';
import IncrementScreen from './IncrementScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={MainScreen} />
                    <Stack.Screen name="Increment" component={IncrementScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
