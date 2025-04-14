import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils/helper";
import colors from "../../theme/colors";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "../../theme/fonts";

const PokemonDetailsStyles = StyleSheet.create({
  tagContainer: {
    flexDirection: "row",
    marginLeft: wp(1),
    marginBottom: wp(1),
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
  mainBackground: {
    width: "100%", height: hp(30), resizeMode: "contain"
  }
});

export default PokemonDetailsStyles;
