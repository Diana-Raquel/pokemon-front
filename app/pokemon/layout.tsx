export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-[#1b2039] text-white py-4 px-8">
        <h1 className="text-3xl font-bold">Pokédex</h1>
      </header>
      <main className="container mx-auto">{children}</main>
    </div>
  );
}
