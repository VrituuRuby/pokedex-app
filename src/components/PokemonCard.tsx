import axios from "axios";
import { useEffect, useState } from "react";

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
        versions: {
            'generation-v':{
                'black-white': {
                    animated: {
                        front_default: string;
                    }
                }
            }
        }
    },
    types: [
        {
            name: string;
        }
    ]
}

export function PokemonCard(props: PokemonCardProps){
    const [pokemonData, setPokemonData] = useState<pokemonUrl>()

    function getPokemonData(url: string){
        axios.get(url).then(res => {
            setPokemonData(res.data)
        })
    }


    useEffect(() => {
        getPokemonData(props.pokemon.url)
    }, [props.pokemon.url])

    return(
        <div className="card">
            <strong>{props.pokemon.name.toUpperCase()}</strong>
            <img 
                src={
                    pokemonData?.sprites?.other["official-artwork"].front_default
                } 
                alt={pokemonData?.name}
            />
        </div>
    )
}