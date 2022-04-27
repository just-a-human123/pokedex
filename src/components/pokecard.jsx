import React from 'react';
import { changeId } from '../utils/changeId';
import { PokeCardStyle } from './pokestyle';

const PokeCard = ({name, id, type, exp}) => {
    return (
        <div className={PokeCardStyle}>
            <h1>{name}</h1>
            <img src={changeId(id)} alt={name}/>
            <p>Type: {type}</p>
            <p>Exp: {exp}</p>
        </div>
    )
}

export default PokeCard;