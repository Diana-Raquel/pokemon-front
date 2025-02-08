'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTeam } from '@/hooks/use-team';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

interface AddToTeamModalProps {
  isOpen: boolean;
  onClose: () => void;
  pokemon: any;
}

export const AddToTeamModal = ({
  isOpen,
  onClose,
  pokemon,
}: AddToTeamModalProps) => {
  const { teams, addToTeam } = useTeam();
  const [selectedTeam, setSelectedTeam] = useState('');
  const [newTeamName, setNewTeamName] = useState('');
  const [isCreatingNewTeam, setIsCreatingNewTeam] = useState(false);

  const handleAddToTeam = () => {
    const teamName = isCreatingNewTeam ? newTeamName.trim() : selectedTeam;
    if (!teamName) return;
    addToTeam(teamName, pokemon);
    toast({
      title: 'Pokemon added to your team',
      description: `${pokemon.name} has been added to ${teamName}`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar a equipo</DialogTitle>
          <DialogDescription>
            Selecciona un equipo existente o crea uno nuevo para agregar a{' '}
            {pokemon.name}.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Select
            onValueChange={(value) => {
              if (value === 'new') {
                setIsCreatingNewTeam(true);
                setSelectedTeam('');
              } else {
                setIsCreatingNewTeam(false);
                setSelectedTeam(value);
              }
            }}
            value={isCreatingNewTeam ? 'new' : selectedTeam}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona un equipo" />
            </SelectTrigger>
            <SelectContent>
              {teams.map((team, index) => (
                <SelectItem key={index} value={team.name}>
                  {team.name}
                </SelectItem>
              ))}
              <SelectItem value="new">+ Crear nuevo equipo</SelectItem>
            </SelectContent>
          </Select>

          {isCreatingNewTeam && (
            <Input
              placeholder="Nombre del equipo"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
            />
          )}

          <div className="flex justify-end space-x-4">
            <Button variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              onClick={handleAddToTeam}
              disabled={!selectedTeam && !newTeamName.trim()}
            >
              Agregar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
