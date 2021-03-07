import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import "../styles/pokemonModal.css"

export default function PokemonModal(){
    const [flavorText, setFlavorText] = useState('')
    const {isLoading, setIsLoading, setIsModalOpen, currentPokemon} = useContext(PokemonContext)
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon-species/' + String(currentPokemon?.id))
        .then(res => {
            setFlavorText(res.data.flavor_text_entries[1].flavor_text.replace(/(\r\n|\n|\r|\f)/gm, " "))
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="overlay">
            <div className="modal">
                <button onClick={() => {setIsModalOpen(false)}}>
                    <span>
                        &times;
                    </span>
                </button>
                {isLoading ? <div className="loader" /> : 
                    <>
                        <h1>{currentPokemon?.name}</h1>
                        <div className="grid">
                            <img 
                                src={currentPokemon?.sprites?.other["official-artwork"].front_default} 
                                alt={currentPokemon?.name}
                            />
                            <div>
                                <p className='flavorText'>
                                    {flavorText}
                                </p>
                            </div>
                        </div>

                    </>}
            </div>
        </div>
    );
}