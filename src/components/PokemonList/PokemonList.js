import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import "./PokemonList.css";

const PokemonList = ({ pokemons, onAddToTeam }) => {

  return (
    <div className="list">
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
          onAddToTeam={onAddToTeam}
        />
      ))}
    </div>
  );
};

export default PokemonList;
