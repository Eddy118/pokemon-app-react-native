import apiClient from "../api/apiClient";
import { PokemonType } from "../shared/types/types";

export const getPokemonListing = async () => {
  const { data } = await apiClient.get("pokemon");

  const { results } = data as any;

  if (results?.length === 0) return results;

  const resultsList = await Promise.all(
    results.map(async (pokemon: PokemonType) => {
      const pokemonDetails = await apiClient.get(`pokemon/${pokemon.name}`);
      const { data } = pokemonDetails as any;
      return {
        ...pokemon,
        imageUrl: data?.sprites?.other?.["official-artwork"]?.front_default,
        imageUrlSvg: data?.sprites?.other?.dream_world?.front_default,
        abilities:
          data?.abilities?.map(({ability}) => ability?.name) ?? [],
      };
    })
  );
  return resultsList;
};
