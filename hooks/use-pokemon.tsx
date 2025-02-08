// hooks/use-pokemon.ts
import { useQuery } from '@tanstack/react-query';
import { Pokemon } from '../types/pokemon.type';

const fetchPokemon = async (): Promise<Pokemon[]> => {
  // Paso 1: Obtener la lista básica de Pokémon
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  if (!response.ok) {
    throw new Error('Error al cargar Pokémon');
  }

  const data = await response.json();

  // Paso 2: Obtener los detalles de cada Pokémon
  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const res = await fetch(pokemon.url);
      if (!res.ok) {
        throw new Error(`Error al cargar detalles de ${pokemon.name}`);
      }

      const details = await res.json();

      return {
        id: details.id,
        name: details.name,
        url: pokemon.url,
        image: details.sprites.front_default,
        types: details.types.map((t: any) => t.type.name),
        abilities: details.abilities.map((a: any) => a.ability.name),
        height: details.height,
        weight: details.weight,
        stats: details.stats.map((s: any) => ({
          name: s.stat.name,
          base_stat: s.base_stat,
        })),
        base_experience: details.base_experience,
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
