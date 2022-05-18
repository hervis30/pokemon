import React, { useState } from 'react';
import '../App.css';

const Card = ({ name, image, type }) => {


    return (
        <div className="container-card">
            <div className="card">
                <h2>{name}</h2>
                <figure>
                    <img src={image} alt={name} />
                </figure>
                <div className="contenido-card">
                    <h3><small>Type: {type}</small></h3>
                </div>
            </div>
        </div>
    )
}

export default Card