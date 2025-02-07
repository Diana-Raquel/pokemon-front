// Definir los tipos de datos que se van a utilizar para los Pokémon
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: Pokemon[];
}

export interface Type {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
  url: string;
}
