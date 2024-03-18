import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import RandomButton from "./components/RandomButton";
import PokemonInfo from "./components/PokemonInfo";
import { PokemonDataTwo } from "./types";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<PokemonDataTwo | null>(
    null
  );
  const handleReceiveData = (data: PokemonDataTwo) => {
    const {
      abilities,
      base_experience,
      cries,
      forms,
      game_indices,
      height,
      held_items,
      id,
      is_default,
      location_area_encounters,
      moves,
      name,
      order,
      past_abilities,
      past_types,
      species,
      sprites,
      stats,
      types,
      weight,
    } = data;

    setCurrentPokemon({
      abilities,
      base_experience,
      cries,
      forms,
      game_indices,
      height,
      held_items,
      id,
      is_default,
      location_area_encounters,
      moves,
      name,
      order,
      past_abilities,
      past_types,
      species,
      sprites,
      stats,
      types,
      weight,
    });
  };
  return (
    <>
      <SearchBar onRecieveData={handleReceiveData} />
      <RandomButton onRecieveData={handleReceiveData} />

      {currentPokemon?.name && (
        <PokemonInfo
          name={currentPokemon.name}
          spriteSource={currentPokemon.sprites.front_default}
          stats={currentPokemon.stats}
          abilities={currentPokemon.abilities}
          types={currentPokemon.types}
        />
      )}
    </>
  );
}

export default App;
