import { useSnackbar } from "../context/SnackbarContext";
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
}

export default function Section({ title, items, emptyMessage }: SectionProps) {
  const { notify } = useSnackbar();
  const visible = items.slice(0, 4);

  return (
    <section className="flex flex-col gap-5">
      <div className="flex items-end justify-between">
        <h2 className="font-izmir text-[28px] font-bold text-pbt-pink sm:text-[32px]">{title}</h2>
        <button
          type="button"
          onClick={() => notify()}
          className="text-[16px] font-normal text-pbt-pink underline underline-offset-2 transition hover:text-pbt-pink/80"
        >
          View All
        </button>
      </div>

      {visible.length === 0 ? (
        <div className="flex h-[160px] items-center justify-center rounded-card bg-white text-sm font-medium text-muted-grey shadow-card">
          {emptyMessage}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item, index) => (
            <VideoCard
              key={item.id}
              title={item.title}
              metaLines={item.metaLines}
              image={item.image}
              difficulty={item.difficulty}
              showMoreIndicator={index === visible.length - 1 && items.length > 4}
            />
          ))}
        </div>
      )}
    </section>
  );
}
