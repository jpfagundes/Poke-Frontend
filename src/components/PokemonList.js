import React, { useEffect, useState } from 'react';
import { getPokemonList } from '../api';

const PokemonList = ({ onPokemonSelect }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemonList();
      setPokemons(data);
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h2>Lista de Pokémons</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name} onClick={() => onPokemonSelect(pokemon.name)}>
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
