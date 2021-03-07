import React, { useContext } from "react";
import { PokemonCard } from './PokemonCard'

import '../styles/cards.css'
import { PokemonContext } from "../contexts/PokemonContext";

interface pokemonUrl{
    name: string;
    url: string;
}

export function CardsContainer(
    { pokemonList } : { pokemonList : pokemonUrl[] }
    ){

    const {isModalOpen} = useContext(PokemonContext)
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