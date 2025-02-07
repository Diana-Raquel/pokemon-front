import { usePokemon } from '@/hooks/use-pokemon';
import { Pokemon } from '@/types/pokemon.type';
import { useState } from 'react';
import { PokemonFilter } from './PokemonFilter';
import { PokemonListDisplay } from './PokemonListDisplay';
import { SearchBar } from './SearchBar';

export const PokemonList = () => {
  const { data: pokemonList, isLoading, isError } = usePokemon();
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [searchType, setSearchType] = useState<'nombre' | 'tipo' | 'habilidad'>(
    'nombre',
  );
  const [searchTerm, setSearchTerm] = useState('');

  if (isLoading) return <div>Cargando Pokémon...</div>;
  if (isError) return <div>Error al cargar Pokémon</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold ml-4">Pokédex</h1>
        </div>
      </header>

      <SearchBar
        onSearch={(term, type) => {
          setSearchTerm(term);
          setSearchType(type);
        }}
      />

      <PokemonFilter
        searchTerm={searchTerm}
        searchType={searchType}
        allPokemon={pokemonList || []}
        onFilter={setFilteredPokemon}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <PokemonListDisplay
          pokemonList={
            filteredPokemon.length > 0 ? filteredPokemon : pokemonList || []
          }
        />
      </div>
    </div>
  );
};
