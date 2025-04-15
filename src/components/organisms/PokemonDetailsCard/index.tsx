import { View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Styles from "./PokemondetailsCardStyle";
import { extractPokemonDescription } from "../../../utils/helper";
import Label from "../../Atoms/label";
import StatsChart from "../../Molecules/StatsChart";
import ListItem from "../../Molecules/listItem";
import DetailsCard from "../../Molecules/DetailsCard";
import Tag from "../../Atoms/tag";

interface PokemonDetailsCardProps {
  abilities: string[];
  names: string[];
  genus: string[];
  stats: number[];
  species: any;
  baseExperience: string;
  types: string[];
  weight: string;
}
const PokemonDetailsCard = ({
  abilities,
  names,
  genus,
  stats,
  species,
  baseExperience,
  types,
  weight,
}: PokemonDetailsCardProps) => {
  return (
    <Shadow style={{ paddingHorizontal: 2 }}>
      <View style={Styles.listItemsContainer}>
        <View style={Styles.tagContainer}>
          {abilities?.map((ability: string) => {
            return <Tag key={ability} title={ability} />;
          })}
        </View>

        <DetailsCard description={extractPokemonDescription(species)} />

        <ListItem label="Names: " types={names} />

        <ListItem label="Genera: " types={genus} />

        <ListItem label="Base Expereince: " types={[baseExperience ?? ""]} />

        <ListItem label="Types: " types={types} />

        <ListItem label="Weight: " types={[weight ?? ""]} />
      </View>

      {stats && (
        <View style={Styles.graphContainer}>
          <Label title="Stats: " styles={Styles.statsLabel} />
          <StatsChart stats={stats} />
        </View>
      )}
    </Shadow>
  );
};
export default PokemonDetailsCard;
