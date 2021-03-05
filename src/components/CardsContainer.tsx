import React from "react";
import { PokemonCard } from './PokemonCard'

import '../styles/cards.css'

interface pokemonUrl{
    name: string;
    url: string;
}

export function CardsContainer(
    { pokemonList } : { pokemonList : pokemonUrl[] }
    ){
    return (
        <div className='cardsContainer'>
            {
                pokemonList.map((p: pokemonUrl) =>(
                    <PokemonCard pokemon={p} key={p.name}/>
                ))
            }
        </div>
    )
}