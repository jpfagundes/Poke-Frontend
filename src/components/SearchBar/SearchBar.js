import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/search-icon.svg";

const pokemonTypes = [
  "normal", "fighting", "flying", "poison", "ground", "rock", 
  "bug", "ghost", "steel", "fire", "water", "grass", "electric", 
  "psychic", "ice", "dragon", "dark", "fairy", "unknown"
];

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedType(""); // Limpa o tipo selecionado ao digitar no campo
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSearchTerm(""); // Limpa o texto digitado ao selecionar um tipo
  };

  const handleSearch = () => {
    if (selectedType) {
      onSearch(selectedType, "type"); // Busca por tipo
    } else {
      onSearch(searchTerm, "nameOrId"); // Busca por nome ou ID
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquise por nome ou ID..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">Selecionar Tipo</option>
        {pokemonTypes.map((type) => (
          <option value={type} key={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>
        <img src={SearchIcon} alt="Pesquisar" />
      </button>
    </div>
  );
};

export default SearchBar;
