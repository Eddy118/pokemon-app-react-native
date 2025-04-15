import { Image, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Label from "../../Atoms/label";
import Tag from "../../Atoms/tag";
import colors from "../../../theme/colors";
import Styles from "./PokemonCardStyles";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants";

type PokemonListingCardProps = {
  name: string;
  url: string;
  imageUrl: string;
  abilities: string[];
  isFav?: boolean;
};

const PokemonListingCard = ({ ...props }: PokemonListingCardProps) => {
  const navigation = useNavigation();

  const naviagteToDetails = (name: string) => {
    navigation.navigate(SCREENS.pokemondetails, {
      name,
    });
  };

  return (
    <View style={Styles.container}>
      <Shadow style={Styles.cardShadow}>

        <Image style={Styles.pokemonImage} source={{ uri: props.imageUrl }} />
        <View style={{ flexDirection: "row" }}>
          <View style={{ backgroundColor: colors.cardBackground }}>
            <Label
              title={props.name?.toUpperCase()}
              styles={Styles.cardLable}
            />
            <View style={Styles.tagContainer}>
              {props?.abilities?.map((ability: string) => {
                return <Tag key={ability} title={ability} />;
              })}
            </View>
          </View>
          <View style={Styles.detailsBtn}>
            <TouchableOpacity
              style={Styles.detailsBtnContainer}
              onPress={() => naviagteToDetails(props?.name)}
            >
              <Image
                source={require("../../../assets/images/right-arrow.png")}
                tintColor={colors.white}
                resizeMode="contain"
                style={Styles.arrowStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Shadow>
    </View>
  );
};
export default PokemonListingCard;
