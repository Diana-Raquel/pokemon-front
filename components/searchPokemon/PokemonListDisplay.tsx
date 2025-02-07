import { Pokemon } from '@/types/pokemon.type';
import { PokemonCard } from './PokemonCard';

interface PokemonListDisplayProps {
  pokemonList: Pokemon[];
}

export const PokemonListDisplay = ({
  pokemonList,
}: PokemonListDisplayProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </div>
  );
};
