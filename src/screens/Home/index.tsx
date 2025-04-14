import { View } from "react-native";
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";
import CustomListingWrapper from "../../components/organisms/Listing";
import { useEffect, useState } from "react";
import { PokemonType } from "../../shared/types/types";
import { getPokemonListing } from "../../services/pokemonService";

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const fetchPokemonListing = async () => {
    const results = await getPokemonListing();
    setPokemons(results);
  };

  useEffect(() => {
    fetchPokemonListing();
  }, []);

  return (
    <AppContainer>
      <Header title="Gotta Catch 'Em All" />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CustomListingWrapper data={pokemons} />
      </View>
    </AppContainer>
  );
};

export default HomeScreen;
