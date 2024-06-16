import { db } from "@/prisma/db";
import Link from "next/link";
import FishCard from "./components/FishCard";

export default async function Home() {
  const fish = await db.fish.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <main className="flex  flex-col items-center justify-between p-4 ">
      <h1>Welcome to the ugly but lovely fish site!</h1>
      <Link href="/fishForm">
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
          data-cy="add-fish-button"
        >
          Add your fish
        </button>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        {fish.map((f) => (
          <FishCard key={f.id} fish={f} />
        ))}
      </div>
    </main>
  );
}
