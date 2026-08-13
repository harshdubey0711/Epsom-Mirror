"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center px-4 bg-[#FAF0D9] text-[#2A2118]">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-semibold">Something went wrong</h1>
          <p className="mt-4 text-sm opacity-80">Please try again or contact us directly.</p>
          <p className="sr-only">{error.message}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex px-6 py-3 rounded-full bg-[#D39645] text-white font-semibold text-sm"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
