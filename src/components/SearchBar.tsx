import React, { useState } from "react";
import { PokemonDataTwo } from "../types";
import { searchPokemonName } from "../apiServices";
interface basicProp {
  onRecieveData: (data: PokemonDataTwo) => void;
}
const SearchBar: React.FC<basicProp> = ({ onRecieveData }) => {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const response = await searchPokemonName(e.target.value);
    if (response) {
      onRecieveData(response);
    }
  };
  return (
    <>
      <h2 id="searchTitle">Search for any pokemon</h2>
      <input
        type="text"
        name="search"
        id="searchBar"
        defaultValue={""}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
