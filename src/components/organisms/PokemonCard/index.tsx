import { Image, View, Pressable } from "react-native";
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

  const navigateToDetails = (name: string) => {
    navigation.navigate(SCREENS.pokemondetails, {
      name,
    });
  };

  return (
    <View style={Styles.container}>
      <Shadow style={Styles.cardShadow}>

        <Pressable onPress={() => navigateToDetails(props?.name)}><Image   style={Styles.pokemonImage} source={{ uri: props.imageUrl }} /></Pressable>
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
        </View>
      </Shadow>
    </View>
  );
};
export default PokemonListingCard;
