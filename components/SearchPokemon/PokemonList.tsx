'use client';

import { usePokemon } from '@/hooks/use-pokemon';
import { Pokemon } from '@/types/pokemon.type';
import { useState } from 'react';
import { PokemonDetailModal } from '../DetailPokemon/PokemonDetailModal';
import LoadingView from '../Loader/LoadingView';
import { PokemonFilter } from './PokemonFilter';
import { PokemonListDisplay } from './PokemonListDisplay';
import { SearchBar } from './SearchBar';

export const PokemonList = () => {
  const { data: pokemonList, isLoading } = usePokemon();
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [searchType, setSearchType] = useState<'nombre' | 'tipo' | 'habilidad'>(
    'nombre',
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  if (isLoading) return <LoadingView />;

  return (
    <div className="container mx-auto px-8 py-8">
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

      <PokemonListDisplay
        pokemonList={
          filteredPokemon.length > 0 ? filteredPokemon : pokemonList || []
        }
        onPokemonSelect={(pokemon) => setSelectedPokemon(pokemon)} // Handle selection
      />

      {/* Pokémon Detail Modal (Properly Controlled) */}
      {selectedPokemon && (
        <PokemonDetailModal
          pokemon={selectedPokemon}
          open={Boolean(selectedPokemon)}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};
