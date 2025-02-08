import { useEffect, useState } from 'react';

const useTeam = () => {
  const [team, setTeam] = useState<string[]>([]);

  // Cargar el equipo guardado desde localStorage al iniciar
  useEffect(() => {
    const savedTeam = localStorage.getItem('pokemonTeam');
    if (savedTeam) {
      setTeam(JSON.parse(savedTeam));
    }
  }, []);

  // Guardar el equipo en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('pokemonTeam', JSON.stringify(team));
  }, [team]);

  const addToTeam = (pokemon: string) => {
    if (team.length < 6 && !team.includes(pokemon)) {
      setTeam([...team, pokemon]);
    }
  };

  const removeFromTeam = (pokemon: string) => {
    setTeam(team.filter((p) => p !== pokemon));
  };

  return { team, addToTeam, removeFromTeam };
};

export default useTeam;
