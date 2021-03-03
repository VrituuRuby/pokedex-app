import React from "react";
import { PokemonCard } from './PokemonCard'

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