import React from "react";
import "./PokemonTeam.css";

const PokemonTeam = ({ team, onRemoveFromTeam }) => {
  return (
    <div className="pokemon-team">
      <h2>Seu Time de Pokémons</h2>
      {team.length === 0 ? (
        <p>Você ainda não adicionou Pokémons ao seu time.</p>
      ) : (
        <div className="team-list">
          {team.map((pokemon) => (
            <div key={pokemon.id} className="team-member">
              <img src={pokemon.image} alt={pokemon.name} />
              <div className="team-info">
                <p>{pokemon.name.charAt(0).toUpperCase()
                 + pokemon.name.slice(1)}</p>

                <button
                  onClick={() => onRemoveFromTeam(pokemon.id)}
                  className="remove-button"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PokemonTeam;
