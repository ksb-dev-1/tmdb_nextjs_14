"use client";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import Link from "next/link";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = null;
  } else if (session.data?.user) {
    authContent = (
      <div className="p-4">
        <form action={actions.signOut}>
          <button type="submit" className="font-[500] mr-[2rem]">
            Sign Out
          </button>
        </form>
      </div>
    );
  } else {
    authContent = (
      <form action={actions.googleSignIn}>
        <button type="submit" className="font-[500] mr-[2rem]">
          Login
        </button>
      </form>
    );
  }

  return authContent;
}
