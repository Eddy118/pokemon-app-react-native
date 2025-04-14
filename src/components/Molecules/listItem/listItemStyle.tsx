import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils/helper";
import fonts from "../../../theme/fonts";
import { RFValue } from "react-native-responsive-fontsize";

const listItemStyles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    marginLeft: wp(1),
    marginBottom: wp(1),
    width: wp(80),
    flexWrap: "wrap",
  },
  container: {
    flexDirection: "row",
    marginTop: hp(1),
    width: wp(90),
  },
  label: {
    fontFamily: fonts.Lato.bold,
    fontSize: RFValue(15),
  },
});
export default listItemStyles;
