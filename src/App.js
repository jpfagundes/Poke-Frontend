import React, { useState } from 'react';
import Header from './components/Header';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import './App.css';

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="App">
      <Header />
      
      <div className="content">
        <PokemonList onPokemonSelect={setSelectedPokemon} />
        <PokemonDetails pokemonName={selectedPokemon} />
      </div>
    </div>
  );
};

export default App;
