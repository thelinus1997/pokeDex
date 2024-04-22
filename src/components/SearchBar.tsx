import React, { useEffect, useState } from "react";
import { PokemonDataTwo, PokemonAbility } from "../types";
import { searchPokemonName } from "../apiServices";
import useDebounce from "../hooks/useDebounce";
interface basicProp {
  onRecieveData: (data: PokemonDataTwo) => void;
}
const SearchBar: React.FC<basicProp> = ({ onRecieveData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm: string = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      console.log("search term found");
      try {
        const fetchData = async () => {
          const response = await searchPokemonName(debouncedSearchTerm);
          if (response) {
            onRecieveData(response);
          }
        };
        fetchData();
      } catch (error) {
        console.error(error);
      }
    }
  }, [debouncedSearchTerm]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change");
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <h2 id="searchTitle">Search for any pokemon</h2>
      <input
        type="text"
        name="search"
        id="searchBar"
        value={searchTerm}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
