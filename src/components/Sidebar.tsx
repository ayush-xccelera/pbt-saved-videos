import ProfileCard from "./ProfileCard";
import { useSnackbar } from "../context/SnackbarContext";
import navCalendar from "../assets/icons/nav-calendar.svg";
import navClasses from "../assets/icons/nav-classes.svg";
import navCurriculum from "../assets/icons/nav-curriculum.svg";
import navTutorials from "../assets/icons/nav-tutorials.svg";
import navSavedVideosActive from "../assets/icons/nav-saved-videos-active.svg";
import navMyJourney from "../assets/icons/nav-my-journey.svg";
import navFaq from "../assets/icons/nav-faq.svg";

function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="8.5" height="8.5" rx="2" fill="#6D7B87" />
      <rect x="11.5" y="0" width="8.5" height="8.5" rx="2" fill="#6D7B87" />
      <rect x="0" y="11.5" width="8.5" height="8.5" rx="2" fill="#6D7B87" />
      <rect x="11.5" y="11.5" width="8.5" height="8.5" rx="2" fill="#6D7B87" />
    </svg>
  );
}

interface NavItem {
  label: string;
  icon?: string;
  custom?: boolean;
  active?: boolean;
  href?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", custom: true },
  { label: "Calendar", icon: navCalendar },
  {
    label: "Classes",
    icon: navClasses,
    href: "https://pbt.dance/en/training-portal/pbt/classes/pbt-sub-junior",
  },
  { label: "PBT Curriculum", icon: navCurriculum },
  {
    label: "Tutorials",
    icon: navTutorials,
    href: "https://pbt.dance/en/training-portal/pbt/tutorials/pbt-sub-junior",
  },
  { label: "Saved Videos", icon: navSavedVideosActive, active: true },
  { label: "My Journey", icon: navMyJourney },
  { label: "FAQ", icon: navFaq },
];

export default function Sidebar() {
  const { notify } = useSnackbar();

  return (
    <aside className="hidden w-[253px] shrink-0 flex-col gap-6 py-8 lg:flex">
      <ProfileCard />

      <nav className="flex flex-col gap-1.5">
        {NAV_ITEMS.map((item) => {
          const className = `flex items-center gap-4 rounded-md px-3 py-2 text-left text-[16px] font-medium transition ${
            item.active
              ? "bg-grey-blue-accent text-dark-grey-blue"
              : "text-dark-grey-blue hover:bg-grey-blue-accent/60"
          }`;
          const content = (
            <>
              <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                {item.custom ? (
                  <DashboardIcon />
                ) : (
                  <img src={item.icon} alt="" className="h-full w-full object-contain" />
                )}
              </span>
              {item.label}
            </>
          );

          return item.href ? (
            <a key={item.label} href={item.href} className={className}>
              {content}
            </a>
          ) : (
            <button
              key={item.label}
              type="button"
              onClick={() => !item.active && notify()}
              aria-current={item.active ? "page" : undefined}
              className={className}
            >
              {content}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
