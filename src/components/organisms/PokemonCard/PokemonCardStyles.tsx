import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { hp, wp } from "../../../utils/helper";
import { RFPercentage as RF } from "react-native-responsive-fontsize";

const PokemonCardStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  cardShadow: {
    width: "100%",
    borderRadius: wp(3),
  },
  pokemonImage: {
    height: hp(20),
    resizeMode: "contain",
  },
  cardLable: {
    fontWeight: "bold",
    fontSize: RF(2),
    padding: wp(2),
  },
  tagContainer: {
    flexDirection: "row",
    marginLeft: wp(1),
    marginBottom: wp(1),
  },
  detailsBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  detailsBtnContainer: {
    backgroundColor: colors.primaryLight,
    width: wp(12),
    height: wp(12),
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp(4),
  },
  arrowStyle: {
    width: wp(6),
    height: wp(6),
  },
});
export default PokemonCardStyles;
