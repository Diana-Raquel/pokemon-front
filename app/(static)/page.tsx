'use client';

import { PokemonList } from '@/components/landing/PokemonList';

export default function Page() {
  return (
    <div className="flex items-center min-h-screen px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Pokémon
          </h1>
          <PokemonList />
        </div>
      </div>
    </div>
  );
}
