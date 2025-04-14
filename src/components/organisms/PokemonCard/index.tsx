import { Image, TouchableOpacity, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Label from "../../Atoms/label";
import Tag from "../../Atoms/tag";
import colors from "../../../theme/colors";
import Styles from "./PokemonCardStyles";

type PokemonListingCardProps = {
  name: string;
  url: string;
  imageUrl: string;
  abilities: string[];
  isFav?: boolean;
};

const PokemonListingCard = ({ ...props }: PokemonListingCardProps) => {
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
                return <Tag title={ability} />;
              })}
            </View>
          </View>
          <View style={Styles.detailsBtn}>
            <TouchableOpacity style={Styles.detailsBtnContainer}>
              <Image
                source={require("../../../assets/images/right-arrow.png")}
                tintColor={"#ffff"}
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
