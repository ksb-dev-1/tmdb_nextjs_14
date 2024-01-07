"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function addWatchlist(id: number, mediaType: string) {
  const session = await auth();

  try {
    await db.watchlist.create({
      data: {
        cardId: String(id) as string,
        mediaType: mediaType,
        userId: session!.user!.id as string,
      },
    });
    revalidatePath("/");
    return {
      success: `${
        mediaType === "movie" ? "Movie" : "Tv show"
      } added to watchlist`,
    };
  } catch (error) {
    return {
      error: `Failed to add ${
        mediaType === "movie" ? "Movie" : "Tv show"
      } to watchlist`,
    };
  }
}
