import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import fonts from "../../../theme/fonts";
import { wp } from "../../../utils/helper";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal : wp(3)
  },
  emoji: {
    fontSize: wp(10),
  },
  title: {
    fontSize: wp(4.5),
    fontWeight: "bold",
    marginVertical: wp(2),
  },
  message: {
    textAlign: "center",
    fontSize: wp(4),
    fontFamily: fonts.Lato.regular,
    marginVertical: wp(2),
  },
});

export default styles;
