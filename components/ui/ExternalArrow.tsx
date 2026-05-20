/** Thin arrow pointing up-right — external link style */
export function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`inline-block shrink-0 ${className}`}
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 9.75L9.75 1.25M9.75 1.25H4.75M9.75 1.25V6.25"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
