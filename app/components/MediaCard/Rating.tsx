"use client";

import { Circle } from "rc-progress";

// style
import style from "./MediaCard.module.css";

export default function Rating({ vote_average }: any) {
  const getBg = (vote_average: any) => {
    return vote_average < 5
      ? "tomato"
      : vote_average >= 7.5
      ? "#4fcc4f"
      : "goldenrod";
  };

  return (
    <div className={style.progress_bar}>
      <Circle
        percent={vote_average * 10}
        strokeWidth={6}
        strokeColor={`${getBg(vote_average.toFixed(0))}`}
      />
      <span className={`${style.percent} ${getBg(vote_average.toFixed(0))}`}>
        {vote_average.toFixed(1)}
      </span>
    </div>
  );
}
