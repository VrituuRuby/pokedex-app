import { useContext, useState } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import "../styles/pokemonModal.css"

export default function PokemonModal(){
    const {isLoading, setIsLoading, setIsModalOpen, currentPokemon} = useContext(PokemonContext)

    return (
        <div className="overlay">
            <div className="modal">
                <button onClick={() => {setIsModalOpen(false)}}>
                    <img src="images/iconmonstr-x-mark-1.svg" alt=""/>
                </button>
                {isLoading ? <div className="loader" /> : 
                    <>
                        <div>
                            <h1>{currentPokemon?.name.toUpperCase()}</h1>
                            <img src={currentPokemon?.sprites?.other["official-artwork"].front_default} alt="cu"/>

                        </div>
                        <div>
                            <h3>Pokemon Data</h3>
                            <p>Height: 589</p>
                        </div>

                    </>}
            </div>
        </div>
    );
}