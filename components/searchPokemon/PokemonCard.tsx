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
  // Obtener el tipo principal del Pokémon y su color asociado
  const primaryType = types[0]?.toLowerCase() || 'normal';
  const cardColor = pokemonColors[primaryType] || 'from-gray-500 to-gray-700'; // Fallback si no se encuentra el tipo

  return (
    <div
      className={`bg-gradient-to-br ${cardColor} text-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full`}
    >
      {/* Imagen del Pokémon */}
      <div className="flex justify-center items-center p-6">
        <img src={image} alt={name} className="w-48 h-48" />
      </div>

      {/* Información del Pokémon */}
      <div className="p-4">
        {/* Nombre */}
        <h2 className="text-2xl text-[#094067] font-bold capitalize text-center mb-2 pb-4">
          {name}
        </h2>

        {/* Tipos */}
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

        {/* Botón de detalles */}
        <div className="text-center">
          <button
            className="bg-gradient-to-r from-[#3da9fc] to-[#90b4ce] px-6 py-3 rounded-lg text-base font-bold hover:opacity-90 active:scale-95"
            onClick={onDetailsClick}
          >
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};
