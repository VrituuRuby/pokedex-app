
interface TypeInterface{
    slot: number,
    type: { name: string }
    
}

export function PokemonType({ PokemonTypes } : { PokemonTypes : TypeInterface[]}){
    return(
        <div className='typeContainer'>{
            PokemonTypes?.map((t : TypeInterface) => (
                    <span 
                        className={t.type.name} 
                        key={t.slot}
                    >
                        {t.type.name}
                    </span>
                ))
            }
        </div>
    )   
}