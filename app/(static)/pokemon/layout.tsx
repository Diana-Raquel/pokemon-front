'use client';

import { Sparkle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isTeamPage = pathname === '/pokemon/team';

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-[#094067] text-white py-4 px-8 flex justify-between items-center">
        <Link href="/pokemon">
          <h1 className="text-3xl font-bold">Pokédex</h1>
        </Link>
        {!isTeamPage && (
          <Link href="/pokemon/team">
            <button className="flex items-center bg-[#505f86] text-[white] px-4 py-2 rounded-lg hover:bg-[#ff2a51]">
              <Sparkle className="mr-2" />
              Mis Equipos
            </button>
          </Link>
        )}
      </header>
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
