import React from 'react'

interface IPokemonCard {
  hp: number
  id: number
  name: string
  types: string[]
  attack: number
  defense: number
  speed: number
}

const PokemonCard = ({ hp, id, name, types, attack, defense, speed }: IPokemonCard) => {
  return (
    <div className='flex flex-col w-[500px] items-center bg-white rounded-lg p-10 gap-10'>
      <div className='flex justify-between w-full'>
        <div className='border border-black rounded-lg p-2'>HP {hp}</div>
        <div className='border border-black rounded-lg p-2'>#{id}</div>
      </div>
      <span className='w-full'>{name}</span>
      <div className='flex gap-2 w-full justify-center'>
        {types.map(type => {
          return (
            <div key={type} className='border border-black rounded-lg p-2'>
              {type}
            </div>
          )
        })}
      </div>
      <div className='flex justify-evenly w-full'>
        <div>
          <p className='font-bold'>{attack}</p>
          <p>Attack</p>
        </div>
        <div>
          <p className='font-bold'>{defense}</p>
          <p>Defense</p>
        </div>
        <div>
          <p className='font-bold'>{speed}</p>
          <p>Speed</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
