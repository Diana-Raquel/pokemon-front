export interface Pokemon {
  weight: number;
  height: number;
  id: number | string | null | undefined;
  image: string;
  types: string[];
  abilities: string[];
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
