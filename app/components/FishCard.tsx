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
      className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md w-50 h-72 transform transition-all duration-300 hover:scale-105 hover:border-blue-500"
      data-cy="fish-card"
    >
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
      <button className="bg-sky-300" onClick={deletefish}>
        Delete
      </button>
      <Link href={`/fishPage/${fish.id}`}>
        <span>Visit the fish</span>
      </Link>
    </div>
  );
}
