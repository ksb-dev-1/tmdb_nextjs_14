import { db } from "@/db";
import { NextResponse } from "next/server";
import { auth } from "@/auth";
import MovieOrShowCard from "@/components/MovieOrShowCard/MovieOrShowCard";

const getWtachlist = async () => {
  const session = await auth();
  try {
    const wishlist = await db.watchlist.findMany({
      where: {
        userId: session?.user?.id,
      },
    });
    return NextResponse.json(wishlist);
  } catch (error) {
    return NextResponse.error();
  }
};

export default async function Watchlist() {
  const response = await getWtachlist();
  const watchlist = await response.json();

  return (
    <div className="max-w-[1100px] mx-auto px-4 xl:px-0 mt-24">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] items-stretch gap-[2rem_1rem] lg:gap-[4rem_2rem]">
        {watchlist.map((data: MovieOrShowCard) => (
          <MovieOrShowCard data={data} key={data.card_id} type="watchlist" />
        ))}
      </div>
    </div>
  );
}
