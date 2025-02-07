// Definir la estructura de los datos de un Pokémon
export interface Pokemon {
  id: number;
  name: string;
  image: string; // URL de la imagen
  types: string[]; // Ejemplo: ['grass', 'poison']
  abilities: string[]; // Ejemplo: ['overgrow', 'chlorophyll']
  height: number; // Altura en decímetros
  weight: number; // Peso en hectogramos
  stats: { name: string; base_stat: number }[]; // Estadísticas base. Ejemplo: [{ name: 'hp', base_stat: 60 }]
  base_experience: number; // Experiencia base del Pokémon
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
