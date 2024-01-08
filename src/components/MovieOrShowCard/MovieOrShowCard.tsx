import Link from "next/link";
import Rating from "./Rating";
import moment from "moment";
import WatchlistBtn from "./WatchlistBtn";
import Poster from "./Poster";

export default async function MovieOrShowCard({
  data,
  type,
}: {
  data: MovieOrShowCard;
  type?: string;
}) {
  const {
    name,
    title,
    poster_path,
    release_date,
    first_air_date,
    vote_average,
  } = data;

  return (
    <div className="relative h-[325px] md:h-[360px] shadow-[0_2px_4px_rgba(0,0,0,0.2)] rounded-[var(--border-radius-1)]">
      <Link
        href="#"
        className="group block h-full no-underline rounded-[var(--border-radius-1)]"
      >
        <Poster poster_path={poster_path!} name={name!} title={title!} />

        <div className="relative flex flex-col pt-6 pb-2 md:pb-4 px-2 md:px-4">
          {/* <Rating vote_average={vote_average!} /> */}

          <span className="font-bold text-[0.85rem] md:text-[1rem] mb-1 rounded min-h-[20px]">
            {title
              ? title.length < 25
                ? title
                : title.substring(0, 25) + " ..."
              : name!.length < 25
              ? name
              : name!.substring(0, 25) + " ..."}
          </span>

          <span className="text-[0.75rem] md:text-[0.85rem] text-[#555] font-medium rounded min-h-[20px]">
            {release_date && moment(release_date).format("Do MMM, YYYY")}
            {first_air_date && moment(first_air_date).format("Do MMM, YYYY")}
          </span>
        </div>
      </Link>
      <WatchlistBtn data={data} type={type} />
    </div>
  );
}
