"use client";

import { useRef } from "react";

import Link from "next/link";

// hooks
import { useHandleHeaderScroll } from "@/app/hooks/useHandleHeaderScroll";

// style
import style from "./Header.module.css";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInnerRef = useRef<HTMLDivElement>(null);
  useHandleHeaderScroll(headerRef, headerInnerRef);

  return (
    <header ref={headerRef} className={style.header}>
      <div ref={headerInnerRef} className={style.header_inner}>
        <div>
          <Link href="/" className={style.title}>
            TMDB
            <span className={style.span}></span>
          </Link>
        </div>
      </div>
    </header>
  );
}
