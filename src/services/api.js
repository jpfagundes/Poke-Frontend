import axios from 'axios';

// Base URL do backend
const API_BASE_URL = 'https://pokeapi-svgz.onrender.com';

export const getPokemonList = async (offset = 0, limit = 20) => {
  const response = await axios.get(`${API_BASE_URL}/pokemons?offset=${offset}&limit=${limit}`);
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