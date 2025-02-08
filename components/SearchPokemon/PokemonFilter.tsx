import { Pokemon } from '@/types/pokemon.type';
import { useEffect } from 'react';

interface PokemonFilterProps {
  searchTerm: string;
  searchType: 'nombre' | 'tipo' | 'habilidad';
  allPokemon: Pokemon[];
  onFilter: (filtered: Pokemon[]) => void;
}

export const PokemonFilter = ({
  searchTerm,
  searchType,
  allPokemon,
  onFilter,
}: PokemonFilterProps) => {
  useEffect(() => {
    if (!searchTerm.trim()) {
      onFilter(allPokemon); // Si la búsqueda está vacía, mostrar todos los Pokémon
      return;
    }

    const filtered = allPokemon.filter((pokemon) => {
      if (searchType === 'nombre') {
        return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
      }

      if (searchType === 'tipo' && pokemon.types.length > 0) {
        return pokemon.types.some((type) =>
          type.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }

      if (searchType === 'habilidad' && pokemon.abilities.length > 0) {
        return pokemon.abilities.some((ability) =>
          ability.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      }

      return false;
    });

    onFilter(filtered);
  }, [searchTerm, searchType, allPokemon, onFilter]);

  return null;
};
