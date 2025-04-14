import React, { useEffect } from "react";
import { Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { SCREENS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import AppContainer from "../../components/organisms/AppContainer";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.HOME);
    }, 5800);
  }, []);
  return (
    <AppContainer>
      <LottieView
        source={require("../../assets/animations/splashAnimation.json")}
        autoPlay
        loop
        style={{
          height: 100,
          width : 100
        }}
      />
    </AppContainer>
  );
};
export default Splash;
