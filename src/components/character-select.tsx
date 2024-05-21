import React, { useState } from 'react'
import { RickAndMortyAPI } from '../api/RickAndMortyApi.ts'
import { Character } from '../types/Character.ts'
import CharacterItem from '../components/character-item.tsx'
import Tag from './tag.tsx'

const api = new RickAndMortyAPI()

export default function CharacterSelect(){
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState<Character[]>([])
  const [characters, setCharacters] = useState<[]>([])
  const [status, setStatus] = useState<string>('')

  // Handle Input Change
  async function handleInput(e: React.ChangeEvent<HTMLInputElement>){
    setInput(e.target.value)

    // Handle Empty Input
    if (e.target.value === '') {
      setCharacters([])
      return
    }

    // Call API
    const res = await api.searchCharacters(e.target.value)

    // Handle Error
    if (res.error) {
      setStatus(res.error)
      setCharacters([])
      return
    }

    // Handle Success
    setStatus('')
    setCharacters(res.results)
  }

  function handleAdd(e: Character){
    if (selected.find((item: Character) => item.id === e.id)) {
      handleRemove(e.id)
    } else {
      setSelected([...selected, e])
    }
  }

  function handleRemove(id: number){
    setSelected(selected.filter((item: Character) => item.id !== id))
  }

  return (
    <div className="space-y-3">
      <div className={'border border-white/5 bg-neutral-950 rounded-md flex px-2 py-2.5 space-x-1.5'}>
        {selected.length > 0 && selected.map((item, index) => (
          <Tag key={index} id={item.id} label={item.name} remove={handleRemove} />
        ))}
        <input type="text"
               className="px-1 inline-flex text-[15px] bg-transparent w-full placeholder-neutral-500"
               placeholder="Search for a character"
               value={input}
               onChange={handleInput} />
      </div>
      <ul className={`divide-y divide-white/20 rounded-md max-h-[40vh] overflow-auto ${input.length ? 'border border-white/20' : ''}`}>
        {!status ? (characters.map((character: Character, index: number) => (
          <CharacterItem key={index}
                         character={character}
                         query={input}
                         add={handleAdd}
                         active={selected.some((item) => item.id === character.id) ?? false} />
        ))) : (
          <li className="text-red-500 p-3.5 text-center bg-red-950 text-sm font-medium">
            <span>{status}</span>
          </li>
        )}
      </ul>
    </div>
  )
}