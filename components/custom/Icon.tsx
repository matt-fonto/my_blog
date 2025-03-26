"use client";

export function Icon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        {/* your SVG paths here */}
      </svg>
    </div>
  );
}
