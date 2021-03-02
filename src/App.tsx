import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardsContainer } from './components/CardsContainer';
import './styles/global.css';

export function App() {
  const [pokemonList, setPokemonList] = useState([{name: 'Loading...'}])

  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res => {
      setPokemonList(res.data.results)
    })
  }, [])

  console.log(pokemonList)

  return (
    <div className='container'>
      <header>
        <h1>Pokedex App - React JS</h1>
      </header>
      <CardsContainer pokemonList={pokemonList}/>
    </div>
  );
}

export default App;
