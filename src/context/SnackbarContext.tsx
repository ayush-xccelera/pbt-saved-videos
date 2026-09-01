import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

interface SnackbarContextValue {
  notify: (message?: string) => void;
}

const SnackbarContext = createContext<SnackbarContextValue | null>(null);

const DEFAULT_MESSAGE = "Coming soon! We're still building this.";
const AUTO_DISMISS_MS = 2800;

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const notify = useCallback((msg: string = DEFAULT_MESSAGE) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setMessage(msg);
    setVisible(true);
    timeoutRef.current = window.setTimeout(() => setVisible(false), AUTO_DISMISS_MS);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <SnackbarContext.Provider value={{ notify }}>
      {children}

      <div
        aria-live="polite"
        className={`pointer-events-none fixed inset-x-0 bottom-8 z-50 flex justify-center px-4 transition-all duration-300 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
      >
        <div className="pointer-events-auto flex items-center gap-3 rounded-full bg-[#3a2230] py-3 pl-4 pr-6 shadow-xl shadow-black/25">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-pbt-pink">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.8" />
              <path d="M12 7.5V12L15 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="font-izmir text-sm font-medium text-white">{message}</p>
        </div>
      </div>
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  const ctx = useContext(SnackbarContext);
  if (!ctx) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return ctx;
}
