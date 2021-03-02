import axios from "axios"
import { ReactNode } from "react"
import { PokemonCard } from "./PokemonCard"

interface CardsContainerProps{
    pokemonList: ReactNode[]
}

export function CardsContainer(props:CardsContainerProps){
    return (
        <div className='cardsContainer'>
            {
                props.pokemonList.map((p: any) =>(
                    <PokemonCard pokemon={p} key={p.name}/>
                ))
            }
        </div>
    )
}