// Objective: Define the types of the Pokemon API response.
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
