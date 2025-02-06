// hooks/usePokemon.ts
import { useQuery } from '@tanstack/react-query';
import { PokemonListResponse } from '../types/pokemon.type';

const fetchPokemon = async (): Promise<PokemonListResponse> => {
  // Fetching data from the API
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000'); // Fetching the list of Pokémon from the API
  if (!response.ok) {
    throw new Error('Error al cargar Pokémon');
  }
  return response.json();
};

// The usePokemon hook is a custom hook that uses the useQuery hook from react-query to fetch the list of Pokémon from the API.
export const usePokemon = () => {
  return useQuery<PokemonListResponse>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon,
  });
};
