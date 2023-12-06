import Image from "next/image";

import moment from "moment";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

export default function MediaCard({ media }: any) {
  const {
    name,
    title,
    poster_path,
    release_date,
    first_air_date,
    vote_average,
  } = media;

  const getBg = (vote_average: any) => {
    return vote_average < 5 ? "tomato" : vote_average >= 7.5 ? "green" : "gold";
  };

  return (
    <div className="relative shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
      {/* Image, Rating */}
      <div className="relative h-[250px]">
        <Image
          src={poster_path === null ? url : IMG_PATH + poster_path}
          blurDataURL={poster_path === null ? url : IMG_PATH + poster_path}
          placeholder="blur"
          alt={name ? name : title}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=""
        />
      </div>

      {/* Title, Date */}
      <div className="flex flex-col pt-[2rem] px-[1rem] pb-[1rem]">
        <span className="font-[500] mb-[0.25rem]">
          {title
            ? title.length < 25
              ? title
              : title.substring(0, 25) + " ..."
            : name!.length < 25
            ? name
            : name!.substring(0, 25) + " ..."}
        </span>
        <span className="text-[0.85rem] font-[500] text-[#777]">
          {release_date && moment(release_date).format("Do MMM, YYYY")}
          {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
        </span>
      </div>
    </div>
  );
}
