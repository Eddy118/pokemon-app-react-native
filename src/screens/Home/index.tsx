import { View } from "react-native";
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";
import CustomListingWrapper from "../../components/organisms/Listing";
import { useEffect, useState } from "react";
import { getPokemonListing } from "../../services/pokemonService";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AppDispatch } from "../../store/store";
import { updatePokemonList } from "../../store/pokemon.slice";

const pageSize = 30;
const HomeScreen = () => {
  const [page, setPage] = useState<number>(1);
  const pokemons = useAppSelector((state) => state.pokemon.pokemoms);
  const dispatch = useAppDispatch<AppDispatch>();

  const fetchPokemonListing = async () => {
    const results = await getPokemonListing({ page, pageSize });
    const pokemonList = [...pokemons].concat(results);
    dispatch(updatePokemonList(pokemonList));
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
