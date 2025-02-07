import { usePokemon } from '@/hooks/use-pokemon';
import { Pokemon } from '@/types/pokemon.type';
import { useState } from 'react';
import { PokemonDetailModal } from '../detailPokemon/PokemonDetailModal';
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
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null); // Estado para el Pokémon seleccionado

  if (isLoading) return <div>Cargando Pokémon...</div>;
  if (isError) return <div>Error al cargar Pokémon</div>;

  return (
    <div className="container mx-auto px-8 py-8">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Pokédex</h1>
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

      <PokemonListDisplay
        pokemonList={
          filteredPokemon.length > 0 ? filteredPokemon : pokemonList || []
        }
        onPokemonSelect={(pokemon) => setSelectedPokemon(pokemon)} // Pasar función para seleccionar Pokémon
      />

      {/* Modal */}
      {selectedPokemon && (
        <PokemonDetailModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)} // Función para cerrar el modal
        />
      )}
    </div>
  );
};
