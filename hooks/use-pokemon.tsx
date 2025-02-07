import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '../types/pokemon.type';

const fetchPokemon = async (): Promise<Pokemon[]> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  if (!response.ok) {
    throw new Error('Error al cargar Pokémon');
  }

  const data = await response.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const res = await fetch(pokemon.url);
      const details = await res.json();

      return {
        id: details.id,
        name: details.name,
        image: details.sprites.front_default, // Imagen del Pokémon
        types: details.types.map((t: any) => t.type.name), // Extraer tipos
        abilities: details.abilities.map((a: any) => a.ability.name), // Extraer habilidades
        url: pokemon.url,
      };
    }),
  );

  return pokemonDetails;
};

// Hook para obtener la lista de Pokémon con todos los datos
export const usePokemon = () => {
  return useQuery<Pokemon[]>({
    queryKey: ['pokemon'],
    queryFn: fetchPokemon,
  });
};
