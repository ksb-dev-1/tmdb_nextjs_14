"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function deleteWatchlist(id: any, mediaType: any) {
  const session = await auth();

  try {
    const watchlistToDelete = await db.watchlist.findFirst({
      where: {
        cardId: String(id),
        mediaType,
        userId: session!.user!.id,
      },
    });
    if (!watchlistToDelete) {
      return {
        error: `${
          mediaType === "movie" ? "Movie" : "Tv show"
        } deleted from watchlist`,
      };
    }
    await db.watchlist.delete({
      where: {
        id: String(watchlistToDelete.id),
      },
    });
    revalidatePath("/");
    return {
      success: `${
        mediaType === "movie" ? "Movie" : "Tv show"
      } deleted from watchlist`,
    };
  } catch (error) {
    return {
      error: `Failed to delete ${
        mediaType === "movie" ? "Movie" : "Tv show"
      } from watchlist`,
    };
  }
}
