// components/PokemonList.tsx
import { useState } from 'react';
import { usePokemon } from '../../hooks/use-pokemon';
import { Pokemon } from '../../types/pokemon.type';
import { SearchBar } from './SearchBar';

export const PokemonList = () => {
  const { data, isLoading, isError } = usePokemon();
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);

  const handleSearch = (searchTerm: string) => {
    if (!data) return;
    const filtered = data.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
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
          : data?.results || []
        ).map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};
