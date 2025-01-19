import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetailsPage from './pages/PokemonDetailsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />}/>
        <Route index path="/details" element={<PokemonDetailsPage />}/>
        <Route index path="*" element={<h1>PÁGINA NÃO ENCONTRADA</h1>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);