import { db } from "./db";

async function main() {
  if (process.env.NODE_ENV !== "test") return;

  await db.fish.deleteMany({});
  //ta bort från alla tabeller
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
