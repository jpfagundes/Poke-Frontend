import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../services/api';
import '../styles/PokemonList.css';

const PokemonList = ({ onPokemonSelect }) => {
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
    <div className= "list">
      {pokemons.map((pokemon) => (
        <div
          className="pokemon"
          key={pokemon.id}
        >

          <img
            src={pokemon.image}
            alt={pokemon.name}
          />
          <p className='id'>#{pokemon.id}</p>
          <h3>{pokemon.name}</h3>
          <p className='types'>{pokemon.type}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
