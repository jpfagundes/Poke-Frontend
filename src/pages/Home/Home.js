import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import PokemonList from "../../components/PokemonList/PokemonList";
import SearchBar from '../../components/SearchBar/SearchBar';
import "./Home.css";

const Home = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <div className="Home">
      <Header />
      
      <div className="content">
        <SearchBar />
        <PokemonList onPokemonSelect={setSelectedPokemon} />
      </div>
    </div>
  );
};

export default Home;
