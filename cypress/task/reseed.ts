import { db } from "../../prisma/db";

export async function reesed() {
  //----reset //
  if (process.env.NODE_ENV !== "test") return;

  await db.fish.deleteMany({});
  //ta bort från alla tabeller

  //----seed //
  await db.fish.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      name: "Blobfish",
      length: 10,
      weight: 5,
      image: "https://i.ibb.co/G2NVSzm/blobfish.webp",
    },
  });
  await db.fish.upsert({
    where: { id: "2" },
    update: {},
    create: {
      id: "2",
      name: "Frilled Shark",
      length: 5,
      weight: 3,
      image: "https://i.ibb.co/dk5G1T3/Frilled-Shark-Mouth-1536x1024.jpg",
    },
  });
  return null;
}
