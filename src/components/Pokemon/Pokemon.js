import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pokemon.css";

const Pokemon = ({ id, name, image, types }) => {
  const navigate = useNavigate();

  return (
    <div
      className="pokemon"
      onClick={() => navigate(`/details/${id}`)}
    >
      <img src={image} alt={name} />

      <p className="id">#{id}</p>

      <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>

      <div className="types">
        {types.map((type, index) => (
          <p
            className={`type-badge ${type}`}
            key={index}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
