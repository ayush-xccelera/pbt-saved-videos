import avatar from "../assets/images/avatar.png";
import { useSnackbar } from "../context/SnackbarContext";

export default function ProfileCard() {
  const { notify } = useSnackbar();

  return (
    <div className="flex flex-col items-center gap-3 rounded-[10px] bg-grey-blue-accent px-4 py-4">
      <p className="text-[16px] font-semibold text-[#575757]">Friday, 31st January</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt="Profile" className="h-11 w-11 rounded-full object-cover" />
        <button
          type="button"
          onClick={() => notify()}
          className="whitespace-nowrap rounded-full bg-pbt-pink px-4 py-2 text-xs font-medium text-white transition hover:bg-pbt-pink/90"
        >
          Resume Training
        </button>
      </div>
    </div>
  );
}
