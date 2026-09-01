import { useMemo, useState } from "react";
import TopNav from "./components/TopNav";
import Sidebar from "./components/Sidebar";
import FilterBar from "./components/FilterBar";
import Section from "./components/Section";
import { SnackbarProvider } from "./context/SnackbarContext";
import { classes, tutorials, type AgeCategory, type DifficultyLevel } from "./data/videos";

function SavedVideosPage() {
  const [selectedCategories, setSelectedCategories] = useState<AgeCategory[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | "All">("All");

  const toggleCategory = (category: AgeCategory) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((entry) => entry !== category) : [...prev, category]
    );
  };

  const filteredTutorials = useMemo(
    () =>
      tutorials.filter(
        (item) =>
          (selectedCategories.length === 0 || selectedCategories.includes(item.category)) &&
          (selectedDifficulty === "All" || item.difficulty === selectedDifficulty)
      ),
    [selectedCategories, selectedDifficulty]
  );

  const filteredClasses = useMemo(
    () => classes.filter((item) => selectedCategories.length === 0 || selectedCategories.includes(item.category)),
    [selectedCategories]
  );

  return (
    <div className="min-h-screen bg-background-grey">
      <TopNav />

      <div className="mx-auto flex w-full max-w-[1440px] items-start gap-10 px-6 py-8 lg:px-10">
        <Sidebar />

        <main className="flex min-w-0 flex-1 flex-col gap-10">
          <h1 className="font-izmir text-[32px] font-extrabold text-pbt-pink sm:text-[40px]">Saved Videos</h1>

          <FilterBar
            selectedCategories={selectedCategories}
            onToggleCategory={toggleCategory}
            selectedDifficulty={selectedDifficulty}
            onSelectDifficulty={setSelectedDifficulty}
          />

          <Section
            title="Tutorials"
            emptyMessage="No tutorials match your filters yet."
            items={filteredTutorials.map((item) => ({
              id: item.id,
              title: item.title,
              metaLines: [`${item.category} | ${item.focus}`],
              image: item.image,
              difficulty: item.difficulty,
            }))}
          />

          <Section
            title="Classes"
            emptyMessage="No classes match your filters yet."
            items={filteredClasses.map((item) => ({
              id: item.id,
              title: item.title,
              metaLines: [`${item.exercises} exercises`, `${item.category} | ${item.focus}`],
              image: item.image,
            }))}
          />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SnackbarProvider>
      <SavedVideosPage />
    </SnackbarProvider>
  );
}
