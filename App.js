import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import Quienessomos from './components/Quienessomos.js';
import Contactanos from './components/Contactanos.js';
import Ubicanos from './components/Ubicanos.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Quienes Somos" component={Quienessomos} />
        <Tab.Screen name="Contactanos" component={Contactanos} />
         <Tab.Screen name="Ubicanos" component={Ubicanos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
