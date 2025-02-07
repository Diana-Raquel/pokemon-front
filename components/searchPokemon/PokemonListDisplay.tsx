import { Pokemon } from '@/types/pokemon.type';
import { PokemonCard } from './PokemonCard';

interface PokemonListDisplayProps {
  pokemonList: Pokemon[];
}

export const PokemonListDisplay = ({
  pokemonList,
}: PokemonListDisplayProps) => {
  return (
    <>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          types={pokemon.types}
        />
      ))}
    </>
  );
};
