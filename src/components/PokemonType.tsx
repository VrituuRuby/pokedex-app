
interface TypeInterface{
    name: string;
    url: string;
}

export function PokemonType({ PokemonTypes } : { PokemonTypes : Array<TypeInterface>}){
    return(
        <div className='typeContainer'>{
            PokemonTypes.map((t : TypeInterface) => (
                    <span className={t.name} key={t.name}>{t.name}</span>
                ))
            }
        </div>
    )   
}