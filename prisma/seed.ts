import { db } from "./db";

async function main() {
  await db.fish.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      name: "Goldfish",
      length: 10,
      weight: 5,
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
