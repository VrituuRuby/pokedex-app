import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonContext, PokemonDataProvider } from "../contexts/PokemonContext";
import { PokemonType } from "./PokemonType";

interface PokemonCardProps{
    name: string;
    url: string;
}

export interface pokemonUrl{
    id: number;
    name: string;
    sprites: {
        front_default: string;
        other: {
            'official-artwork': {
                front_default: string;
            }
        },
        versions: {
            'generation-v': {
                'black-white': {
                    animated: {
                        'front_default': string;
                    }
                }
            }
        }
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

    const { setCurrentPokemonData, setIsModalOpen, setIsLoading } = useContext(PokemonContext)

    function getPokemonData(url: string){
        axios.get(url).then(res => {
            setPokemonData(res.data)
        })
    }

    useEffect(() => {
        getPokemonData(pokemon.url)
    }, [])


    return(
        <button className="card" onClick={() => {
                setCurrentPokemonData(pokemonData)
                setIsLoading(true)
                setIsModalOpen(true)
            }
        }>
            <strong>{pokemon.name}</strong>
            <img 
                src={
                    pokemonData?.sprites?.other["official-artwork"].front_default
                } 
                alt={pokemonData?.name}
            />
            {pokemonData && (<PokemonType PokemonTypes={pokemonData?.types} />)}
            
        </button>
    )
}