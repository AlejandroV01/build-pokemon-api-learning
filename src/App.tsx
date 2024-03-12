import React, { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  interface IPokemonState {
    id: number
    hp: number
    image: string
    backupImage: string
    name: string
    type1: string
    type2: string | null
    atk: number
    def: number
    spe: number
  }
  const [pokemon, setPokemon] = useState<IPokemonState | null>(null)

  const getRandomPokemon = () => {
    let id = Math.ceil(Math.random() * 1025)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.types.length > 1) {
          setPokemon({
            id: data.id,
            hp: data.stats['0'].base_stat,
            image: data.sprites.other.dream_world.front_default,
            backupImage: data.sprites.other.home.front_default,
            name: data.name,
            type1: data.types['0'].type['name'],
            type2: data.types['1'].type['name'],
            atk: data.stats['1'].base_stat,
            def: data.stats['2'].base_stat,
            spe: data.stats['5'].base_stat,
          })
        } else {
          setPokemon({
            id: data.id,
            hp: data.stats['0'].base_stat,
            image: data.sprites.other.dream_world.front_default,
            backupImage: data.sprites.other.home.front_default,
            name: data.name,
            type1: data.types['0'].type['name'],
            type2: null,
            atk: data.stats['1'].base_stat,
            def: data.stats['2'].base_stat,
            spe: data.stats['5'].base_stat,
          })
        }
      })
  }

  return (
    <>
      <h1>App</h1>
      <button className='bg-red-500 p-2' onClick={getRandomPokemon}>
        Generate Random Pokemon
      </button>
      {pokemon && (
        <PokemonCard
          id={pokemon.id}
          attack={pokemon.atk}
          defense={pokemon.def}
          hp={pokemon.hp}
          name={pokemon.name}
          speed={pokemon.spe}
          types={pokemon.type2 ? [pokemon.type1, pokemon.type2] : [pokemon.type1]}
        />
      )}
    </>
  )
}

export default App
