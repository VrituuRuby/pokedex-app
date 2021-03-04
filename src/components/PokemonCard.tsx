import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonType } from "./PokemonType";

interface PokemonCardProps{
    name: string;
    url: string;
}

interface pokemonUrl{
    name: string;
    sprites: {
        front_default: string;
        other: {
            'official-artwork': {
                front_default: string;
            }
        },
    },
    types: [
        index: {
            slot: number,
            type: { name: string }
        }
    ]
}

export function PokemonCard({ pokemon } : { pokemon : PokemonCardProps }){
    const [pokemonData, setPokemonData] = useState<pokemonUrl>()

    function getPokemonData(url: string){
        axios.get(url).then(res => {
            setPokemonData(res.data)
        })
    }

    useEffect(() => {
        getPokemonData(pokemon.url)
    }, [])

    console.log(pokemonData?.types)

    return(
        <div className="card">
            <strong>{pokemon.name.toUpperCase()}</strong>
            <img 
                src={
                    pokemonData?.sprites?.other["official-artwork"].front_default
                } 
                alt={pokemonData?.name}
            />
            {pokemonData && (<PokemonType PokemonTypes={pokemonData?.types} />)}
            
        </div>
    )
}