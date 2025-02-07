import { usePokemonByAbility } from '@/hooks/use-PokemonAbility';
import { usePokemonByType } from '@/hooks/use-PokemonType';
import { Pokemon } from '@/types/pokemon.type';
import { useEffect } from 'react';

interface PokemonFilterProps {
  searchTerm: string;
  searchType: 'nombre' | 'tipo' | 'habilidad';
  allPokemon: Pokemon[];
  onFilter: (filteredPokemon: Pokemon[]) => void;
}

export const PokemonFilter = ({
  searchTerm,
  searchType,
  allPokemon,
  onFilter,
}: PokemonFilterProps) => {
  const { data: typeData } = usePokemonByType(
    searchType === 'tipo' ? searchTerm : '',
  );
  const { data: abilityData } = usePokemonByAbility(
    searchType === 'habilidad' ? searchTerm : '',
  );

  useEffect(() => {
    let filtered: Pokemon[] = [];

    switch (searchType) {
      case 'nombre':
        filtered = allPokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        break;
      case 'tipo':
        if (typeData) filtered = typeData;
        break;
      case 'habilidad':
        if (abilityData) filtered = abilityData;
        break;
      default:
        filtered = allPokemon;
    }

    onFilter(filtered);
  }, [searchTerm, searchType, allPokemon, typeData, abilityData, onFilter]);

  return null; // No renderiza nada, solo maneja la lógica de filtrado
};
