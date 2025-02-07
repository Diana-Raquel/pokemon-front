// components/landing/SearchBar.tsx
import { useState } from 'react';

interface SearchBarProps {
  onSearch: (
    searchTerm: string,
    searchType: 'nombre' | 'tipo' | 'habilidad',
  ) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState<'nombre' | 'tipo' | 'habilidad'>(
    'nombre',
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, searchType);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Pokémon..."
        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={searchType}
        onChange={(e) =>
          setSearchType(e.target.value as 'nombre' | 'tipo' | 'habilidad')
        }
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="nombre">Nombre</option>
        <option value="tipo">Tipo</option>
        <option value="habilidad">Habilidad</option>
      </select>
      <button
        onClick={handleSearch}
        className="px-6 py-2 bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Search
      </button>
    </div>
  );
};
