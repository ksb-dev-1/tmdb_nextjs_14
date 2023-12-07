"use client";

import { useState, useEffect, useRef } from "react";

// lib
import { getTrending } from "@/app/lib/getTrending";

// components
import MediaCard from "../MediaCard/MediaCard";
import { MediaSkeleton } from "@/app/ui/skeletons";

export default function Trending() {
  const [today, setToday] = useState<boolean>(true);
  const [trending, setTrending] = useState<MediaCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const switchRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    setLoading(true);

    getTrending(`${today ? "day" : "week"}`)
      .then((res) => {
        setTrending(res.results);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError("Failed to fetch data!, 404");
      });
  }, [today]);

  const switchTrending = () => {
    if (today) {
      switchRef.current!.style.transform = "translateX(72px)";
      setToday(false);
    } else {
      switchRef.current!.style.transform = "translateX(0px)";
      setToday(true);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="mt-[2rem] flex items-center">
        <p className="text-xl font-semibold">Trending</p>
        <div
          className="relative w-[160.5px] ml-[1rem] flex items-center bg-[var(--c3)] text-white p-[0.25rem] rounded-[50px] cursor-pointer"
          onClick={switchTrending}
        >
          <span className="w-[80px] text-center font-[500]">Today</span>
          <span className="w-[80px] text-center font-[500]">Weekly</span>
          <span
            className="absolute bg-white text-black font-[500] rounded-[50px] w-[80px] text-center translate-x-[0px] transition"
            ref={switchRef}
          >
            {today ? "Today" : "Weekly"}
          </span>
        </div>
      </div>

      {loading && <MediaSkeleton />}

      {!loading && !error && (
        <div className="mt-[2rem] grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] items-stretch gap-[4rem_2rem]">
          {trending.map((media: any, index: number) => (
            <MediaCard media={media} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}
