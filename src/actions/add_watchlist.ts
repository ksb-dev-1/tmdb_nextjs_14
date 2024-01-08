"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

export async function addWatchlist(data: MovieOrShowCard) {
  const session = await auth();

  try {
    await db.watchlist.create({
      data: {
        card_id: data.id ? data.id : (data.card_id as number),
        media_type: data.media_type,
        poster_path: data.poster_path!,
        title: data.name ? data.name : (data.title as string),
        release_date: data.release_date
          ? data.release_date
          : (data.first_air_date as string),
        userId: session!.user!.id as string,
      },
    });
    revalidatePath("/");
    revalidatePath("/pages/watchlist");
    return {
      success: `${
        data.media_type === "movie" ? "Movie" : "Tv show"
      } added to watchlist`,
    };
  } catch (error) {
    return {
      error: `Failed to add ${
        data.media_type === "movie" ? "Movie" : "Tv show"
      } to watchlist`,
    };
  }
}
