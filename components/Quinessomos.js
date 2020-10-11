import * as React from 'react';
import { Text, View,Image, ScrollView,StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
export default function Quienessomos() {
  const CustomIcon=()=>{
    return(
      <Image source={require('../assets/Logo.png')}
        style={{height:65,width:80,resizeMode:"contain"}}/>
    );
  }
  const styles= StyleSheet.create({
    text:{
      fontWeight:'bold', 
      fontSize:18,
      textAlign:'center'
    }
  })
  return (
    <View style={{alignItems: 'center', flex:1,backgroundColor:'dodgerblue'}}>
      <Header centerComponent={{ text: 'Game Repair Workshop', style: { color: '#fff',fontSize:13, fontWeight:'bold' } }}
      rightComponent={()=>CustomIcon()}
      containerStyle={{
        backgroundColor: '#f00',
        justifyContent: 'space-around',
        paddingHorizontal:2
      }}/>
         <ScrollView>
      <Text style={{fontWeight:'bold', fontSize:30, textAlign:'center'}}>Quienes Somos</Text>
     <Text>{'\n'}</Text>
       <Text style={styles.text}> 
        Somos un taller dedicado a reparar todos los posibles problemas que tengas
        con tu consola de videojuegos, cartuchos y controles sin importar si son nuevos o 
        retro o que marca sean.{'\n'} Reparamos todo desde el Atari hasta lo último de Nintendo, Sony o Microsoft.</Text>
        <Text>{'\n'}</Text>
        <Image source={{uri:'https://www.mediaplaynews.com/wp-content/uploads/2020/02/videogames-1-e1522270884482.jpg'}}
        style={{height:300,width:300,resizeMode:"stretch",alignSelf:'center'}}/>
        <Text>{'\n'}</Text>
        <Text style={styles.text}> 
        Realizamos servcios de limpieza, cambios de baterías a los cartuchos y consolas portátiles,
        remplazo de joysticks y botones de los controles.{'\n'}
        Tenemos más de 20 años de experiencia en la reparación de consolas de videojuegos y cartuchos.
        Por lo que, no dudes en contactarnos o visitar nuestras sucursales ubicadas en distintas zonas
        de la Ciudad de México.        
        </Text>
        <Text>{'\n'}</Text>
        <Image source={{uri:'https://www.pieuvre.ca/wp-content/uploads/2017/02/ConsoleR%C3%A9paration.jpg'}}
        style={{height:300,width:300,resizeMode:"stretch",alignSelf:'center'}}/>
        <Text style={styles.text}>Reparación de PS4.{'\n'}</Text>
        <Text style={styles.text}> 
        Contamos con un personal 100% capacitado para buscar y solucionar los 
        problemas que tengas. Además de tener un amplio stock de refacciones para
        los remplazos de distintos componentes.
        </Text>
        <Text>{'\n'}</Text>
        <Image source={{uri:'https://www.techstationglasgow.co.uk/wp-content/uploads/2019/09/Nintendo-Switch-Repair-730x356-1.jpg'}}
        style={{height:300,width:300,resizeMode:"stretch",alignSelf:'center'}}/>
         <Text style={styles.text}>Reparación de Nintendo Switch.{'\n'}</Text>
        <Image source={{uri:'https://d3nevzfk7ii3be.cloudfront.net/igi/GJo6fsTpnpQpVVAY'}}
        style={{height:300,width:300,resizeMode:"stretch",alignSelf:'center'}}/>
         <Text style={styles.text}>Reparación de control de Xbox.</Text>
        </ScrollView>
    </View>
  );
}

