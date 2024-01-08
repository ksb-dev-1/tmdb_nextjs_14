// lib
import { fetchTrending } from "@/lib/fetchTrending";

// components
import MovieOrShowCard from "../MovieOrShowCard/MovieOrShowCard";

export default async function Trending() {
  const trending = await fetchTrending("week");

  return (
    <div className="max-w-[1100px] mx-auto px-4 xl:px-0">
      <div className="mt-8 sm:mt-12 flex items-center mb-2 sm:mb-4">
        <p className="text-lg sm:text-xl font-bold">Trending</p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(170px,1fr))] items-stretch gap-[2rem_1rem] lg:gap-[4rem_2rem]">
        {trending.results.map((data: MovieOrShowCard) => (
          <MovieOrShowCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
