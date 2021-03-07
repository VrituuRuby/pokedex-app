import React from 'react';
import { createContext, ReactNode, useState } from 'react';
import { pokemonUrl } from '../components/PokemonCard';
import PokemonModal from '../components/PokemonModal';


interface PokemonDataProviderInterface{
    children: ReactNode;
}

interface PokemonContextData{
    currentPokemon: any;
    setCurrentPokemonData: (pokemonData: any) => void;
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
}

export const PokemonContext = createContext({} as PokemonContextData)

export function PokemonDataProvider({children} : PokemonDataProviderInterface){
    const [currentPokemon, setCurrentPokemon] = useState<pokemonUrl>()
    const [isLoading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    function setCurrentPokemonData(pokemonData: any){
        setCurrentPokemon(pokemonData)
        setIsLoading(false)
        console.log(pokemonData)
        console.log(isModalOpen)
    }

    return (
        <PokemonContext.Provider value={{
            currentPokemon, 
            setCurrentPokemonData,
            isLoading,
            setIsLoading,
            isModalOpen,
            setIsModalOpen
        }}>
            {children}
            {isModalOpen && <PokemonModal/>}
        </PokemonContext.Provider>
    )
}