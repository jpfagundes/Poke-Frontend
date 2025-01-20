import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = ({ id, name, image, types, onAddToTeam }) => {
  const navigate = useNavigate();

  return (
    <div className="pokemon">
      <img src={image} alt={name} onClick={() => navigate(`/details/${id}`)} />
      <p className="id">#{id}</p>
      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
      <div className="types">
        {types.map((type, index) => (
          <p className={`type-badge ${type}`} key={index}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
        ))}
      </div>
      <button onClick={() => onAddToTeam({ id, name, image, types })}>
        Adicionar ao Time
      </button>
    </div>
  );
};

export default Pokemon;
