// components/Layout.tsx
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-[#1b2039] text-white py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pokédex</h1>
        <Link href="/pokemon/team">
          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            <Plus className="mr-2" />
            Agregar Equipo
          </button>
        </Link>
      </header>
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
