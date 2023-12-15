"use client";

import { useRef } from "react";
import Link from "next/link";
import { useHandleHeaderScroll } from "@/src/hooks/useHandleHeaderScroll";
import { FaSearch } from "react-icons/fa";
import style from "./Header.module.css";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInnerRef = useRef<HTMLDivElement>(null);
  useHandleHeaderScroll(headerRef, headerInnerRef);

  return (
    <header
      ref={headerRef}
      className="fixed max-w-[100vw] z-[2] text-white h-16 flex items-center justify-center translate-y-[0%] transition-transform duration-[0.5s] ease-[ease] p-0 top-0 inset-x-0 bg-[var(--c3)]"
    >
      <div
        ref={headerInnerRef}
        className="max-w-screen-xl w-full flex items-center justify-between translate-y-[0%] transition-transform duration-[0.3s] ease-[ease] px-8 py-0"
      >
        <div className="flex items-center">
          <Link
            href="/"
            className={`${style.title} text-[1.75rem] font-bold flex items-center no-underline rounded-[var(--border-radius-1)] tracking-[1px] mr-8`}
          >
            TMDB
            <span className="inline-block w-[55px] h-5 ml-2 mt-1 rounded-[50px] bg-[var(--c2)]"></span>
          </Link>
          <p className="mr-[2rem] font-[500] cursor-pointer">Movies</p>
          <p className="font-[500] cursor-pointer">TV Shows</p>
        </div>

        <div className="flex items-center">
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
