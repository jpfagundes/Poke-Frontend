import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import PokemonList from "../../components/PokemonList/PokemonList";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonTeam from "../../components/PokemonTeam/PokemonTeam";
import { getPokemonList, getPokemonDetails, getPokemonsByType } from "../../services/api";
import "./Home.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [team, setTeam] = useState(() => {
    const savedTeam = localStorage.getItem("pokemonTeam");
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemonList();
      setPokemons(data);
      setFilteredPokemons(data);
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemonTeam", JSON.stringify(team));
  }, [team]);

  const handleSearch = async (searchTerm, searchType) => {
    if (!searchTerm) {
      setFilteredPokemons(pokemons);
      return;
    }

    try {
      if (searchType === "type") {
        const pokemonsByType = await getPokemonsByType(searchTerm);
        setFilteredPokemons(pokemonsByType);
      } else if (searchType === "nameOrId") {
        const pokemonData = await getPokemonDetails(searchTerm);
        setFilteredPokemons([pokemonData]);
      }
    } catch (error) {
      console.error("Erro na busca:", error.message);
      setFilteredPokemons([]);
    }
  };

  const handleAddToTeam = (pokemon) => {
    if (team.length >= 5) {
      alert("Seu time já tem 5 Pokémons!");
      return;
    }

    if (team.some((member) => member.id === pokemon.id)) {
      alert("Esse Pokémon já está no seu time!");
      return;
    }

    setTeam([...team, pokemon]);
  };

  const handleRemoveFromTeam = (pokemonId) => {
    setTeam(team.filter((member) => member.id !== pokemonId));
  };

  return (
    <div className="Home">
      <Header />
      <div className="content">
        <SearchBar onSearch={handleSearch} />

        <div className="list-team">
          <PokemonList
            pokemons={filteredPokemons}
            onAddToTeam={handleAddToTeam}
          />
          <PokemonTeam team={team} onRemoveFromTeam={handleRemoveFromTeam} />
        </div>

      </div>
    </div>
  );
};

export default Home;