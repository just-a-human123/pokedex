import React from 'react';

const Pokedex = ({name, id, type, exp}) => {
    const PokeSprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
        <div className={id}>
            <h1>{name}</h1>
            <img src={PokeSprite} alt={name}/>
            <p>{type}</p>
            <p>{exp}</p>
        </div>
    )
}

export default Pokedex;