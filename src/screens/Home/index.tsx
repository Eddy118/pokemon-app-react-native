import { View } from "react-native";
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";
import CustomListingWrapper from "../../components/organisms/Listing";
import { useEffect, useState } from "react";
import { getPokemonListing } from "../../services/pokemonService";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { AppDispatch } from "../../store/store";
import { updatePokemonList } from "../../store/pokemon.slice";
import Styles from "./HomeStyles";
import { pageSize } from "../../constants/environment";
import SkelonPlaceholder from "../../components/Molecules/listSkeleton";

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
        <View style={Styles.container}>
          <Header title="Gotta Catch 'Em All" />

          {pokemons?.length ? (
            <CustomListingWrapper
              data={pokemons}
              onReachEnd={() => setPage(page + 1)}
            />
          ) : (
            <SkelonPlaceholder />
          )}
        </View>
      </AppContainer>
    </>
  );
};

export default HomeScreen;
