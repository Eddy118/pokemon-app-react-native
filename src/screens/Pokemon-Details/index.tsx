import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../../services/pokemonService";
import { View, Image } from "react-native";
import { hp } from "../../utils/helper";
import Label from "../../components/Atoms/label";
import Tag from "../../components/Atoms/tag";
import Styles from "./PokemonDetailsStyle";
import { ScrollView } from "react-native";
import apiClient from "../../api/apiClient";
import ListItem from "../../components/Molecules/listItem";
import StatsChart from "../../components/Molecules/StatsChart";

const PokemonDetails = ({ route }) => {
  const [pokemon, setPokemons] = useState<any>({});
  const [species, setSpecies] = useState<any>({});

  const { name } = route.params;

  const fetchPokemonListing = async () => {
    const results = await getPokemonDetails(name);
    setPokemons(results);
  };

  useEffect(() => {
    fetchPokemonListing();
  }, []);

  const fetchSpeciesDetails = async (url: string) => {
    const speciesUrl = url?.split("v2")[1];
    const { data } = await apiClient.get(speciesUrl);
    setSpecies(data);
  };
  useEffect(() => {
    fetchSpeciesDetails(pokemon?.species?.url);
  }, [pokemon]);

  const backgroundImage =
    pokemon?.sprites?.other?.["official-artwork"]?.front_default;

  const abilities =
    pokemon?.abilities?.map(({ ability }) => ability?.name) ?? [];

  const stats = pokemon?.stats?.map((stats) => stats?.base_stat);

  const types = pokemon?.types?.map(({ type }) => type?.name);

  const names = species?.names?.map(({ name }) => name);

  const genus = species?.genera?.map(({ genus }) => genus);

  return (
    <AppContainer>
      <Header showBackButton={true} title={name?.toUpperCase()} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "100%", height: hp(30) }}>
          <Image
            source={{ uri: backgroundImage }}
            style={Styles.mainBackground}
          />

          <View style={Styles.backgroundImageContainer}>
            <Image
              source={{ uri: backgroundImage }}
              style={Styles.backgroundImage}
            />
          </View>
        </View>

        <View style={Styles.listItemsContainer}>
          <View style={Styles.tagContainer}>
            {abilities?.map((ability: string) => {
              return <Tag title={ability} />;
            })}
          </View>

          <ListItem label="Names: " types={names} />

          <ListItem label="Genera: " types={genus} />

          <ListItem
            label="Base Expereince: "
            types={[pokemon?.base_experience]}
          />

          <ListItem label="Types: " types={types} />

          <ListItem label="Weight: " types={[pokemon?.weight]} />
        </View>

        {pokemon?.stats && (
          <View style={Styles.graphContainer}>
            <Label title="Stats: " styles={Styles.statsLabel} />

            <StatsChart  stats={stats} />
          </View>
        )}
      </ScrollView>
    </AppContainer>
  );
};

export default PokemonDetails;
