import React from "react";

const AddButton = ({ pokemon, onAddToTeam }) => {
  return (
    <button onClick={() => onAddToTeam(pokemon)}>Adicionar ao Time</button>
  );
};

export default AddButton;