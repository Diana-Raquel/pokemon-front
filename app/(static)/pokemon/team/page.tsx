'use client';

import { TeamGroup } from '@/components/TeamModals/TeamGroup';
import { useTeam } from '@/hooks/use-team';

export default function Page() {
  const { teams } = useTeam();
  return (
    <div className="flex flex-col gap-4 pt-8">
      {teams.map((team, index) => (
        <div key={index} className="p-4 mb-4">
          <h2 className="text-2xl font-bold text-[#094067] pb-8 flex justify-center align-center">
            {`Equipo #${index + 1} - ${team.name}`}
          </h2>
          <div className="grid grid-cols-6 gap-4">
            {team.pokemons.map((pokemon) => (
              <TeamGroup key={pokemon.id} {...pokemon} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
