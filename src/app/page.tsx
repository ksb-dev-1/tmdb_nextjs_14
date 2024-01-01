import { Suspense } from "react";

// components
import Welcome from "../components/Welcome/Welcome";
import Trending from "../components/Trending/Trending";
import { WelcomeSkeleton, MediaSkeleton } from "../ui/skeletons";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Suspense fallback={<WelcomeSkeleton />}>
        <Welcome />
      </Suspense>
      <Suspense fallback={<MediaSkeleton />}>
        <Trending />
      </Suspense>
      {/* <Trending /> */}
    </div>
  );
}
