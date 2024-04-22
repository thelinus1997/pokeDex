import { Reducer, useReducer } from "react";
import * as pokemonType from "./types";

type Action =
  | { type: "SET_POKEMON"; payload: pokemonType.PokemonDataTwo }
  | { type: "SET_ABILITIES"; payload: pokemonType.PokemonAbility[] }
  | { type: "CLEAR_ABILITIES" }
  | { type: "CLEAR_POKEMON" };

export type PokemonState = {
  currentPokemon: pokemonType.PokemonDataTwo | null;
  abilities: pokemonType.PokemonAbility[];
};
const initialState: PokemonState = {
  currentPokemon: null,
  abilities: [],
};

const pokemonReducer: Reducer<PokemonState, Action> = (
  state: PokemonState,
  action: Action
) => {
  switch (action.type) {
    case "SET_POKEMON":
      return {
        ...state,
        currentPokemon: action.payload,
      };
    case "SET_ABILITIES":
      return {
        ...state,
        abilities: action.payload,
      };
    case "CLEAR_POKEMON":
      return {
        ...state,
        currentPokemon: null,
      };
    case "CLEAR_ABILITIES":
      return {
        ...state,
        abilities: [],
      };
    default:
      return state;
  }
};
export { initialState, pokemonReducer };
