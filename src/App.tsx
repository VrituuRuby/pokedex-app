import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardsContainer } from './components/CardsContainer';
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
  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setPokemonList(res.data)
    })
  }, [])

  return (
    <div className='container'>
      <header>
        <h1>Pokedex App - React JS</h1>
      </header>
      <CardsContainer pokemonList={pokemonList?.results}/>
    </div>
  );
}

export default App;
