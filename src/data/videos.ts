import tutorial1 from "../assets/images/tutorial-1.png";
import tutorial2 from "../assets/images/tutorial-2.png";
import tutorial3 from "../assets/images/tutorial-3.png";
import tutorial4 from "../assets/images/tutorial-4.png";
import class1 from "../assets/images/class-1.png";
import class2 from "../assets/images/class-2.png";
import class3 from "../assets/images/class-3.png";
import class4 from "../assets/images/class-4.png";

export type AgeCategory = "Sub Junior" | "Junior" | "Senior" | "Advanced" | "Adult";
export type DifficultyLevel = "Foundation" | "Medium" | "Difficult";

export interface TutorialVideo {
  id: string;
  title: string;
  category: AgeCategory;
  focus: string;
  difficulty: DifficultyLevel;
  image: string;
}

export interface ClassVideo {
  id: string;
  title: string;
  exercises: number;
  category: AgeCategory;
  focus: string;
  image: string;
}

export const AGE_CATEGORIES: AgeCategory[] = ["Sub Junior", "Junior", "Senior", "Advanced", "Adult"];
export const DIFFICULTY_LEVELS: DifficultyLevel[] = ["Foundation", "Medium", "Difficult"];

// The first four entries in each list match the Figma design exactly.
// Additional saved videos keep every carousel at eight cards and ensure the
// category filters have something to show for every pill.
export const tutorials: TutorialVideo[] = [
  { id: "t1", title: "Feet & Leg Combination", category: "Senior", focus: "Feet & Allegro", difficulty: "Difficult", image: tutorial1 },
  { id: "t2", title: "Frog Legs", category: "Junior", focus: "Feet & Allegro", difficulty: "Medium", image: tutorial2 },
  { id: "t3", title: "Jeté & Jeté Battu", category: "Sub Junior", focus: "Feet & Allegro", difficulty: "Foundation", image: tutorial3 },
  { id: "t4", title: "Feet & Leg Combination", category: "Senior", focus: "Feet & Allegro", difficulty: "Foundation", image: tutorial4 },
  { id: "t5", title: "Advanced Petit Allegro", category: "Advanced", focus: "Feet & Allegro", difficulty: "Difficult", image: tutorial1 },
  { id: "t6", title: "Adult Barre Warm Up", category: "Adult", focus: "Barre Basics", difficulty: "Foundation", image: tutorial2 },
  { id: "t7", title: "Frog Legs", category: "Junior", focus: "Feet & Allegro", difficulty: "Medium", image: tutorial2 },
  { id: "t8", title: "Jeté & Jeté Battu", category: "Sub Junior", focus: "Feet & Allegro", difficulty: "Foundation", image: tutorial3 },
];

export const classes: ClassVideo[] = [
  { id: "c1", title: "Class 1", exercises: 10, category: "Senior", focus: "15min Fusion Ball Class", image: class1 },
  { id: "c2", title: "Class 2", exercises: 10, category: "Junior", focus: "Full Class", image: class2 },
  { id: "c3", title: "Class 3", exercises: 10, category: "Sub Junior", focus: "Warm up Class", image: class3 },
  { id: "c4", title: "Class 4", exercises: 10, category: "Junior", focus: "Warm Up Class", image: class4 },
  { id: "c5", title: "Class 5", exercises: 12, category: "Advanced", focus: "Full Class", image: class1 },
  { id: "c6", title: "Class 6", exercises: 8, category: "Adult", focus: "Warm up Class", image: class2 },
  { id: "c7", title: "Class 2", exercises: 10, category: "Junior", focus: "Full Class", image: class2 },
  { id: "c8", title: "Class 3", exercises: 10, category: "Sub Junior", focus: "Warm up Class", image: class3 },
];
