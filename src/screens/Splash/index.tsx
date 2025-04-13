import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { SCREENS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.HOME);
    }, 5800);
  }, []);
  return (
    <LottieView
      source={require("../../assets/animations/splashAnimation.json")}
      style={{ flex: 1 }}
      autoPlay
      loop={false}
    />
  );
};
export default Splash;
