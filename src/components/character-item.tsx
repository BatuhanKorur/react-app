import { Character } from '../types/Character.ts'

export default function characterItem({ character, query, add, active }: {
  character: Character,
  query: string,
  add: (e: Character) => void,
  active: boolean
}){

  // Mark Query in Name
  const regex = new RegExp(`(${query.toLowerCase()})`)
  const markedName = character.name.toLowerCase().split(regex)

  // IMG: .../avatar/19.jpeg is an empty state in case no image found
  return (
    <li className={`text-white p-3.5 flex items-center space-x-3 ${active ? 'bg-indigo-500/25' : ''}`}
        onClick={() => add(character)}>
      <div className="size-10">
        <img src={character.image ?? 'https://rickandmortyapi.com/api/character/avatar/19.jpeg'}
             alt={character.name}
             className="object-cover rounded-md"
             loading="lazy"
        />
      </div>
      <div className="grow flex items-center justify-between">
        <div className={'grow pr-3'}>
          <div className="flex items-center justify-between text-sm">
            <p className="font-medium">
              <span>{markedName[0]}</span>
              <span className="text-indigo-300 font-semibold">{markedName[1]}</span>
              <span>{markedName[2]}</span>
            </p>
            <p className="space-x-1 text-xs">
              <span>{character.gender}</span>
              <span className="font-semibold opacity-25">/</span>
              {character.status === 'Alive' && <span className="text-green-500/50">{character.status}</span>}
              {character.status === 'Dead' && <span className="text-red-500/60">{character.status}</span>}
              {character.status === 'unknown' && <span className="text-gray-500/75">{character.status}</span>}
            </p>
          </div>
          <div>
            <p className="text-sm space-x-0.5 opacity-80">
              <span className={'font-medium'}>{character.episode.length}</span>
              <span>episode{character.episode.length === 1 ? '' : 's'}</span>
            </p>
          </div>
        </div>
        <div className={active ? 'size-5 text-indigo-500' : 'size-5 opacity-0'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
            <path fill="currentColor"
                  fillRule="evenodd"
                  d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                  clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </li>
  )
}