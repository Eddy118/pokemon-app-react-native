import { createSlice } from '@reduxjs/toolkit';
import { PokemonType } from '../shared/types/types';

interface PokemonState {
  pokemoms: PokemonType[];
}

const initialState: PokemonState = {
  pokemoms: [],
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    updatePokemonList: (state, action) => { 
      state.pokemoms = action.payload },
  },
});

export const { updatePokemonList } = pokemonSlice.actions;
export default pokemonSlice.reducer;
