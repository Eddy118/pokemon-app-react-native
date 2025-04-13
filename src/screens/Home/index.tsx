import React from 'react';
import { View, Text } from 'react-native';
import Fonts from '../../theme/fonts';


const HomeScreen = () => {
  
 return (
   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={{fontFamily : Fonts.Lato.bold}}>Home Screen</Text>
   </View>
 );
}

export default HomeScreen;
