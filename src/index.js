import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "../src/pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route
          path="/details/:pokemonIdentifier"
          element={<PokemonDetails />}
        />
        <Route path="*" element={<h1>PÁGINA NÃO ENCONTRADA</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);