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
  const { name, title, backdrop_path, overview } = await trending.results[
    Math.floor(Math.random() * (19 - 0 + 1)) + 0
  ];

  const media_title = name ? name : title;
  //await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <div className="relative h-[350px]">
      <div className="bg-red-300">
        <Image
          src={backdrop_path === null ? url : IMG_PATH + backdrop_path}
          blurDataURL={backdrop_path === null ? url : IMG_PATH + backdrop_path}
          placeholder="blur"
          alt={media_title}
          height={350}
          width={1280}
          //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-[350px] w-[100%] object-cover"
        />
      </div>

      <div
        className={`${style.cover} absolute top-0 left-0 h-[350px] w-[100%] p-8`}
      ></div>

      <div className="absolute left-[2rem] top-[6rem] text-white">
        {/* <p className="font-bold text-2xl mb-[0.25rem]">{media_title}</p>
        <p className="max-w-[750px]">
          {overview
            ? overview.length < 350
              ? overview
              : overview.substring(0, 350) + " ..."
            : ""}
        </p> */}
        <p className="font-bold text-4xl">Welcome.</p>
        <p className="font-semibold text-2xl">
          Millions of movies and TV shows. Explore now.
        </p>
      </div>
    </div>
  );
}
