import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  image: string;
  types: string[];
  onDetailsClick: () => void;
}

const tagColors: Record<string, string> = {
  grass: 'bg-[#78C850] border-[#4E8234]',
  fire: 'bg-[#F08030] border-[#9C531F]',
  water: 'bg-[#6890F0] border-[#445E9C]',
  poison: 'bg-[#A040A0] border-[#682A68]',
  flying: 'bg-[#A890F0] border-[#6D5E9C]',
  bug: 'bg-[#A8B820] border-[#6D7815]',
  normal: 'bg-[#A8A878] border-[#6D6D4E]',
  electric: 'bg-[#F8D030] border-[#A1871F]',
  ground: 'bg-[#E0C068] border-[#927D44]',
  psychic: 'bg-[#F85888] border-[#A13959]',
  rock: 'bg-[#B8A038] border-[#786824]',
  ice: 'bg-[#98D8D8] border-[#638D8D]',
  dragon: 'bg-[#7038F8] border-[#4924A1]',
  dark: 'bg-[#705848] border-[#49392F]',
  fairy: 'bg-[#EE99AC] border-[#9B6470]',
  steel: 'bg-[#B8B8D0] border-[#787887]',
  fighting: 'bg-[#C03028] border-[#7D1F1A]',
  ghost: 'bg-[#705898] border-[#493963]',
  default: 'bg-gray-400 border-gray-500',
};

export const PokemonCard = ({
  name,
  image,
  types,
  onDetailsClick,
}: PokemonCardProps) => {
  const primaryType = types[0]?.toLowerCase();
  const borderColor = tagColors[primaryType] || tagColors.default;

  return (
    <div
      className={`rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full border-4 ${borderColor}`}
    >
      {/* Imagen del Pokémon */}
      <div className="flex justify-center items-center p-6 bg-white">
        <Image src={image} alt={name} width={192} height={192} />
      </div>

      {/* Información del Pokémon */}
      <div className="p-4 bg-white">
        {/* Nombre */}
        <h2 className="text-2xl text-[#094067] font-bold capitalize text-center mb-2 pb-4">
          {name}
        </h2>

        {/* Tipos */}
        <div className="flex justify-center gap-2 mb-4">
          {types.map((type) => {
            const typeColor =
              tagColors[type.toLowerCase()] || tagColors.default;
            return (
              <span
                key={type}
                className={`px-3 py-1 rounded-full text-base font-semibold capitalize text-white ${typeColor}`}
              >
                {type}
              </span>
            );
          })}
        </div>

        {/* Botón de detalles */}
        <div className="text-center">
          <button
            className="bg-gradient-to-r from-[#5f6c7b] to-[#094067] px-6 py-3 rounded-lg text-base font-bold hover:opacity-90 active:scale-95 text-white"
            onClick={onDetailsClick}
          >
            Más detalles
          </button>
        </div>
      </div>
    </div>
  );
};
