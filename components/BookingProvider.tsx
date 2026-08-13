"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { siteConfig } from "@/lib/site";

type BookingContextValue = {
  open: boolean;
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-book-trigger]")) {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const value = useMemo(
    () => ({ open, openBooking, closeBooking }),
    [open, openBooking, closeBooking]
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      {open ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeBooking();
          }}
        >
          <div className="glass-card max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto bg-white border border-epsom-crystal/30">
            <button
              type="button"
              onClick={closeBooking}
              className="absolute top-4 right-4 text-epsom-muted hover:text-epsom-ink text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 id="booking-modal-title" className="font-display text-2xl text-epsom-ink">
              Choose Your Location
            </h2>
            <p className="text-epsom-muted text-sm mt-2">
              Select a branch to continue to our secure booking portal.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              {siteConfig.locations.map((loc) => (
                <a
                  key={loc.id}
                  href={loc.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-4 block"
                >
                  <p className="font-semibold text-epsom-ink">{loc.name}</p>
                  <p className="text-epsom-muted text-sm mt-1 line-clamp-2">{loc.address}</p>
                  <p className="text-epsom-maroon text-sm mt-2 font-medium">Continue to booking →</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </BookingContext.Provider>
  );
}
