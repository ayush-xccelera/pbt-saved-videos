import logoWhite from "../assets/images/logo-white.png";
import globeIcon from "../assets/icons/globe.svg";
import hamburgerIcon from "../assets/icons/hamburger.svg";
import dropdownArrow from "../assets/icons/dropdown-arrow-small.svg";
import avatar from "../assets/images/avatar.png";
import { useSnackbar } from "../context/SnackbarContext";

const NAV_LINKS = ["Discover PBT Online", "PBT Workshops", "Shop"];

export default function TopNav() {
  const { notify } = useSnackbar();

  return (
    <header className="sticky top-0 z-30 flex h-[66px] w-full items-center justify-between bg-pbt-pink px-6 lg:px-10">
      <button type="button" onClick={() => notify()} aria-label="PBT home" className="flex items-center">
        <img src={logoWhite} alt="PBT" className="h-7 w-auto" />
      </button>

      <nav className="hidden items-center gap-8 md:flex">
        <button
          type="button"
          onClick={() => notify()}
          className="flex items-center gap-2 rounded-full border border-white px-5 py-1.5 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          Training Portal
          <img src={dropdownArrow} alt="" className="h-[5px] w-[10px]" />
        </button>
        {NAV_LINKS.map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => notify()}
            className="text-sm font-semibold text-white transition hover:text-white/80"
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-5 lg:gap-6">
        <button type="button" onClick={() => notify()} aria-label="Language">
          <img src={globeIcon} alt="" className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => notify()}
          aria-label="Profile"
          className="h-9 w-9 overflow-hidden rounded-full ring-2 ring-white/40"
        >
          <img src={avatar} alt="Profile" className="h-full w-full object-cover" />
        </button>
        <button type="button" onClick={() => notify()} aria-label="Menu">
          <img src={hamburgerIcon} alt="" className="h-5 w-6" />
        </button>
      </div>
    </header>
  );
}
