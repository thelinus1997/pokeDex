import React from "react";
import { fetchRandomPokemon } from "../apiServices";
import { PokemonDataTwo } from "../types";

interface basicProp {
  onRecieveData: (data: PokemonDataTwo) => void;
}
const RandomButton: React.FC<basicProp> = ({ onRecieveData }) => {
  const handleClick = async () => {
    const response = await fetchRandomPokemon();
    if (response) {
      onRecieveData(response);
    } else {
      console.error("Error: Received undefined data from fetchRandomPokemon");
    }
  };
  return <button onClick={handleClick}>Get a random pokemon</button>;
};

export default RandomButton;
