"use client";

import { useState, useEffect, useRef } from "react";

// lib
import { getTrending } from "@/lib/getTrending";

// components
import MediaCard from "../MediaCard/MediaCard";
import { MediaSkeleton } from "@/ui/skeletons";

export default function Trending() {
  const [today, setToday] = useState<boolean>(true);
  const [trending, setTrending] = useState<MediaCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const switchRef1 = useRef<HTMLSpanElement>(null);
  const switchRef2 = useRef<HTMLSpanElement>(null);

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
      switchRef1.current!.style.transform = "translateX(92px)";
      switchRef2.current!.style.transform = "translateX(65px)";
      setToday(false);
    } else {
      switchRef1.current!.style.transform = "translateX(-2px)";
      switchRef2.current!.style.transform = "translateX(-1px)";
      setToday(true);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto px-[1rem] lg:px-0">
      <div className="mt-[2rem] sm:mt-[3rem] flex items-center">
        <p className="text-lg sm:text-xl font-bold">Trending</p>
        <div
          className="relative w-[200.5px] ml-[1rem] hidden sm:flex items-center bg-[var(--c3)] text-white p-[0.35rem] rounded-[50px] cursor-pointer"
          onClick={switchTrending}
        >
          <span className="w-[100px] text-center font-[500]">Today</span>
          <span className="w-[100px] text-center font-[500]">Weekly</span>
          <span
            className="absolute bg-white text-[var(--c3)] font-[500] rounded-[50px] w-[100px] text-center translate-x-[-2px] transition p-[0.1rem]"
            ref={switchRef1}
          >
            {today ? "Today" : "Weekly"}
          </span>
        </div>
        <div
          className="relative w-[150.5px] ml-[0.5rem] flex sm:hidden items-center bg-[var(--c3)] text-white p-[0.35rem] rounded-[50px] cursor-pointer"
          onClick={switchTrending}
        >
          <span className="w-[75px] text-center font-[500] text-[0.85rem]">
            Today
          </span>
          <span className="w-[75px] text-center font-[500] text-[0.85rem]">
            Weekly
          </span>
          <span
            className="absolute bg-white text-[var(--c3)] font-[500] text-[0.85rem] rounded-[50px] w-[75px] text-center translate-x-[-2px] transition p-[0.1rem]"
            ref={switchRef2}
          >
            {today ? "Today" : "Weekly"}
          </span>
        </div>
      </div>

      {loading && <MediaSkeleton />}

      {!loading && !error && (
        <div className="mt-[2rem] sm:mt-[3rem] grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] items-stretch gap-[2rem_1rem] sm:gap-[4rem_2rem]">
          {trending.map((media: MediaCard) => (
            <MediaCard media={media} key={media.id} />
          ))}
        </div>
      )}
    </div>
  );
}
