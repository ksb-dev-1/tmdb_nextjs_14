"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function deleteWatchlist(id: number, media_type: string) {
  const session = await auth();

  try {
    const watchlistToDelete = await db.watchlist.findFirst({
      where: {
        card_id: id,
        media_type,
        userId: session!.user!.id,
      },
    });
    if (!watchlistToDelete) {
      return {
        error: `${
          media_type === "movie" ? "Movie" : "Tv show"
        } deleted from watchlist`,
      };
    }
    await db.watchlist.delete({
      where: {
        id: watchlistToDelete.id,
      },
    });
    revalidatePath("/");
    revalidatePath("/pages/watchlist");
    return {
      success: `${
        media_type === "movie" ? "Movie" : "Tv show"
      } deleted from watchlist`,
    };
  } catch (error) {
    return {
      error: `Failed to delete ${
        media_type === "movie" ? "Movie" : "Tv show"
      } from watchlist`,
    };
  }
}
