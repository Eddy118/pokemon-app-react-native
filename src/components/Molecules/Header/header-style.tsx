import { StyleSheet } from "react-native";
import fonts from "../../../theme/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { hp, wp } from "../../../utils/helper";

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // alignItems: "center",
  },
  title: {
    fontFamily: fonts.Lato.bold,
    fontWeight: "bold",
    fontSize: RFValue(20),
    marginLeft: wp(1),
  },
  IconImage: {
    width: hp(5),
    height: hp(5),
    backgroundColor: "red",
  },
});

export default HeaderStyles;
