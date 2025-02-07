'use client';

import { Pokemon } from '@/types/pokemon.type';

interface PokemonDetailModalProps {
  pokemon: Pokemon;
  onClose: () => void;
}

export const PokemonDetailModal = ({
  pokemon,
  onClose,
}: PokemonDetailModalProps) => {
  const bgGradient =
    'bg-gradient-to-br from-purple-700 via-indigo-800 to-indigo-900';

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className={`bg-gradient-to-br ${bgGradient} rounded-xl shadow-lg p-6 max-w-lg w-full relative`}
      >
        {/* Botón de cierre */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Imagen y nombre */}
        <div className="flex justify-center mb-4">
          <img src={pokemon.image} alt={pokemon.name} className="w-40 h-40" />
        </div>
        <h2 className="text-3xl font-bold capitalize text-center text-white mb-4">
          {pokemon.name}
        </h2>

        {/* Tipos */}
        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-200">Tipos</p>
          <div className="flex justify-center gap-2 mt-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="px-3 py-1 rounded-full text-sm font-semibold capitalize bg-white text-gray-900"
              >
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Habilidades */}
        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-200">Habilidades</p>
          <div className="flex justify-center gap-2 mt-2">
            {pokemon.abilities.map((ability) => (
              <span
                key={ability}
                className="px-3 py-1 rounded-full text-sm font-semibold capitalize bg-white text-gray-900"
              >
                {ability}
              </span>
            ))}
          </div>
        </div>

        {/* Altura y Peso */}
        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-200">
            Información Física
          </p>
          <div className="flex justify-around mt-2">
            <div>
              <p className="text-sm text-gray-300">Altura</p>
              <p className="font-bold text-white">
                {(pokemon.height / 10).toFixed(1)} m
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-300">Peso</p>
              <p className="font-bold text-white">
                {(pokemon.weight / 10).toFixed(1)} kg
              </p>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-200">Estadísticas</p>
          <div className="mt-2 space-y-2">
            {pokemon.stats.map((stat) => (
              <div
                key={stat.name}
                className="flex justify-between items-center text-sm"
              >
                <p className="capitalize text-gray-300">{stat.name}</p>
                <div className="w-2/3 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full"
                    style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                  />
                </div>
                <p className="ml-2 font-bold text-white">{stat.base_stat}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experiencia base */}
        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-200">
            Experiencia Base
          </p>
          <p className="font-bold text-white">{pokemon.base_experience}</p>
        </div>
      </div>
    </div>
  );
};
