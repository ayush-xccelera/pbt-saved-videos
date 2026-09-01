import dotsIcon from "../assets/icons/dots.svg";
import nextArrow from "../assets/icons/next-arrow-circle.svg";
import { useSnackbar } from "../context/SnackbarContext";
import type { DifficultyLevel } from "../data/videos";

const DIFFICULTY_STYLES: Record<DifficultyLevel, string> = {
  Foundation: "bg-foundation-bg text-foundation-text",
  Medium: "bg-medium-bg text-medium-text",
  Difficult: "bg-difficult-bg text-difficult-text",
};

interface VideoCardProps {
  title: string;
  metaLines: string[];
  image: string;
  difficulty?: DifficultyLevel;
  showMoreIndicator?: boolean;
}

export default function VideoCard({ title, metaLines, image, difficulty, showMoreIndicator }: VideoCardProps) {
  const { notify } = useSnackbar();

  return (
    <button
      type="button"
      onClick={() => notify("Video player coming soon!")}
      className="group flex w-full flex-col overflow-hidden rounded-card bg-white text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative h-36 w-full shrink-0 overflow-hidden bg-grey-blue-accent">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <span
          role="button"
          tabIndex={0}
          onClick={(event) => {
            event.stopPropagation();
            notify("More options coming soon!");
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.stopPropagation();
              notify("More options coming soon!");
            }
          }}
          aria-label="More options"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow"
        >
          <img src={dotsIcon} alt="" className="h-[3px] w-[15px]" />
        </span>

        {showMoreIndicator && (
          <span
            role="button"
            tabIndex={0}
            onClick={(event) => {
              event.stopPropagation();
              notify();
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.stopPropagation();
                notify();
              }
            }}
            aria-label="See more"
            className="absolute bottom-2 right-2 h-10 w-10"
          >
            <img src={nextArrow} alt="" className="h-full w-full" />
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 px-4 py-3">
        <p className="text-[14px] font-semibold text-pbt-pink">{title}</p>
        {metaLines.map((line) => (
          <p key={line} className="text-[12px] font-medium text-muted-grey">
            {line}
          </p>
        ))}
        {difficulty && (
          <span
            className={`mt-1 w-fit rounded-full px-3 py-1 text-[12px] font-semibold ${DIFFICULTY_STYLES[difficulty]}`}
          >
            {difficulty}
          </span>
        )}
      </div>
    </button>
  );
}
