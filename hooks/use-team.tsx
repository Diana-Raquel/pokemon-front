import { TeamContext } from '@/providers/team-provider';
import { useContext } from 'react';

export const useTeam = () => {
  const context = useContext(TeamContext);
  if (!context) throw new Error('useTeam must be used within a TeamProvider');
  return context;
};
