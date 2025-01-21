import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "../../assets/search-icon.svg";

const pokemonTypes = [
  "normal", "fighting", "flying", "poison", "ground", "rock",
  "bug", "ghost", "steel", "fire", "water", "grass", "electric",
  "psychic", "ice", "dragon", "dark", "fairy"
];

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedType(""); // Limpa o tipo selecionado ao digitar no campo
  };

  const handleTypeChange = (event) => {
    const type = event.target.value;
    setSelectedType(type);
    setSearchTerm(""); // Limpa o texto digitado ao selecionar um tipo

    if (type) {
      onSearch(type, "type"); // Aciona a busca automaticamente ao selecionar um tipo
    }
  };

  const handleSearch = () => {
    if (selectedType && !selectedType) {
      onSearch(null, "all"); // Busca todos os Pokémon
    } else if (selectedType) {
      onSearch(selectedType, "type"); // Busca por tipo
    } else {
      onSearch(searchTerm, "nameOrId"); // Busca por nome ou ID
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(); // Executa a busca ao pressionar Enter
    }
  };

  return (
    <div className="search-bar">
      <div className="search-field">
        <input
          type="text"
          placeholder="Pesquise por nome ou ID..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />

        <button onClick={handleSearch}>
          <img src={SearchIcon} alt="Pesquisar" />
        </button>
      </div>

      <div className="dropdown-menu">
        <select value={selectedType} onChange={handleTypeChange}>
          <option value="">Selecionar Tipo</option>
          {pokemonTypes.map((type) => (
            <option value={type} key={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
