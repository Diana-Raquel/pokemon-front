import { usePokemon } from '@/hooks/use-pokemon';
import { Pokemon } from '@/types/pokemon.type';
import { useState } from 'react';
import { PokemonFilter } from './PokemonFilter';
import { PokemonListDisplay } from './PokemonListDisplay';
import { SearchBar } from './SearchBar';

export const PokemonList = () => {
  const { data, isLoading, isError } = usePokemon();
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [searchType, setSearchType] = useState<'nombre' | 'tipo' | 'habilidad'>(
    'nombre',
  );
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div>Cargando Pokémon...</div>;
  if (isError) return <div>Error al cargar Pokémon</div>;

  return (
    <div>
      <h1>Lista de Pokémon</h1>
      <SearchBar
        onSearch={(term, type) => {
          setSearchTerm(term);
          setSearchType(type);
        }}
      />
      <PokemonFilter
        searchTerm={searchTerm}
        searchType={searchType}
        allPokemon={data?.results || []}
        onFilter={setFilteredPokemon}
      />
      <PokemonListDisplay
        pokemonList={
          filteredPokemon.length > 0 ? filteredPokemon : data?.results || []
        }
      />
    </div>
  );
};
