import React, { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetails, getPokemonsByType } from "../../services/api";
import { queryParamsToJson } from "../../utils/QueryParamsToJson";
import Header from "../../components/Header/Header";
import PokemonList from "../../components/PokemonList/PokemonList";
import SearchBar from "../../components/SearchBar/SearchBar";
import PokemonTeam from "../../components/PokemonTeam/PokemonTeam";
import Loading from "../../components/Loading/Loading";
import "./Home.css";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPagination, setPagination] = useState(true);
  const [nextPagination, setNextPagination] = useState();
  const [previousPagination, setPreviousPagination] = useState();
  const [team, setTeam] = useState(() => {
    const savedTeam = localStorage.getItem("pokemonTeam");
    return savedTeam ? JSON.parse(savedTeam) : [];
  });
  const [errorMessage, setErrorMessage] = useState("");

  const fetchPokemons = async (offset = 0, limit = 10) => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const { pokemons, next, previous } = await getPokemonList(offset, limit);

      setNextPagination(next ? queryParamsToJson(next) : null);
      setPreviousPagination(previous ? queryParamsToJson(previous) : null);

      setPokemons(pokemons);
      setPagination(true); // Exibe paginação para lista padrão
    } catch (error) {
      setErrorMessage("Erro ao carregar a lista de Pokémon.");
      setPagination(false); // Oculta paginação em caso de erro
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    localStorage.setItem("pokemonTeam", JSON.stringify(team));
  }, [team]);

  const handleSearch = async (searchTerm, searchType) => {
    setIsLoading(true);
    setPagination(true);
    setErrorMessage("");

    if (!searchTerm) {
      await fetchPokemons();
      return;
    }

    try {
      if (searchType === "all") {
        await fetchPokemons(); // Retorna todos os Pokémon
      } else if (searchType === "type") {
        setPagination(false); // Oculta paginação ao buscar por tipo
        const pokemonsByType = await getPokemonsByType(searchTerm);
        setPokemons(pokemonsByType);
      } else if (searchType === "nameOrId") {
        const pokemonData = await getPokemonDetails(searchTerm);
        if (pokemonData) {
          setPokemons([pokemonData]);
          setPagination(false); // Oculta paginação para resultados individuais
        } else {
          setErrorMessage("Pokémon não encontrado. Verifique o nome ou ID.");
          setPokemons([]);
          setPagination(false); // Oculta paginação em caso de erro 404
        }
      }
    } catch (error) {
      console.error("Erro na busca:", error.message);
      setErrorMessage("Ocorreu um erro ao buscar Pokémon.");
      setPokemons([]);
      setPagination(false); // Oculta paginação em caso de erro
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToTeam = (pokemon) => {
    if (team.length >= 5) {
      alert("Seu time atingiu o número máximo de Pokémons!");
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

  if (isLoading) return <Loading />;

  return (
    <div className="Home">
      <Header />
      <div className="content">
        <SearchBar onSearch={handleSearch} />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="next-prev">
          {showPagination && (
            <>
              <button
                onClick={async () => {
                  if (!previousPagination) return;
                  await fetchPokemons(
                    previousPagination.offset,
                    previousPagination.limit
                  );
                }}
              >
                Anterior
              </button>
              <button
                onClick={async () => {
                  if (!nextPagination) return;
                  await fetchPokemons(
                    nextPagination.offset,
                    nextPagination.limit
                  );
                }}
              >
                Próximo
              </button>
            </>
          )}
        </div>

        <div className="list-team">
          <PokemonList pokemons={pokemons} onAddToTeam={handleAddToTeam} />
          <PokemonTeam team={team} onRemoveFromTeam={handleRemoveFromTeam} />
        </div>
      </div>
    </div>
  );
};

export default Home;
