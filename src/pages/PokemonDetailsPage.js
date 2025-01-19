import React, { useEffect, useState } from 'react';
import PokedexImg from '../assets/pokedex.svg';
import { getPokemonDetails } from '../services/api';
import '../styles/PokemonDetailsPage.css';
import Bulbasaur from '../assets/bulbasaur.svg';
import ArrowRight from '../assets/arrow-right.svg';



const PokemonDetailsPage = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const data  = await getPokemonDetails(99);
      setDetails(data);
    };

    fetchDetails();
  }, []);


  return (
    <div className='content'>
      <body>
        <header>
          <img src= {PokedexImg}/>
        </header>

        <div className='pokemon-box'>

          <div className='image'>
            <img src={details.image || Bulbasaur}/>
          </div>

          <div className='infos'>
            <p> #{details.id || "001"}</p>
            <h2>{details.name || "Bulbasaur"}</h2>

              <div className='types-details'>
                <p>{details.types || "grass"}</p>
              </div>

              <div className='hw-box'>
                <span>Height</span>
                <p> {details.height} </p>
                <span>Weigth</span>
                <p> {details.weight} </p>
              </div>

            <div className='stats'>
              <h2>Status</h2>

              <div className='stats-box'>
                <div className='hp'> 
                  <span>HP</span>
                  <p>{details.stats[0]}</p>
                </div>
                <div className='atk'> 
                  <span>ATK</span>
                  <p>{details.stats[1]}</p>
                </div>
                <div className='def'> 
                  <span>DEF</span>
                  <p>{details.stats[2]}</p>
                </div>
                <div className='spa'> 
                  <span>SpA</span>
                  <p>{details.stats[3]}</p>
                </div>
                <div className='spd'> 
                  <span>SpD</span>
                  <p>{details.stats[4]}</p>
                </div>
                <div className='speed'> 
                  <span>SPD</span>
                  <p>{details.stats[5]}</p>
                </div>
              </div>
              

            </div>

            <div className='abilities'>
              <h2>Habilidades</h2>
                <div className='attacks'>
                {details.abilities && details.abilities.map((ability, index) => (
                <span key={index}>{ability}</span>
              ))}
                </div>
            </div>

          </div>
        </div>

      <footer>
        <h2>Evoluções</h2>
          <div className='evolution-chain'>
            <img src={details.evolutions.image[0]}/>
            <img src={ArrowRight} className='arrow'/>
            <img src={details.evolutions.image[1]}/>
            <img src={ArrowRight} className='arrow'/>
            <img src={details.evolutions.image[2]}/>
          </div>

      </footer>
      </body>

    </div>
  )

}

export default PokemonDetailsPage;