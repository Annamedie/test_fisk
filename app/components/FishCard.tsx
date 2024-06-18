"use client";
import { Fish } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { deleteFishCard } from "../fishCardactions";
interface FishCardProps {
  fish: Fish;
}
export default function FishCard({ fish }: FishCardProps) {
  const deletefish = async () => {
    await deleteFishCard(fish.id);
  };
  return (
    <div
      className="flex flex-col justify-center p-4 border rounded-lg shadow-md w-50 h-80 transform transition-all duration-300 hover:scale-105 hover:border-blue-500"
      data-cy="fish-card"
    >
      <h2 className="text-xl font-bold text-center">{fish.name}</h2>
      <div className="relative w-full h-48">
        <Image
          src={fish.image}
          alt={fish.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="font-medium" data-cy="fish-length">
        {fish.length} dm
      </h3>
      <h3 className="font-medium" data-cy="fish-weight">
        {fish.weight} kg
      </h3>

      <Link href={`/fishPage/${fish.id}`}>
        <button className="bg-blue-500 text-white py-1 px-4 mb-2 rounded hover:bg-blue-600 transition-colors duration-200">
          Visit the fish
        </button>
      </Link>
      <button
        className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors duration-200"
        onClick={deletefish}
      >
        Delete
      </button>
    </div>
  );
}
