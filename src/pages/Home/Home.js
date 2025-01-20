import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import PokemonList from "../../components/PokemonList/PokemonList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getPokemonList, getPokemonDetails, getPokemonsByType } from "../../services/api";
import "./Home.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemonList();
      setPokemons(data);
      setFilteredPokemons(data);
    };

    fetchPokemons();
  }, []);

  const handleSearch = async (searchTerm, searchType) => {
    if (!searchTerm) {
      setFilteredPokemons(pokemons); // Reseta para a lista completa
      return;
    }

    try {
      if (searchType === "type") {
        // Busca por tipo
        const pokemonsByType = await getPokemonsByType(searchTerm);
        setFilteredPokemons(pokemonsByType);
      } else if (searchType === "nameOrId") {
        // Busca por nome ou ID
        const pokemonData = await getPokemonDetails(searchTerm);
        setFilteredPokemons([pokemonData]);
      }
    } catch (error) {
      console.error("Erro na busca:", error.message);
      setFilteredPokemons([]);
    }
  };

  return (
    <div className="Home">
      <Header />
      <div className="content">
        <SearchBar onSearch={handleSearch} />
        <PokemonList pokemons={filteredPokemons} />
      </div>
    </div>
  );
};

export default Home;
