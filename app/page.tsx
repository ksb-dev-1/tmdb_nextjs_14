import { Suspense } from "react";

// components
import Carousel from "@/components/Carousel/Carousel";
import Trending from "@/components/Trending/Trending";
import { CarouselSkeleton, MediaSkeleton } from "@/ui/skeletons";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Suspense fallback={<CarouselSkeleton />}>
        <Carousel />
      </Suspense>
      <Suspense fallback={<MediaSkeleton />}>
        <Trending />
      </Suspense>
    </div>
  );
}
