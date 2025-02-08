'use client';

import { getCookie, setCookie } from '@/lib/cookies';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface Team {
  name: string;
  pokemons: any[];
}

interface ProviderProps {
  teams: Team[];
  addToTeam: (teamName: string, pokemon: any) => void;
  removeFromTeam: (teamName: string, pokemon: string) => void;
}

export const TeamContext = createContext<ProviderProps | undefined>(undefined);

export const TeamProvider = ({ children }: { children: ReactNode }) => {
  const [teams, setTeams] = useState<Team[]>(() => {
    const pokemonTeams = getCookie('pokemonTeams');
    return pokemonTeams ? JSON.parse(pokemonTeams) : [];
  });

  useEffect(() => {
    setCookie('pokemonTeams', JSON.stringify(teams));
  }, [teams]);

  const addToTeam = (teamName: string, pokemon: any) => {
    setTeams((prevTeams) => {
      const teamIndex = prevTeams.findIndex((team) => team.name === teamName);

      if (teamIndex !== -1) {
        const team = prevTeams[teamIndex];

        // Verifica que el equipo tenga menos de 6 Pokémon y que el Pokémon no esté repetido
        if (
          team.pokemons.length < 6 &&
          !team.pokemons.some((p) => p.id === pokemon.id)
        ) {
          const updatedTeams = [...prevTeams];
          updatedTeams[teamIndex] = {
            ...team,
            pokemons: [...team.pokemons, pokemon], // Agrega el objeto Pokémon completo
          };
          return updatedTeams;
        }
      } else {
        // Si el equipo no existe, lo crea con el nuevo Pokémon
        return [...prevTeams, { name: teamName, pokemons: [pokemon] }];
      }

      return prevTeams;
    });
  };

  const removeFromTeam = (teamName: string, pokemon: string) => {
    setTeams((prevTeams) => {
      return prevTeams.map((team) =>
        team.name === teamName
          ? { ...team, pokemons: team.pokemons.filter((p) => p !== pokemon) }
          : team,
      );
    });
  };

  return (
    <TeamContext.Provider value={{ teams, addToTeam, removeFromTeam }}>
      {children}
    </TeamContext.Provider>
  );
};
