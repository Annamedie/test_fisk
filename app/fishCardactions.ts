"use server";

import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { FishData } from "./fishForm/page";

export async function createFishCard(fishData: FishData) {
  const fish = await db.fish.create({
    data: {
      ...fishData,
    },
  });

  revalidatePath("/");
  return fish;
}

export async function deleteFishCard(id: string) {
  await db.fish.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
}

export async function findUniqueFish(id: string) {
  const fish = await db.fish.findUnique({
    where: {
      id,
    },
  });
  return fish;
}

// change the boolean value of ugly to the opposite of what it is
export async function updateUglyState(id: string) {
  const uglyFish = await db.fish.findUnique({
    where: {
      id,
    },
  });

  if (!uglyFish) {
    return;
  }

  await db.fish.update({
    where: {
      id,
    },
    data: {
      ugly: !uglyFish.ugly,
    },
  });

  revalidatePath("/fishPage/[slug]");
}
