'use client';

import { TeamGroup } from '@/components/TeamModals/TeamGroup';
import { useTeam } from '@/hooks/use-team';

export default function Page() {
  const { teams } = useTeam();
  return (
    <div className="flex flex-col items-center gap-6 pt-8 px-4">
      {teams.map((team, index) => (
        <div key={index} className="w-full p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold text-[#094067] pb-4 text-center">
            {`Equipo #${index + 1} - ${team.name}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {team.pokemons.map((pokemon) => (
              <TeamGroup key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
