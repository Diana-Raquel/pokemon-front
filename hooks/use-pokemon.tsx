// hooks/usePokemon.ts
import { useQuery } from '@tanstack/react-query';
import { PokemonListResponse } from '../types/pokemon.type';

const fetchPokemon = async (): Promise<PokemonListResponse> => {
  // Fetching data from the API
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
  if (!response.ok) {
    throw new Error('Error al cargar Pokémon');
  }
  return response.json();
};

// el usepokemon es un hook que se encarga de hacer la consulta a la api de pokemon
export const usePokemon = () => {
  return useQuery<PokemonListResponse>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon,
  });
};
