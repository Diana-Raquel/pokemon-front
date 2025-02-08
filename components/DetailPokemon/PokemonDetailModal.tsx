'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Pokemon } from '@/types/pokemon.type';
import { Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { AddToTeamModal } from '../TeamModals/AddTeamModal';

interface PokemonDetailModalProps {
  pokemon: Pokemon;
  open: boolean;
  onClose: () => void;
}

export const PokemonDetailModal = ({
  pokemon,
  open,
  onClose,
}: PokemonDetailModalProps) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className="max-w-sm space-y-1 sm:max-w-md md:max-w-lg lg:max-w-xl rounded-xl px-4 py-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold capitalize text-gray-900">
              {pokemon.name}
            </DialogTitle>
          </DialogHeader>

          {/* Pokémon Image */}
          <div className="flex flex-col items-center">
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={128}
              height={128}
              className="w-24 h-24 md:w-32 md:h-32 object-contain"
            />
          </div>

          {/* Types */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-600">Tipos</p>
            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              {pokemon.types.map((type) => (
                <span
                  key={type}
                  className="px-3 py-1 rounded-full text-sm font-semibold capitalize bg-gray-200 text-gray-900"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Abilities */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-600">Habilidades</p>
            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              {pokemon.abilities.map((ability) => (
                <span
                  key={ability}
                  className="px-3 py-1 rounded-full text-sm font-semibold capitalize bg-gray-200 text-gray-900"
                >
                  {ability}
                </span>
              ))}
            </div>
          </div>

          {/* Height & Weight */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-600">
              Información Física
            </p>
            <div className="flex justify-around mt-2 text-sm">
              <div>
                <p className="text-gray-500">Altura</p>
                <p className="font-bold text-gray-900">
                  {(pokemon.height / 10).toFixed(1)} m
                </p>
              </div>
              <div>
                <p className="text-gray-500">Peso</p>
                <p className="font-bold text-gray-900">
                  {(pokemon.weight / 10).toFixed(1)} kg
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-600">Estadísticas</p>
            <div className="mt-2 space-y-2">
              {pokemon.stats.map((stat) => (
                <div key={stat.name} className="flex items-center text-sm">
                  <p className="capitalize text-gray-600 w-20">{stat.name}</p>
                  <div className="flex-1 bg-gray-300 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full"
                      style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                    />
                  </div>
                  <p className="ml-2 font-bold text-gray-900">
                    {stat.base_stat}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Base Experience */}
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-600">
              Experiencia Base
            </p>
            <p className="font-bold text-gray-900">{pokemon.base_experience}</p>
          </div>

          {/* Add to Team Button */}
          <div className="mt-6 flex justify-center">
            <button
              className="bg-[#094067] px-4 py-2 rounded-full text-white text-sm md:text-base font-bold hover:opacity-90 active:scale-95 flex items-center gap-2 transition-transform"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Plus className="w-5 h-5" /> Agregar al Equipo
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add to Team Modal */}
      {isAddModalOpen && (
        <AddToTeamModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          pokemon={pokemon}
        />
      )}
    </>
  );
};
