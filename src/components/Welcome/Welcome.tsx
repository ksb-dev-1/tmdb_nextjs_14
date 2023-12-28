import Image from "next/image";

// lib
import { getTrending } from "@/src/lib/getTrending";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export default async function Welcome() {
  const trending = await getTrending("week");
  const { name, title, backdrop_path } = await trending.results[
    Math.floor(Math.random() * (19 - 0 + 1)) + 0
  ];

  const media_title = name ? name : title;

  return (
    <div className="relative h-[188px] sm:h-[350px]">
      <div className="relative h-[188px] sm:h-[350px]">
        <Image
          src={backdrop_path === null ? url : IMG_PATH + backdrop_path}
          blurDataURL={backdrop_path === null ? url : IMG_PATH + backdrop_path}
          placeholder="blur"
          alt={media_title}
          fill
          className="w-[100%] object-cover"
        />
      </div>

      <div className="bg-gradient-to-t from-[var(--g2)] to-[var(--g1)] absolute top-0 left-0 h-[188px] sm:h-[350px] w-[100%] px-4 sm:px-8">
        <div className="mt-[1rem] sm:mt-[6rem] text-white">
          <p className="font-bold text-2xl sm:text-4xl mb-[0.5rem]">Welcome.</p>
          <p className="font-semibold text-lg sm:text-2xl">
            Millions of movies and TV shows to discover. Explore now.
          </p>
        </div>

        <div className="relative mt-[1rem] sm:mt-[2rem] h-[35px] sm:h-[45px] rounded-[50px] bg-white pl-[1rem] cursor-pointer">
          <p className="absolute h-[35px] sm:h-[45px] top-[12.5%] sm:top-[21.5%] left-[1.25rem] bg-trasparent">
            <span className="text-[#555] text-[0.85rem] sm:text-[1rem]">
              Search for a movie, tv show...
            </span>
          </p>
          <p className="absolute h-[35px] sm:h-[45px] w-[75px] sm:w-[100px] top-0 right-0 bg-gradient-to-r from-[var(--c1)] to-[var(--c2)] text-white rounded-[50px]">
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 font-[500]">
              Search
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
