import React, { useEffect, useState } from "react";
import { getPokemonList } from "../../services/api";
import "./PokemonList.css";
import { useNavigate } from "react-router-dom";

const PokemonList = ({ onPokemonSelect }) => {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemonList();
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  if (!pokemons.length) {
    return <div>Carregando Pokémons...</div>; // Exibe enquanto carrega
  }

  // Renderiza a lista de Pokémon
  return (
    <div className="list">
      {pokemons.map((pokemon) => (
        <div
          className="pokemon"
          key={pokemon.id}
          onClick={() => navigate(`/details/${pokemon.id}`)}
        >
          <img src={pokemon.image} alt={pokemon.name} />

          <p className="id">#{pokemon.id}</p>

          <h3>{pokemon.name.charAt(0).toUpperCase()
           + pokemon.name.slice(1)}</h3>

          {pokemon.types.map((type, index) => (
            <p className={`type-badge ${type}`}
            key={index}>{type.charAt(0).toUpperCase()
              +type.slice(1)}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PokemonList;