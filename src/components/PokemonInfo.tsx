import React, { useEffect, useState } from "react";
import * as pokeTypes from "../types";
import * as API from "../apiServices";
const PokemonInfo: React.FC<pokeTypes.PokemonInfoProps> = ({
  name,
  spriteSource,
  stats,
  abilities,
  types,
}) => {
  const [abilityDesc, setAbilityDesc] = useState([""]);
  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await API.pokemonAbilityDescription(abilities);
        console.log(response[0]);
        setAbilityDesc(response);
      } catch (e) {
        console.error(e + "ID incorrect?");
      }
    };
    fetchAbilities();
    console.log(abilityDesc);
  }, [abilities]);
  return (
    <>
      <h2 id="nameSpriteCont">
        {name}
        <img src={spriteSource} alt="Pikasprite" />
      </h2>
      <p>Pokedex </p>

      <div id="typeContainer">
        Types:
        {types.map((type, index) => (
          <p key={index} id={type.type.name}>
            <span>{type.type.name}</span>
          </p>
        ))}
      </div>

      <div id="statContainer">
        stats:
        {stats.map((stat, index) => (
          <p key={index}>
            <br />
            <span>{stat.stat.name}: </span>
            <span>{stat.base_stat}</span>
          </p>
        ))}
      </div>
      <div id="abilityContainer">
        Abilities:
        {abilities.map((ability, index) => (
          <p key={index}>
            <br />
            <span>
              {ability.ability.name}: {abilityDesc[index]}{" "}
            </span>
          </p>
        ))}
      </div>
    </>
  );
};

export default PokemonInfo;
