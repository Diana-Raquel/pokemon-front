// components/landing/SearchBar.tsx
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (
    searchTerm: string,
    searchType: 'nombre' | 'tipo' | 'Habilidad',
  ) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState<'nombre' | 'tipo' | 'Habilidad'>(
    'nombre',
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <form onSubmit={handleSearch}>
      <select
        value={searchType}
        onChange={(e) =>
          setSearchType(e.target.value as 'nombre' | 'tipo' | 'Habilidad')
        }
      >
        <option value="name">Nombre</option>
        <option value="tipo">Tipo</option>
        <option value="Habilidad">Habilidad</option>
      </select>
      <input
        type="text"
        placeholder={`Buscar Pokémon por ${searchType}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};
