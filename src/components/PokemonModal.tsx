import "../styles/pokemonModal.css"

export default function PokemonModal(){
    return (
        <div className="overlay">
            <div className="modal">
                <button>
                    <img src="images/iconmonstr-x-mark-1.svg" alt=""/>
                </button>
                <div>
                    <h1>BULBASAUR</h1>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="cu"/>

                </div>
                <div>
                    <h3>Pokemon Data</h3>
                    <p>Height: 589</p>
                </div>
            </div>
        </div>
    );
}