import { StyleSheet } from "react-native";
import { hp, wp } from "../../../utils/helper";

const ListingStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp(100),
    paddingTop: hp(1),
  },
  listStyles: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(1),
  },
  listContentStyles: {
    alignSelf: "center",
    width: "95%",
  },
  itemSeperator: {
    height: hp(1),
  },
});
export default ListingStyles;
