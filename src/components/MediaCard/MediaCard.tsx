import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import moment from "moment";
import WatchlistBtn from "./WatchlistBtn";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

export default function MediaCard({ media }: { media: MediaCard }) {
  const {
    id,
    media_type,
    name,
    title,
    poster_path,
    release_date,
    first_air_date,
    vote_average,
  } = media;

  return (
    <div className="relative min-h-[200px] sm:min-h-[250px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
      <Link
        href="#"
        className="group block h-full no-underline rounded-[var(--border-radius-1)]"
      >
        <div className="relative overflow-hidden h-[175px] sm:h-[225px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)]">
          <Image
            src={poster_path === null ? url : IMG_PATH + poster_path}
            blurDataURL={poster_path === null ? url : IMG_PATH + poster_path}
            placeholder="blur"
            alt={name ? name! : title!}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="group-hover:scale-125 transition duration-300"
          />
        </div>

        <div className="relative flex flex-col pt-6 pb-2 sm:pb-4 px-2 sm:px-4">
          <Rating vote_average={vote_average} />

          <span className="font-semibold sm:font-bold text-[0.85rem] sm:text-[1rem] mb-1 rounded min-h-[20px]">
            {title
              ? title.length < 25
                ? title
                : title.substring(0, 25) + " ..."
              : name!.length < 25
              ? name
              : name!.substring(0, 25) + " ..."}
          </span>

          <span className="text-[0.75rem] sm:text-[0.85rem] text-[#555] sm:font-medium rounded min-h-[20px]">
            {release_date && moment(release_date).format("Do MMM, YYYY")}
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>
      <WatchlistBtn id={id} mediaType={media_type} />
    </div>
  );
}
