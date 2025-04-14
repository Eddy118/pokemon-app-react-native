import { StyleSheet } from "react-native";
import fonts from "../../../theme/fonts";
import { RFValue } from "react-native-responsive-fontsize";
import { hp, wp } from "../../../utils/helper";
import colors from "../../../theme/colors";

const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: hp(2),
    width: wp(100),
    alignSelf: "center",
    borderRadius: wp(1),
    borderWidth: 0.5,
    borderColor: "#e6e6ea",
  },
  title: {
    fontFamily: fonts.Lato.bold,
    fontWeight: "bold",
    fontSize: RFValue(18),
    marginLeft: wp(1),
    color: colors.textPrimary,
  },
  IconImage: {
    width: hp(5),
    height: hp(5),
    backgroundColor: "red",
  },
  backBtn: {
    width: wp(10),
    height: hp(3),
    resizeMode: "contain",
  },
});

export default HeaderStyles;
