import React, { useState } from 'react';
import '../styles/SearchBar.css';


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
        placeholder="Pesquise um Pokémon por nome ou ID..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
      >

    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.0333 30L17.0583 19.5C16.2667 20.1667 15.3563 20.6944 14.3271 21.0833C13.2979 21.4722 12.2028 21.6667 11.0417 21.6667C8.16528 21.6667 5.7309 20.6181 3.73854 18.5208C1.74618 16.4236 0.75 13.8611 0.75 10.8333C0.75 7.80556 1.74618 5.24306 3.73854 3.14583C5.7309 1.04861 8.16528 0 11.0417 0C13.9181 0 16.3524 1.04861 18.3448 3.14583C20.3372 5.24306 21.3333 7.80556 21.3333 10.8333C21.3333 12.0556 21.1486 13.2083 20.7792 14.2917C20.4097 15.375 19.9083 16.3333 19.275 17.1667L29.25 27.6667L27.0333 30ZM11.0417 18.3333C13.0208 18.3333 14.7031 17.6042 16.0885 16.1458C17.474 14.6875 18.1667 12.9167 18.1667 10.8333C18.1667 8.75 17.474 6.97917 16.0885 5.52083C14.7031 4.0625 13.0208 3.33333 11.0417 3.33333C9.0625 3.33333 7.38021 4.0625 5.99479 5.52083C4.60938 6.97917 3.91667 8.75 3.91667 10.8333C3.91667 12.9167 4.60938 14.6875 5.99479 16.1458C7.38021 17.6042 9.0625 18.3333 11.0417 18.3333Z" fill="#FEF7FF"/>
    </svg>

      </button>
    </div>
  );
};

export default SearchBar;
