"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState, useEffect, useMemo } from "react";
import { fetchWatchlist } from "@/lib/fetchWatchlist";
import * as actions from "@/actions";

export default function WatchlistBtn({
  id,
  mediaType,
}: {
  id: number;
  mediaType: string;
}) {
  const [watchlist, setwatchlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const memoizeWatchlist = useMemo(
    () => async () => {
      session.data?.user && fetchWatchlist().then((res) => setwatchlist(res));
    },
    [session]
  );

  useEffect(() => {
    memoizeWatchlist();
  }, [memoizeWatchlist]);

  const handleAdd = async () => {
    setLoading(true);
    const res = await actions.addWatchlist(id, mediaType);
    if (res.success) {
      fetchWatchlist().then((res) => {
        setLoading(false);
        setwatchlist(res);
      });
    } else {
      console.log(res);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    const res = await actions.deleteWatchlist(id, mediaType);
    if (res.success) {
      fetchWatchlist().then((res) => {
        setLoading(false);
        setwatchlist(res);
      });
    } else {
      console.log(res);
    }
  };

  return (
    <>
      {session.status === "loading" && (
        <button className="absolute bg-[rgba(0,0,0,0.75)] top-0 right-0 w-[35px] h-[35px] cursor-pointer rounded-[3px] hover:bg-[#000] transition ease">
          <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
            <span className="loader inline-block mt-[0.35rem]"></span>
          </span>
        </button>
      )}

      {session.status !== "loading" && !session.data?.user && (
        <Link
          href="/pages/login"
          className="absolute bg-[rgba(0,0,0,0.75)] top-0 right-0 w-[35px] h-[35px] cursor-pointer rounded-[3px] hover:bg-[#000] transition ease"
          aria-label="add to watchlist icon"
        >
          <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
            <IoMdAdd />
          </span>
        </Link>
      )}

      {/* ADD-BUTTON */}
      {session.status !== "loading" &&
        session.data?.user &&
        watchlist.length === 0 && (
          <button
            onClick={handleAdd}
            type="submit"
            className="absolute bg-[rgba(0,0,0,0.75)] top-0 right-0 w-[35px] h-[35px] cursor-pointer rounded-[3px] hover:bg-[#000] transition ease"
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              {loading ? (
                <span className="loader inline-block mt-[0.35rem]"></span>
              ) : (
                <IoMdAdd />
              )}
            </span>
          </button>
        )}

      {/* ADD-BUTTON */}
      {session.status !== "loading" &&
        session.data?.user &&
        watchlist.length > 0 &&
        watchlist.every((item: any) => item.cardId !== String(id)) && (
          <button
            key={id}
            onClick={handleAdd}
            type="submit"
            className="absolute bg-[rgba(0,0,0,0.75)] top-0 right-0 w-[35px] h-[35px] cursor-pointer rounded-[3px] hover:bg-[#000] transition ease"
          >
            <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
              {loading ? (
                <span className="loader inline-block mt-[0.35rem]"></span>
              ) : (
                <IoMdAdd />
              )}
            </span>
          </button>
        )}

      {/* DELETE-BUTTON */}
      {session.status !== "loading" &&
        session.data?.user &&
        watchlist &&
        watchlist.length > 0 &&
        watchlist.map((item: any, index) => {
          if (item.cardId === String(id)) {
            return (
              <button
                key={id}
                onClick={handleDelete}
                type="submit"
                className="absolute bg-[rgba(0,0,0,0.75)] top-0 right-0 w-[35px] h-[35px] cursor-pointer rounded-[3px] hover:bg-[#000] transition ease"
              >
                <span className="absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 text-white text-[1.25rem]">
                  {loading ? (
                    <span className="loader inline-block mt-[0.35rem]"></span>
                  ) : (
                    <RiDeleteBin6Line />
                  )}
                </span>
              </button>
            );
          }
        })}
    </>
  );
}
