import React from 'react';
import data from '../data/mocks';
import PokeCard from './pokecard'

const Pokedex = () => {
  return(
    <div>
      {data.map((pokemon) => (
        <div style={{display: 'gird'}}>
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