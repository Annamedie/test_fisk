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
