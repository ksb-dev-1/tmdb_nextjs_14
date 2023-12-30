"use client";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { revalidatePath } from "next/cache";

export default function LoginButtons() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      revalidatePath("/");
      redirect("/");
    }
  }, [session]);

  return (
    <div className="text-white mt-[2rem]">
      <form action={actions.githubSignIn}>
        <button
          type="submit"
          className="font-[500] flex items-center w-max bg-black p-1 pr-[1rem] rounded mb-[0.5rem] hover:bg-[#333] transition"
        >
          <span className="text-black bg-white p-1 text-3xl rounded mr-[1rem]">
            <BsGithub />
          </span>
          <span className="text-lg">Login with GitHub</span>
        </button>
      </form>
      <form action={actions.googleSignIn}>
        <button
          type="submit"
          className="font-[500] flex items-center w-max bg-[#4285F4] p-1 pr-[1rem] rounded hover:bg-[#5c9bff] transition"
        >
          <span className="bg-white p-1 text-3xl rounded mr-[1rem]">
            <FcGoogle />
          </span>
          <span className="text-lg">Login with Google</span>
        </button>
      </form>
    </div>
  );
}
