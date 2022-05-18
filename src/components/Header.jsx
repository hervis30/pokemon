import React from 'react';
import pokemon from './img/pokemon.png';

import '../App.css';

const Header = () => {
    return (
        <div className="header">
            <img src={pokemon} alt="img-header" />
            <h1>Pikachu Market-Place</h1>
        </div>
    )
}

export default Header