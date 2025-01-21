import React from 'react';
import "./Header.css";
import PokedexImg from "../../assets/pokedex.svg";

const Header = () => (

  <header className="header">
    <img src={PokedexImg} alt="Logo da Pokedéx"/>
    
  </header>
);

export default Header;
