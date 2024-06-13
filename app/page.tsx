import { db } from "@/prisma/db";
import FishCard from "./components/FishCard";

export default async function Home() {
  const fish = await db.fish.findMany();
  return (
    <main className="flex  flex-col items-center justify-between p-4 ">
      <h1>Welcome to the ugly but lovely fish site!</h1>
      <div className="grid grid-cols-2 gap-4">
        {fish.map((f) => (
          <FishCard key={f.id} fish={f} />
        ))}
      </div>
    </main>
  );
}
