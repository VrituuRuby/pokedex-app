import axios from "axios";
import { useEffect, useState } from "react";

interface PokemonCardProps{
    pokemon: {
        name: string;
        url: string;
    }
}

export function PokemonCard(props: PokemonCardProps){
    const [pokemonData, setPokemonData] = useState({})
    
    function getPokemonData(url: string){
        axios.get(url).then(res => {
            setPokemonData(res.data)
        })
    }

    useEffect(() => {
        getPokemonData(props.pokemon.url)
    }, [])

    return(
        <div className="card">
            <p>{props.pokemon.name}</p>
            <img src='' alt=""/>
        </div>
    )
}