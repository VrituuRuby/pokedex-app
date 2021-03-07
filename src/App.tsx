import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { CardsContainer } from './components/CardsContainer';
import PokemonModal from './components/PokemonModal';
import { PokemonContext, PokemonDataProvider } from './contexts/PokemonContext';
import './styles/global.css';

interface pokemonListInterface{
  results: [
    {
      name: string;
      url: string;
    }
  ]
}


export function App() {
  const [pokemonList, setPokemonList] = useState<pokemonListInterface>(
    {results: [{name: '', url: ''}]})
  
  const { isModalOpen } = useContext(PokemonContext)

  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setPokemonList(res.data)
    })
  }, [])

  return (
    <PokemonDataProvider>
        <div className='container'>
          <CardsContainer pokemonList={pokemonList?.results}/>
        </div>
    </PokemonDataProvider>

  );
}

export default App;
