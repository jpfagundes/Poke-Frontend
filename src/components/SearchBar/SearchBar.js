import React, { useState } from 'react';
import "./SearchBar.css";
import SearchIcon from "../../assets/search-icon.svg";


const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm); // Notifica o componente pai
  };

  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder="Pesquise por nome ou ID..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
      >

    <img src={SearchIcon}/>

      </button>
    </div>
  );
};

export default SearchBar;
