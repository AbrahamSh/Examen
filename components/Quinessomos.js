import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Quienessomos() {
  return (
    <View style={{padding:20, alignItems: 'center'}}>
      <Text style={{fontWeight:'bold', fontSize:30}}>Quienes Somos</Text>
  <Text>{'\n'}</Text>
      <Text>Somos un taller mecánico que repara cualquier tipo de problemas que existan</Text>
      
  
    </View>
  );
}

