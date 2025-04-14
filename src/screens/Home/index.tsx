import { View } from "react-native";
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";
import CustomListingWrapper from "../../components/organisms/Listing";
import { useEffect, useState } from "react";
import { PokemonType } from "../../shared/types/types";
import { getPokemonListing } from "../../services/pokemonService";

const pageSize = 30;

const HomeScreen = () => {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchPokemonListing = async () => {
    const results = await getPokemonListing({ page, pageSize });

    const pokemonList = [...pokemons].concat(results)
    setPokemons(pokemonList);
  };

  useEffect(() => {
    fetchPokemonListing();
  }, [page]);

  return (
    <>
      <AppContainer>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Header title="Gotta Catch 'Em All" />
          <CustomListingWrapper
            data={pokemons}
            onReachEnd={() => setPage(page + 1)}
          />
        </View>
      </AppContainer>
    </>
  );
};

export default HomeScreen;
