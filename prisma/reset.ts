import { db } from "./db";

async function main() {
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
