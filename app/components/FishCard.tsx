import { Fish } from "@prisma/client";
import Image from "next/image";
interface FishCardProps {
  fish: Fish;
}
export default function FishCard({ fish }: FishCardProps) {
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-50 h-72 transform transition-all duration-300 hover:scale-105 hover:border-blue-500 fish-card">
      <h2 className="text-xl font-bold">{fish.name}</h2>
      <div className="relative w-full h-40">
        <Image
          src={fish.image}
          alt={fish.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3>{fish.length} cm</h3>
      <h3>{fish.weight} kg</h3>
      <h4>{fish.ugly}</h4>
    </div>
  );
}
