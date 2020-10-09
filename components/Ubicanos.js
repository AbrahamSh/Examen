import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


export default function Ubicanos() {
  return (
    <View style={styles.container}>
     <MapView style={styles.estiloMapa}
     initialRegion={{
       latitude:19.48,
       longitude:-99.17,
       latitudeDelta:35,
       longitudeDelta:35
     }}>
     <Marker
     coordinate={{
       latitude:19.4018032,
       longitude:-99.2640348
     }}
     description='Anahuac México Norte'
     title='UAMN'
     image={require('../assets/favicon.png')}
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