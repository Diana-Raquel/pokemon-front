export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#d8eefe] px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-[#094067] text-center">
        Bienvenido a la Pokédex
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mt-4 text-center">
        Explora la lista completa de Pokémon y sus características.
      </p>
      <a
        href="/pokemon"
        className="mt-6 px-6 py-3 bg-[#3da9fc] text-white rounded-lg hover:bg-blue-600 hover:text-[#094067] transition duration-300 ease-in-out"
      >
        Ver Pokédex
      </a>
    </div>
  );
}
