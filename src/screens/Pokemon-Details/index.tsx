import AppContainer from "../../components/organisms/AppContainer";
import Header from "../../components/Molecules/Header";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../../services/pokemonService";
import apiClient from "../../api/apiClient";
import PokemonDetailsCard from "../../components/organisms/PokemonDetailsCard";
import BackgroundCard from "../../components/Molecules/BackgroundCard";
import ScrollViewWrapper from "../../components/organisms/ScrollViewWrapper";

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

      <ScrollViewWrapper>
        <BackgroundCard
          background={backgroundImage}
          profile={backgroundImage}
        />

        {pokemon && (
          <PokemonDetailsCard
            abilities={abilities}
            species={species}
            names={names}
            genus={genus}
            baseExperience={pokemon?.base_experience}
            types={types}
            weight={pokemon?.weight}
            stats={stats}
          />
        )}
      </ScrollViewWrapper>
    </AppContainer>
  );
};

export default PokemonDetails;
