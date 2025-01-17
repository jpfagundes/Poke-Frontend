import axios from 'axios';

// Base URL do backend
const API_BASE_URL = 'http://localhost:3333';

export const getPokemonList = async () => {
  const response = await axios.get(`${API_BASE_URL}/pokemons`);
  return response.data;
};

export const getPokemonDetails = async (identifier) => {
  const response = await axios.get(`${API_BASE_URL}/pokemons/${identifier}`);
  return response.data;
};

export const getPokemonsByType = async (type) => {
  const response = await axios.get(`${API_BASE_URL}/pokemons/type/${type}`);
  return response.data;
};
