import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { wp } from "../../../utils/helper";
import fonts from "../../../theme/fonts";

const tagStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange,
    borderRadius: wp(10),
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: wp(1),
  },
  title: {
    paddingHorizontal: wp(1),
    paddingVertical: wp(1),
    fontFamily: fonts.Robto.semiBold,
    color: colors.white,
  },
});
export default tagStyles;
