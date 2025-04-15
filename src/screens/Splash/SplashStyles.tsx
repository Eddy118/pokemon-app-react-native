import { StyleSheet } from "react-native";
import { wp } from "../../utils/helper";

const SplashStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottieAnimation: {
    width: wp(90),
    height: 300,
  },
});

export default SplashStyles;
