"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHandleHeaderScroll } from "@/app/hooks/useHandleHeaderScroll";
import { FaSearch } from "react-icons/fa";
import style from "./Header.module.css";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInnerRef = useRef<HTMLDivElement>(null);
  useHandleHeaderScroll(headerRef, headerInnerRef);

  return (
    <header ref={headerRef} className={style.header}>
      <div ref={headerInnerRef} className={style.header_inner}>
        <div className="flex items-center">
          <Link href="/" className={style.title}>
            TMDB
            <span className={style.span}></span>
          </Link>
          <p className="mr-[2rem] font-[500] cursor-pointer">Movies</p>
          <p className="font-[500] cursor-pointer">TV Shows</p>
        </div>

        <div className="flex items-center">
          {/* <Link href="#" className="font-[500] mr-[1rem]">
            Watchlist
          </Link> */}
          <Link href="#" className="font-[500] mr-[2rem]">
            Login
          </Link>
          <Link href="#" className="text-[var(--c2)] text-[1.25rem]">
            <FaSearch />
          </Link>
        </div>
      </div>
    </header>
  );
}
