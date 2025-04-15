import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils/helper";
import colors from "../../../theme/colors";

const BackgroundCardStyles = StyleSheet.create({
  mainBackground: {
    width: "100%",
    height: hp(30),
    resizeMode: "contain",
  },
  backgroundImageContainer: {
    width: wp(30),
    height: wp(30),
    position: "absolute",
    left: wp(2),
    bottom: 5,
    borderWidth: 5,
    borderRadius: "50%",
    borderColor: colors.orange,
    backgroundColor: colors.white,
  },
  backgroundImage: {
   width: "100%",
   height: wp(30),
   resizeMode: "contain",
 },
});
export default BackgroundCardStyles;
