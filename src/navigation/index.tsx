import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/Home";
import { SCREENS } from "../constants";
import Splash from "../screens/Splash";
import PokemonDetails from "../screens/Pokemon-Details";
import Toast from "react-native-toast-message";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={SCREENS.SPLASH} component={Splash} />
        <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
        <Stack.Screen
          name={SCREENS.pokemondetails}
          component={PokemonDetails}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
};

export default MainNavigation;
