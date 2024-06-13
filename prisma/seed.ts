import { db } from "./db";

async function main() {
  await db.fish.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      name: "Blobfish",
      length: 10,
      weight: 5,
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
    },
  });
  await db.fish.upsert({
    where: { id: "3" },
    update: {},
    create: {
      id: "3",
      name: "Illuminated Netdevil",
      length: 4,
      weight: 2,
    },
  });
  await db.fish.upsert({
    where: { id: "4" },
    update: {},
    create: {
      id: "4",
      name: "Monkfish",
      length: 3,
      weight: 1,
    },
  });
  await db.fish.upsert({
    where: { id: "5" },
    update: {},
    create: {
      id: "5",
      name: "Goblin Shark",
      length: 2,
      weight: 1,
    },
  });
  await db.fish.upsert({
    where: { id: "6" },
    update: {},
    create: {
      id: "6",
      name: "Atlantic Wolffish",
      length: 1,
      weight: 1,
    },
  });
  await db.fish.upsert({
    where: { id: "7" },
    update: {},
    create: {
      id: "7",
      name: "Sloane's Viperfish",
      length: 1,
      weight: 1,
    },
  });
  await db.fish.upsert({
    where: { id: "8" },
    update: {},
    create: {
      id: "8",
      name: "Hag fish",
      length: 1,
      weight: 1,
    },
  });
  await db.fish.upsert({
    where: { id: "9" },
    update: {},
    create: {
      id: "9",
      name: "Whitemargin Stargazer",
      length: 1,
      weight: 1,
    },
  });
  await db.fish.upsert({
    where: { id: "10" },
    update: {},
    create: {
      id: "10",
      name: "Red-Lipped Batfish",
      length: 1,
      weight: 1,
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
