import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardsContainer } from './components/CardsContainer';
import PokemonModal from './components/PokemonModal';
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
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setPokemonList(res.data)
      setIsLoading(false)
    })
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Pokedex App - React JS</h1>
      </header>
      <CardsContainer pokemonList={pokemonList?.results}/>
      <PokemonModal />
    </div>
  );
}

export default App;
