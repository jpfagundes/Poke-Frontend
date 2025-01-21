import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArrowRight from "../../assets/arrow-right.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import PokedexImg from "../../assets/pokedex.svg";
import { getPokemonDetails } from "../../services/api";
import { useNavigate } from "react-router-dom";
import AddButton from "../../components/AddButton/AddButton";
import "./PokemonDetails.css";
import "../../styles/TypeColors.css";
import Loading from "../../components/Loading/Loading";
import PokemonTeam from "../../components/PokemonTeam/PokemonTeam";

const PokemonDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  if (params && !params.pokemonIdentifier) {
    console.log("SEND TO 404");
  }
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState(null);
  const [team, setTeam] = useState(() => {
    const savedTeam = localStorage.getItem("pokemonTeam");
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  const fetchDetails = async (pokemonId) => {
    setIsLoading(true);
    const data = await getPokemonDetails(pokemonId);
    setDetails(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (params && params.pokemonIdentifier) {
      fetchDetails(params.pokemonIdentifier);
    }
  }, [params.pokemonIdentifier]);

  useEffect(() => {
    localStorage.setItem("pokemonTeam", JSON.stringify(team));
  }, [team]);

  const handleAddToTeam = (pokemon) => {
    if (team.length >= 5) {
      alert("Seu time atingiu o número máximo de Pokémons!");
      return;
    }

    if (team.some((member) => member.id === pokemon.id)) {
      alert("Esse Pokémon já está no seu time!");
      return;
    }

    setTeam([...team, pokemon]);
  };

  const handleRemoveFromTeam = (pokemonId) => {
    setTeam(team.filter((member) => member.id !== pokemonId));
  };

  if (isLoading) return <Loading />;

  return (
    <div className="content-details">
      <header>
        <img id="arrow-left" src={ArrowLeft} onClick={() => navigate("/")} alt="Voltar para a página inicial" />
        <img src={PokedexImg} onClick={() => navigate("/")} alt="Logo da Pokédex" />
      </header>

      <div className="pokemon-box">
        <div className="image">
          <img src={details.image} alt={`Imagem de ${details.name}`} />
        </div>

        <div className="infos">
          <p id="id"> #{details.id}</p>
          <h2 id="name">
            {details.name.charAt(0).toUpperCase() + details.name.slice(1)}
          </h2>

          <div className="types-details">
            {details.types.map((type, index) => (
              <p className={`type-badge ${type}`} key={index}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </p>
            ))}
          </div>

          <div className="hw-box">
            <div className="height">
              <span>Altura</span>
              <p> {details.height / 10} m</p>
            </div>

            <div className="weight">
              <span>Peso</span>
              <p> {details.weight / 10} kg</p>
            </div>
          </div>

          <div className="stats">
            <h2>Status</h2>

            <div className="stats-box">
              <div className="hp">
                <span>HP</span>
                <p>{details.stats[0]}</p>
              </div>
              <div className="atk">
                <span>ATK</span>
                <p>{details.stats[1]}</p>
              </div>
              <div className="def">
                <span>DEF</span>
                <p>{details.stats[2]}</p>
              </div>
              <div className="spa">
                <span>SpA</span>
                <p>{details.stats[3]}</p>
              </div>
              <div className="spd">
                <span>SpD</span>
                <p>{details.stats[4]}</p>
              </div>
              <div className="speed">
                <span>SPD</span>
                <p>{details.stats[5]}</p>
              </div>
            </div>
          </div>

          <div className="abilities">
            <h2>Habilidades</h2>
            <div className="attacks">
              {details.abilities &&
                details.abilities.map((ability, index) => (
                  <span key={index}>{ability}</span>
                ))}
            </div>
          </div>
        </div>
      </div>


      <div className="evolutions">
        <h2>Evoluções</h2>
        <div className="evolution-chain">
          {details.evolutions.map((evolution, index) => {
            const showArrow = index < details.evolutions.length - 1;
            return (
              <Fragment key={`${evolution.name}/${evolution.id}`}>
                <div
                  onClick={() => {
                    if (details.id !== evolution.id) {
                      fetchDetails(evolution.id);
                    }
                  }}
                  style={{
                    cursor: `${
                      details.id !== evolution.id ? "pointer" : "unset"
                    }`,
                  }}
                >
                  <img src={evolution.image} alt={evolution.name} />
                </div>
                {showArrow && <img src={ArrowRight} alt="Próxima evolução"className="arrow" />}
              </Fragment>
            );
          })}
        </div>
      </div>
      
      <div id="buttonAdd">
          <AddButton
            pokemon={details}
            onAddToTeam={handleAddToTeam}
          />
      </div>

      <PokemonTeam team={team} onRemoveFromTeam={handleRemoveFromTeam} />


    </div>
  );
};

export default PokemonDetails;
