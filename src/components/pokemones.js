import { useEffect, useState } from 'react';


function Pokemon({ id, nombre, imagen, tipo }) {
    const style = tipo;
    return (
        <div className={style} id="pokemon-card" >

            <div className='pokemon-info'>
                <span className='pokemon-id'>#{id}</span>
                <span className='pokemon-nombre'>{nombre}</span>
                <div className='pokemon-tipos' > {tipo}</div>
            </div>
            <img src={imagen} alt={nombre} className='pokemon-imagen' />



        </div>
    )
}

function Pokemones() {

    const [pokemones, setPokemones] = useState([])
    


    useEffect(() => {
        const getPokemones = async () => {
            //list pokemons
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
            const listaPokemones = await response.json()
            const { results } = listaPokemones

            const newPokemones = results.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json()
                return {
                    id: poke.id,
                    nombre: poke.name,
                    imagen: poke.sprites.other.dream_world.front_default,
                    tipo: poke.types[0].type.name
                    //tipo: poke.types.map((type) => <p class={type.type.name} tipo>{type.type.name}</p>)
 
                }

            })
            setPokemones(await Promise.all(newPokemones));


        }
        getPokemones()
    }, [])


    return (
        <section className='pokemon-container'>
            {pokemones.map(pokemon => <Pokemon{...pokemon} />)}

        </section>
    )

}
export default Pokemones;