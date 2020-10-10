import  React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Linking,Image} from 'react-native';
import Communications from 'react-native-communications';
import { Header } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
// either import the whole module and call as Communications.phonecall('0123456789', true)
// or can import single methods and call straight via the method name
// import { web, phonecall } from 'react-native-communications';
// e.g. onPress={() => { phonecall('0123456789', true) }}
const CustomIcon=()=>{
  return(
    <Image source={require('../assets/Logo.png')}
      style={{height:65,width:80,resizeMode:"contain"}}/>
  );
}
export default class Contactanos extends Component{

constructor(props) {
   super(props);
   this.state = {
     telefono: '5540560365',
     emails:'contacto@gamerepair.com'
   };
 }
  render() {
    return (
      
      <View style={{alignItems: 'center', flex:1,backgroundColor:'dodgerblue'}}>
        <Header centerComponent={{ text: 'Game Repair', style: { color: '#fff',fontSize:20 } }}
      rightComponent={()=>CustomIcon()}
      containerStyle={{
        backgroundColor: '#f00',
        justifyContent: 'space-around'
      }}/>
      <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center'}}> Contáctanos</Text>
    <Text>{'\n\n'}</Text>
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => {
            Linking.openURL(
            //  'http://api.whatsapp.com/send?phone=+521' + this.state.mobile_no
              'https://wa.me/521'+this.state.telefono +'?text=Hola%20me%20gustaria%20obtener%20mas%20informacion%20sobre'
            );
          }} >
        
            <Text style={styles.text}>
             Contáctanos vía WhatsApp
            </Text>
            <View style={{ paddingHorizontal: 10,position: 'absolute', alignSelf:'flex-end'}}>
               <FontAwesome5 name="whatsapp" size={35} color="black"/>
            </View>
        </ TouchableOpacity>
        {/*To send the mail function(to, cc, bcc, subject, body)*/}
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.email(this.state.emails.split(',') ,null,null,'Quiero información','Hola me gustaría obtener más información sobre')}>
         
            <Text style={styles.text}>
            Envianos un Correo
            </Text>
            <View style={{paddingHorizontal: 75, position: 'absolute',alignSelf:'flex-end'}}>
               <MaterialIcons name="email" size={35} color="black" />
            </View>
            
        </ TouchableOpacity>
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.text(this.state.telefono, 'Hola me gustaría obtener más información sobre')}>
            <Text style={styles.text}>
              Envianos un SMS
            </Text>
            <View style={{paddingHorizontal: 80, position: 'absolute',alignSelf:'flex-end'}}>
            <FontAwesome5 name="sms" size={35} color="black" />
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}
 
var styles = StyleSheet.create({

  button: {
    justifyContent: 'center',
    width : 300,
    backgroundColor:"#009933",
    marginTop : 20,
    textAlign : 'left',
    padding : 10,
    color : '#ffffff'
  },
  text: {
    fontSize: 18,
    textAlign : 'left',
    padding : 10,
    color : '#ffffff',
    
  }   
});