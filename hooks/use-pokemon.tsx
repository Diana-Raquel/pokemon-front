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
        image: details.sprites.front_default, // Imagen
        types: details.types.map((t: any) => t.type.name), // Tipos
        abilities: details.abilities.map((a: any) => a.ability.name), // Habilidades
        height: details.height, // Altura
        weight: details.weight, // Peso
        stats: details.stats.map((s: any) => ({
          name: s.stat.name,
          base_stat: s.base_stat,
        })), // Estadísticas base
        base_experience: details.base_experience, // Experiencia base
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
