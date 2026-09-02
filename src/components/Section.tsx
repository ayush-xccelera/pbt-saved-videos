import { useEffect, useRef, useState } from "react";
import nextArrow from "../assets/icons/next-arrow-circle.svg";
import VideoCard from "./VideoCard";
import type { DifficultyLevel } from "../data/videos";

interface SectionItem {
  id: string;
  title: string;
  metaLines: string[];
  image: string;
  difficulty?: DifficultyLevel;
}

interface SectionProps {
  title: string;
  items: SectionItem[];
  emptyMessage: string;
  viewAllHref: string;
}

export default function Section({ title, items, emptyMessage, viewAllHref }: SectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canSlideForward, setCanSlideForward] = useState(false);

  const updateSlideButton = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setCanSlideForward(carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth - 2);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollTo({ left: 0 });
    updateSlideButton();
    window.addEventListener("resize", updateSlideButton);
    return () => window.removeEventListener("resize", updateSlideButton);
  }, [items]);

  const slideForward = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    carousel.scrollBy({ left: carousel.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-end justify-between">
        <h2 className="font-izmir text-[28px] font-bold text-pbt-pink sm:text-[32px]">{title}</h2>
        <a
          href={viewAllHref}
          className="text-[16px] font-normal text-pbt-pink underline underline-offset-2 transition hover:text-pbt-pink/80"
        >
          View All
        </a>
      </div>

      {items.length === 0 ? (
        <div className="flex h-[160px] items-center justify-center rounded-card bg-white text-sm font-medium text-muted-grey shadow-card">
          {emptyMessage}
        </div>
      ) : (
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={updateSlideButton}
            className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-1"
            aria-label={`${title} carousel`}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="w-full shrink-0 snap-start sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-60px)/4)]"
              >
                <VideoCard
                  title={item.title}
                  metaLines={item.metaLines}
                  image={item.image}
                  difficulty={item.difficulty}
                />
              </div>
            ))}
          </div>

          {canSlideForward && (
            <button
              type="button"
              onClick={slideForward}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pbt-pink focus:ring-offset-2"
              aria-label={`Show more ${title.toLowerCase()}`}
            >
              <img src={nextArrow} alt="" className="h-10 w-10" />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
