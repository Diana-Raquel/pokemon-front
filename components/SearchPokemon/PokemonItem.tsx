import { Pokemon } from '@/types/pokemon.type';

interface PokemonItemProps {
  pokemon: Pokemon;
}

export const PokemonItem = ({ pokemon }: PokemonItemProps) => {
  return <li>{pokemon.name}</li>;
};
