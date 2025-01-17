import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from '../api';

const PokemonDetails = ({ pokemonName }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    if (pokemonName) {
      const fetchPokemonDetails = async () => {
        const data = await getPokemonDetails(pokemonName);
        setPokemonDetails(data);
      };

      fetchPokemonDetails();
    }
  }, [pokemonName]);

  if (!pokemonDetails) {
    return <p>Selecione um Pokémon para ver os detalhes.</p>;
  }

  return (
    <div>
      <h2>Detalhes do Pokémon</h2>
      <p><strong>Nome:</strong> {pokemonDetails.name}</p>
      <p><strong>Altura:</strong> {pokemonDetails.height}</p>
      <p><strong>Peso:</strong> {pokemonDetails.weight}</p>
      <p><strong>Tipos:</strong> {pokemonDetails.types.join(', ')}</p>
      <h3>Evoluções:</h3>
      <ul>
        {pokemonDetails.evolutions.map((evolution) => (
          <li key={evolution}>{evolution}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetails;
