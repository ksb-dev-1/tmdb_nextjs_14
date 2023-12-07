import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import moment from "moment";
import { IoMdAdd } from "react-icons/io";
import style from "./MediaCard.module.css";

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
    <div className={style.card_container}>
      <Link href="#" className={style.card_link}>
        <div className={style.image_container}>
          <Image
            src={poster_path === null ? url : IMG_PATH + poster_path}
            blurDataURL={poster_path === null ? url : IMG_PATH + poster_path}
            placeholder="blur"
            alt={name ? name : title}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={style.image}
          />
        </div>

        <div className={style.media_info_div}>
          <Rating vote_average={vote_average} />

          <span className={style.title}>
            {title
              ? title.length < 25
                ? title
                : title.substring(0, 25) + " ..."
              : name!.length < 25
              ? name
              : name!.substring(0, 25) + " ..."}
          </span>

          <span className={style.date}>
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
