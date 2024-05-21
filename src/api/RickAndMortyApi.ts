export class RickAndMortyAPI {
  private readonly baseUrl

  constructor(){
    this.baseUrl = 'https://rickandmortyapi.com/api'
  }

  searchCharacters = async(name: string) => {
    const getCharacters = await fetch(`${this.baseUrl}/character/?name=${name}`)
    return await getCharacters.json()
  }
}