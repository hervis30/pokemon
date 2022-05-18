import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import '../App.css';

const Pokemon = ({ pikachu, setPikachu }) => {

    const getPokemon = async () => {
        const data = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20")
        const pokemons = await data.json();


        function createPokemonObject(result) {
            result.forEach(async (pokemon) => {
                const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const pokemons = await data.json();

                setPikachu(list => [...list, pokemons])
            })
        }
        createPokemonObject(pokemons.results);

    }
    useEffect(() => {
        getPokemon();
    }, [])

    return (
        <div className="pokemon">
            {pikachu.map((item, index) =>
                <Card
                    name={item.name}
                    image={item.sprites.other.dream_world.front_default}
                    type={item.types[0].type.name}
                    key={index}
                />
            )}
        </div>
    )
}

export default Pokemon