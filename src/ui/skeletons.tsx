export function WelcomeSkeleton() {
  return (
    <div className="skeleton relative max-w-[1280px] h-[250px] sm:h-[350px] rounded-b-[3px]"></div>
  );
}

export function MediaSkeleton() {
  return (
    <div className="mt-[2rem] max-w-[1000px] mx-auto">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(150px,1fr))] items-stretch gap-[2rem_1rem] sm:gap-[4rem_2rem]">
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
        <div className="skeleton relative min-h-[250px] rounded-[3px]"></div>
      </div>
    </div>
  );
}
