'use client';

import { Search } from 'lucide-react'; // Importar el ícono de Lucide
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
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-2 rounded-lg p-2 shadow-sm pb-8"
    >
      {/* Input de búsqueda */}
      <div className="flex items-center bg-white rounded-xl px-3 py-2 w-full">
        <Search className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Pokémon..."
          className="flex-grow bg-transparent text-gray-800 focus:outline-none"
        />

        {/* Selector de tipo */}
        <select
          value={searchType}
          onChange={(e) =>
            setSearchType(e.target.value as 'nombre' | 'tipo' | 'habilidad')
          }
          className="bg-white text-gray-800 px-4 py-2 border-l border-gray-300 focus:outline-none rounded-none"
        >
          <option value="nombre">Nombre</option>
          <option value="tipo">Tipo</option>
          <option value="habilidad">Habilidad</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-[#505f86] text-white px-4 py-4 rounded-[60px] hover:bg-[#094067] focus:outline-none transition-colors duration-200 flex justify-center items-center"
      >
        <Search className="text-white" size={20} />
      </button>
    </form>
  );
};
