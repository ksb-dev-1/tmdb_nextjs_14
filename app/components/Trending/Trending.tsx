// lib
import { getTrending } from "@/app/lib/getTrending";

// components
import MediaCard from "../MediaCard/MediaCard";

export default async function Trending() {
  const trending = await getTrending("week");
  //await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <div className="max-w-[1100px] mx-auto">
      <p className="mt-[2rem] text-2xl font-semibold">Trending</p>
      <div className="mt-[1rem] grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] items-stretch gap-[4rem_2rem]">
        {trending.results.map((media: any, index: number) => (
          <MediaCard media={media} key={index} />
        ))}
      </div>
    </div>
  );
}
