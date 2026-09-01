import { useEffect, useRef, useState } from "react";
import filterIcon from "../assets/icons/filter.svg";
import dropdownCaret from "../assets/icons/dropdown-caret.svg";
import { AGE_CATEGORIES, DIFFICULTY_LEVELS, type AgeCategory, type DifficultyLevel } from "../data/videos";
import { useSnackbar } from "../context/SnackbarContext";

interface FilterBarProps {
  selectedCategories: AgeCategory[];
  onToggleCategory: (category: AgeCategory) => void;
  selectedDifficulty: DifficultyLevel | "All";
  onSelectDifficulty: (difficulty: DifficultyLevel | "All") => void;
}

export default function FilterBar({
  selectedCategories,
  onToggleCategory,
  selectedDifficulty,
  onSelectDifficulty,
}: FilterBarProps) {
  const [difficultyOpen, setDifficultyOpen] = useState(false);
  const { notify } = useSnackbar();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!difficultyOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDifficultyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [difficultyOpen]);

  return (
    <div className="flex flex-wrap items-center gap-3">
      {AGE_CATEGORIES.map((category) => {
        const active = selectedCategories.includes(category);
        return (
          <button
            key={category}
            type="button"
            onClick={() => onToggleCategory(category)}
            aria-pressed={active}
            className={`rounded-lg px-5 py-[13px] text-[16px] font-semibold transition ${
              active ? "bg-pbt-pink text-white" : "bg-pbt-pink-light text-pbt-pink hover:bg-pbt-pink/10"
            }`}
          >
            {category}
          </button>
        );
      })}

      <div className="relative" ref={menuRef}>
        <button
          type="button"
          onClick={() => setDifficultyOpen((open) => !open)}
          aria-haspopup="listbox"
          aria-expanded={difficultyOpen}
          className="flex h-[45px] items-center gap-3 rounded-full bg-pbt-pink px-5 text-[16px] font-semibold text-white transition hover:bg-pbt-pink/90"
        >
          {selectedDifficulty === "All" ? "All Difficulties" : selectedDifficulty}
          <img
            src={dropdownCaret}
            alt=""
            className={`h-4 w-2 rotate-90 transition-transform duration-200 ${difficultyOpen ? "-rotate-90" : ""}`}
          />
        </button>

        {difficultyOpen && (
          <div
            role="listbox"
            className="absolute right-0 top-[52px] z-20 w-48 overflow-hidden rounded-xl bg-white py-2 shadow-lg ring-1 ring-black/5"
          >
            {(["All", ...DIFFICULTY_LEVELS] as const).map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={selectedDifficulty === option}
                onClick={() => {
                  onSelectDifficulty(option);
                  setDifficultyOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-sm font-medium transition hover:bg-pbt-pink-light ${
                  selectedDifficulty === option ? "text-pbt-pink" : "text-dark-grey-blue"
                }`}
              >
                {option === "All" ? "All Difficulties" : option}
              </button>
            ))}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => notify("More filters coming soon!")}
        aria-label="More filters"
        className="flex h-[47px] w-[53px] items-center justify-center rounded-[10px] bg-pbt-pink-light transition hover:bg-pbt-pink/10"
      >
        <img src={filterIcon} alt="" className="h-[22px] w-[22px]" />
      </button>
    </div>
  );
}
