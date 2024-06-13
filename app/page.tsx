import { db } from "@/prisma/db";

export default async function Home() {
  const fish = await db.fish.findMany();
  return (
    <main className="flex  flex-col items-center justify-between p-4">
      <h1>Welcome to the ugly but lovely fish site!</h1>
      {fish.map((f) => (
        <div key={f.id}>
          <h1>{f.name}</h1>
          <h2>{f.length} cm</h2>
          <h2>{f.weight} kg</h2>
        </div>
      ))}
    </main>
  );
}
