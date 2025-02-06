// hooks/usePokemonByAbility.ts
import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '../types/pokemon.type';

const fetchPokemonByAbility = async (ability: string): Promise<Pokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/ability/${ability}`);
  if (!response.ok) {
    throw new Error('Error al cargar Pokémon por habilidad');
  }
  const data = await response.json();
  return data.pokemon.map((entry: any) => entry.pokemon); // Mapeando los Pokémon que tienen la habilidad
};

// Hook para obtener los Pokémon por habilidad
export const usePokemonByAbility = (ability: string) => {
  return useQuery<Pokemon[]>({
    queryKey: ['pokemonByAbility', ability],
    queryFn: () => fetchPokemonByAbility(ability), // Función que realiza la consulta
  });
};
