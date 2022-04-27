import React from 'react';
import data from '../data/mocks';
import PokeCard from './pokecard'
import { PokeDexStyle } from './pokestyle';

const Pokedex = () => {
  return(
    <div className={PokeDexStyle}>
      {data.map((pokemon) => (
        <div>
          <PokeCard
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
          />
        </div>
      ))}
    </div>
  )
}

export default Pokedex