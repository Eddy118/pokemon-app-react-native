import { useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { SCREENS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import AppContainer from "../../components/organisms/AppContainer";
import Styles from "./SplashStyles";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.HOME);
    }, 5800);
  }, []);
  return (
    <AppContainer>
      <View style={Styles.container}>
        <LottieView
          source={require("../../assets/animations/splashAnimation.json")}
          autoPlay
          loop
          style={Styles.lottieAnimation}
        />
      </View>
    </AppContainer>
  );
};
export default Splash;
