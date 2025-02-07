'use client';

import { pokemonColors } from '../../types/pokemonColors';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

export const PokemonCard = ({ name, image, types }: PokemonCardProps) => {
  const primaryType = types[0]?.toLowerCase() || 'normal';

  return (
    <div
      className={`bg-gradient-to-br ${pokemonColors[primaryType]} text-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full border-2 ${pokemonColors[primaryType]}`}
    >
      {/* Imagen */}
      <div className="bg-gray-300 flex justify-center items-center p-6">
        <img src={image} alt={name} className="w-48 h-48" />
      </div>

      {/* Contenido */}
      <div className="p-4">
        {/* Nombre del Pokémon */}
        <h2 className="text-2xl font-bold capitalize text-center mb-2">
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

        {/* Botón */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-gray-800 to-black px-6 py-3 rounded-lg text-base font-bold hover:opacity-90 active:scale-95">
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};
