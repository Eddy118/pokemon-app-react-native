import { View } from "react-native";
import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";
import CustomListingWrapper from "../../components/organisms/Listing";
import { useEffect, useState } from "react";
import { getPokemonListing } from "../../services/pokemonService";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updatePokemonList } from "../../store/pokemon.slice";
import Styles from "./HomeStyles";
import { pageSize } from "../../constants/environment";
import SkeletonPlaceholder from "../../components/Molecules/listSkeleton";

const HomeScreen = () => {
  const [page, setPage] = useState<number>(1);
  const pokemon = useAppSelector((state) => state.pokemon.pokemoms);
  const dispatch = useAppDispatch();

  const fetchPokemonListing = async () => {
    const results = await getPokemonListing({ page, pageSize });
    const pokemonList = [...pokemon].concat(results);
    dispatch(updatePokemonList(pokemonList));
  };

  useEffect(() => {
    fetchPokemonListing();
  }, [page]);

  return (
    <AppContainer>
      <View style={Styles.container}>
        <Header title="Gotta Catch 'Em All" />

        {pokemon?.length ? (
          <CustomListingWrapper
            data={pokemon}
            onReachEnd={() => setPage(page + 1)}
          />
        ) : (
          <SkeletonPlaceholder />
        )}
      </View>
    </AppContainer>
  );
};

export default HomeScreen;
