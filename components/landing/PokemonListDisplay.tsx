import { Pokemon } from '@/types/pokemon.type';
import { PokemonItem } from './PokemonItem';

interface PokemonListDisplayProps {
  pokemonList: Pokemon[];
}

export const PokemonListDisplay = ({
  pokemonList,
}: PokemonListDisplayProps) => {
  return (
    <ul>
      {pokemonList.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  );
};
