// hooks/usePokemonByType.ts
import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '../types/pokemon.type';

const fetchPokemonByType = async (type: string): Promise<Pokemon[]> => {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  if (!response.ok) {
    throw new Error('Error al cargar Pokémon por tipo');
  }
  const data = await response.json();
  return data.pokemon.map((entry: any) => entry.pokemon);
};

export const usePokemonByType = (type: string) => {
  return useQuery<Pokemon[]>({
    queryKey: ['pokemonByType', type],
    queryFn: () => fetchPokemonByType(type),
  });
};
