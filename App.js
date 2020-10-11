import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Quienessomos from './components/Quinessomos';
import Contactanos from './components/Contactanos';
import Ubicanos from './components/Ubicanos';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Quienes Somos"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Quienes Somos') {
            iconName = focused
              ?  require('./assets/QS1.png')
              :  require('./assets/QS.png');
              
          } else if (route.name === 'Contáctanos') {
            iconName = focused 
            ?  require('./assets/Contacto1.png')
            :  require('./assets/Contacto.png');
          } else if (route.name === 'Ubicanos') {
           if(iconName = focused ){
            return <FontAwesome5 name="map-marked-alt" size={24} color="darkgrey" />;
           }else{
            return <FontAwesome5 name="map-marked-alt" size={24} color="black" />;
           }
           
          }
           return (<Image style={{ width: 30, height: 30,resizeMode:"cover" }} 
           source={iconName} />)
        }
      })}
      tabBarOptions={{
        activeTintColor: 'darkgrey',
        inactiveTintColor: 'black',
        style: {
          backgroundColor: 'teal',
        },
        labelStyle: {
          textAlign: 'center',
          fontSize: 12.5
        },
      }}
      
      >
        <Tab.Screen name="Quienes Somos" component={Quienessomos} />
        <Tab.Screen name="Contáctanos" component={Contactanos} />
         <Tab.Screen name="Ubicanos" component={Ubicanos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
