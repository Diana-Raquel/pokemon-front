'use client';

import { usePokemon } from '@/hooks/use-pokemon';
import useTeam from '@/hooks/use-team';

export default function AddTeam() {
  const { data: pokemonList, isLoading } = usePokemon();
  const { team, addToTeam, removeFromTeam } = useTeam();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Agregar Pokémon al Equipo</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pokemonList?.map((pokemon) => (
          <div key={pokemon.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} className="mx-auto" />
            <button
              onClick={() => addToTeam(pokemon.name)}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Agregar al Equipo
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Tu Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((pokemon) => (
            <div key={pokemon} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{pokemon}</h3>
              <button
                onClick={() => removeFromTeam(pokemon)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Eliminar del Equipo
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
