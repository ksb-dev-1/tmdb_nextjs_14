import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import moment from "moment";
import { IoMdAdd } from "react-icons/io";

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

  return (
    <div className="relative min-h-[300px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
      <Link
        href="#"
        className="group block h-full no-underline rounded-[var(--border-radius-1)]"
      >
        <div className="relative overflow-hidden h-[250px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)]">
          <Image
            src={poster_path === null ? url : IMG_PATH + poster_path}
            blurDataURL={poster_path === null ? url : IMG_PATH + poster_path}
            placeholder="blur"
            alt={name ? name : title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="group-hover:scale-125 transition duration-300"
          />
        </div>

        <div className="relative flex flex-col pt-6 pb-4 px-4">
          <Rating vote_average={vote_average} />

          <span className="font-bold mb-1">
            {title
              ? title.length < 25
                ? title
                : title.substring(0, 25) + " ..."
              : name!.length < 25
              ? name
              : name!.substring(0, 25) + " ..."}
          </span>

          <span className="text-[0.85rem] text-[#555] font-medium">
            {release_date && moment(release_date).format("Do MMM, YYYY")}
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>

      <div className="absolute bg-[rgba(0,0,0,0.75)] top-0 right-0 w-[35px] h-[35px] cursor-pointer rounded-[3px] hover:scale-[1.25] transition ease transition-duration-300">
        <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
          <IoMdAdd />
        </span>
      </div>
    </div>
  );
}
