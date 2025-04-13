import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import { SCREENS } from '../constants'

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
 return (
   <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
    </Stack.Navigator>
   </NavigationContainer>
 );
};

export default MainNavigation;