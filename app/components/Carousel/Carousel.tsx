import Image from "next/image";

// lib
import { getTrending } from "@/app/lib/getTrending";

// styles
import style from "./style.module.css";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export default async function Carousel() {
  const trending = await getTrending("week");
  const { name, title, backdrop_path } = await trending.results[
    Math.floor(Math.random() * (19 - 0 + 1)) + 0
  ];

  const media_title = name ? name : title;

  return (
    <div className="relative h-[350px]">
      <div className="relative h-[350px] bg-red-300">
        <Image
          src={backdrop_path === null ? url : IMG_PATH + backdrop_path}
          blurDataURL={backdrop_path === null ? url : IMG_PATH + backdrop_path}
          placeholder="blur"
          alt={media_title}
          fill
          className="h-[350px] w-[100%] object-cover"
        />
      </div>

      <div className="bg-gradient-to-t from-[var(--g2)] to-[var(--g1)] absolute top-0 left-0 h-[350px] w-[100%] px-8">
        <div className="mt-[6rem] text-white">
          <p className="font-bold text-4xl mb-[0.5rem]">Welcome.</p>
          <p className="font-semibold text-2xl">
            Millions of movies and TV shows to discover. Explore now.
          </p>
        </div>

        <div className="relative mt-[2rem] h-[45px] rounded-[50px] bg-white pl-[1rem] cursor-pointer">
          <p className="absolute h-[45px] top-[21.5%] left-[1.25rem] bg-trasparent">
            <span className="text-[#555]">Search for a movie, tv show...</span>
          </p>
          <p className="absolute h-[45px] w-[100px] top-0 right-0 bg-gradient-to-r from-[var(--c1)] to-[var(--c2)] text-white rounded-[50px]">
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 font-[500]">
              Search
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
