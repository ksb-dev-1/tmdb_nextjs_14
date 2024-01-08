import Image from "next/image";
import getBase64 from "@/lib/getLocalBase64";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const IMG_PATH = "https://image.tmdb.org/t/p/w342";

export default async function Poster({
  poster_path,
  name,
  title,
}: {
  poster_path: string;
  name: string;
  title: string;
}) {
  const myBlurDataUrl = await getBase64(
    poster_path === null ? url : IMG_PATH + poster_path
  );

  return (
    <div className="relative overflow-hidden h-[225px] md:h-[250px] rounded-tl-[var(--border-radius-1)] rounded-tr-[var(--border-radius-1)]">
      <Image
        src={poster_path === null ? url : IMG_PATH + poster_path}
        blurDataURL={myBlurDataUrl}
        placeholder="blur"
        alt={name ? name! : title!}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="group-hover:scale-125 transition duration-300 object-cover"
      />
    </div>
  );
}
