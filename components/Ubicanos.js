import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default function Ubicanos() {
  return (
    <View style={styles.container}>
     <MapView style={styles.estiloMapa}
     initialRegion={{
       latitude:19.41228297,
       longitude:-99.20579195,
       latitudeDelta:0.25,
       longitudeDelta:0.25
     }}>
     <Marker
     coordinate={{
       latitude:19.43228683,
       longitude:-99.13794547
     }}
     description='Sucursal Centro Histórico'
     title='Game Repair Centro Histórico'
     image={require('../assets/Marcador.png')}
     />
    <Marker
     coordinate={{
       latitude:19.3610414,
       longitude:-99.2737351
     }}
     description='Sucursal Santa Fe'
     title='Game Repair Santa Fe'
     image={require('../assets/Marcador.png')}
     />
       <Marker
     coordinate={{
       latitude:19.41162524,
       longitude:-99.27117079
     }}
     description='Sucursal Palo Solo'
     title='Game Repair Palo Solo'
     image={require('../assets/Marcador.png')}
     />
     </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloMapa:
  {
      width: Dimensions.get('window').width,
      height:Dimensions.get('window').height,
  }
});