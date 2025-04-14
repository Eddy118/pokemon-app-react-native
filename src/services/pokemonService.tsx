import apiClient from "../api/apiClient";
import { PokemonType } from "../shared/types/types";

type getPokemonListingProps = {
  page: number;
  pageSize: number;
};
export const getPokemonListing = async ({
  page,
  pageSize,
}: getPokemonListingProps) => {
  const { data } = await apiClient.get(
    `pokemon?offset=${(page - 1) * pageSize}&limit=${pageSize}`
  );

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
        abilities: data?.abilities?.map(({ ability }) => ability?.name) ?? [],
      };
    })
  );
  return resultsList;
};

export const getPokemonDetails = async (name: string) => {
  const { data } = await apiClient.get(`pokemon/${name}`);
  return data;
};
