'use client';

import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

export const PokemonCard = ({ name, image, types }: PokemonCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 p-4">
      <Image
        src={image}
        alt={name}
        width={128}
        height={128}
        className="w-32 h-32 mx-auto"
      />
      |{/* Nombre del Pokémon */}
      <h2 className="text-xl font-semibold capitalize text-center mt-2">
        {name}
      </h2>
      {/* Tipos del Pokémon */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {types.map((type) => (
          <span
            key={type}
            className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
