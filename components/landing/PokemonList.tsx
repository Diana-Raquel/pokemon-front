// components/PokemonList.tsx
import { usePokemonByAbility } from '@/hooks/use-PokemonAbility';
import { usePokemonByType } from '@/hooks/use-PokemonType';
import { useState } from 'react';
import { usePokemon } from '../../hooks/use-pokemon';
import { Pokemon } from '../../types/pokemon.type';
import { SearchBar } from './SearchBar';

export const PokemonList = () => {
  const { data, isLoading, isError } = usePokemon();
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [searchType, setSearchType] = useState<'nombre' | 'tipo' | 'Habilidad'>(
    'nombre',
  );
  const [searchTerm, setSearchTerm] = useState('');

  // Usar los hooks en el nivel superior
  const { data: typeData } = usePokemonByType(
    searchType === 'tipo' ? searchTerm : '',
  );
  const { data: abilityData } = usePokemonByAbility(
    searchType === 'Habilidad' ? searchTerm : '',
  );

  const handleSearch = (
    searchTerm: string,
    searchType: 'nombre' | 'tipo' | 'Habilidad',
  ) => {
    setSearchTerm(searchTerm);
    setSearchType(searchType);

    if (!data) return;

    let filtered: Pokemon[] = [];

    switch (searchType) {
      case 'nombre':
        filtered = data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        break;
      case 'tipo':
        if (typeData) {
          filtered = typeData;
        }
        break;
      case 'Habilidad':
        if (abilityData) {
          filtered = abilityData;
        }
        break;
      default:
        filtered = data.results;
    }

    setFilteredPokemon(filtered);
  };

  if (isLoading) return <div>Cargando Pokémon...</div>;
  if (isError) return <div>Error al cargar Pokémon</div>;

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {(filteredPokemon.length > 0
          ? filteredPokemon
          : (data?.results ?? [])
        ).map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
