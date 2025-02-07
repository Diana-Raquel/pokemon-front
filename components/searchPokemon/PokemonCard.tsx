'use client';

import { pokemonColors } from '../../types/pokemonColors';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
  onDetailsClick: () => void;
}

export const PokemonCard = ({
  name,
  image,
  types,
  onDetailsClick,
}: PokemonCardProps) => {
  const primaryType = types[0]?.toLowerCase() || 'normal';

  return (
    <div
      className={`bg-gradient-to-br ${pokemonColors[primaryType]} text-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full border-2 ${pokemonColors[primaryType]}`}
    >
      <div className="flex justify-center items-center p-6">
        <img src={image} alt={name} className="w-48 h-48" />
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold capitalize text-center mb-2">
          {name}
        </h2>

        <div className="flex justify-center gap-2 mb-4">
          {types.map((type) => (
            <span
              key={type}
              className="px-3 py-1 rounded-full text-base font-semibold capitalize text-gray-900 bg-white"
            >
              {type}
            </span>
          ))}
        </div>

        <div className="text-center">
          <button
            className="bg-gradient-to-r from-gray-800 to-black px-6 py-3 rounded-lg text-base font-bold hover:opacity-90 active:scale-95"
            onClick={onDetailsClick} // Llamar a la función al hacer clic
          >
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};
