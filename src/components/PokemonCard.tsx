import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonType } from "./PokemonType";

interface PokemonCardProps{
    pokemon: {
        name: string;
        url: string;
    }
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
        {
            name: string;
            url: string;
        }
    ]
}

export function PokemonCard(props: PokemonCardProps){
    const [pokemonData, setPokemonData] = useState<pokemonUrl>(
        {
            name: '',
            sprites: {
                front_default: '',
                other: {
                    'official-artwork': {
                        front_default: '',
                    }
                },
            },
            types: [
                {
                    name: '',
                    url: '',
                }
            ]
        }
    )


    function getPokemonData(url: string){
        axios.get(url).then(res => {
            setPokemonData(res.data)
        })
    }

    useEffect(() => {
        getPokemonData(props.pokemon.url)
    }, [])

    console.log(pokemonData)

    return(
        <div className="card">
            <strong>{props.pokemon.name.toUpperCase()}</strong>
            <img 
                src={
                    pokemonData?.sprites?.other["official-artwork"].front_default
                } 
                alt={pokemonData?.name}
            />
            <PokemonType PokemonTypes={pokemonData?.types}/>
        </div>
    )
}