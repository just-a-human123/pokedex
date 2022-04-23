import React from 'react';

const Pokedex = ({name, id, type, exp}) => {
    return (
        <div className={id}>
            <h1>{name}</h1>
            <p>{type}</p>
            <p>{exp}</p>
        </div>
    )
}

export default Pokedex;