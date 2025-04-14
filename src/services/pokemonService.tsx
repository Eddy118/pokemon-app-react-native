import apiClient from "../api/apiClient";

export const getPokemonListing = async () => apiClient.get("pokemon");
