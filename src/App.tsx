import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import RandomButton from "./components/RandomButton";
import PokemonInfo from "./components/PokemonInfo";
import { PokemonAbility, PokemonDataTwo } from "./types";
import { initialState, pokemonReducer } from "./pokemonReducer";

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const handleReceiveData = (data: PokemonDataTwo) => {
    dispatch({ type: "SET_POKEMON", payload: data });
  };
  return (
    <>
      <SearchBar onRecieveData={handleReceiveData} />
      <RandomButton onRecieveData={handleReceiveData} />

      {state.currentPokemon?.name && (
        <PokemonInfo
          name={state.currentPokemon.name}
          spriteSource={state.currentPokemon.sprites.front_default}
          stats={state.currentPokemon.stats}
          abilities={state.currentPokemon.abilities}
          types={state.currentPokemon.types}
        />
      )}
    </>
  );
}

export default App;
