import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils/helper";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../../theme/fonts";

const PokemonDetailsStyles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    marginLeft: wp(1),
    marginBottom: wp(1),
  },

  listItemsContainer: {
    paddingHorizontal: wp(1),
  },
  graphContainer: {
    alignSelf: "center",
    marginTop: hp(1),
  },
  statsLabel: {
    fontSize: RFValue(15),
    fontFamily: fonts.Lato.semiBold,
  },
  graphStyle: {
    marginVertical: 10,
    borderRadius: 16,
  },

});

export default PokemonDetailsStyles;
