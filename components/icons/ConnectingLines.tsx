import { type SVGProps } from "react";

/**
 * Curved connecting line from left icon cards → right color pills (upper curve).
 * Gradient from transparent #D1E9FF → solid #B2DDFF.
 */
export function CurveLineUpper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 131.5 51.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 49.5h37.75c13.117 0 23.75-10.633 23.75-23.75S72.133 2 85.25 2L131.5 2"
        stroke="url(#curve-upper)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient id="curve-upper" x1="0" y1="25.75" x2="131" y2="25.75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D1E9FF" stopOpacity="0" />
          <stop offset="1" stopColor="#B2DDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Curved connecting line (lower, flipped vertically in usage).
 */
export function CurveLineLower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 132 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M0 46h39.5C51.65 46 61.5 36.15 61.5 24S71.35 2 83.5 2L132 2"
        stroke="url(#curve-lower)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient id="curve-lower" x1="0" y1="24" x2="130" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D1E9FF" stopOpacity="0" />
          <stop offset="1" stopColor="#B2DDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Vertical S-curve (tall) connecting the branching point → color pills.
 */
export function BranchLineTall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 54.001 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M54 2h-7c-11.046 0-20 8.954-20 19.999V68c0 11.046-8.955 20-20 20H0"
        stroke="url(#branch-tall)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient id="branch-tall" x1="0" y1="45" x2="54" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D1E9FF" stopOpacity="0" />
          <stop offset="1" stopColor="#B2DDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Short branch line (upper).
 */
export function BranchLineShortUpper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 54 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M54 2H36.063C31.057 2 27 6.057 27 11.063 27 22.074 18.074 31 7.063 31H0"
        stroke="url(#branch-short-upper)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient id="branch-short-upper" x1="0" y1="16.5" x2="54" y2="16.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D1E9FF" stopOpacity="0" />
          <stop offset="1" stopColor="#B2DDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Short branch line (lower, flipped vertically in usage).
 */
export function BranchLineShortLower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 54 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M54 2H36.063C31.057 2 27 6.057 27 11.063 27 22.074 18.074 31 7.063 31H0"
        stroke="url(#branch-short-lower)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient id="branch-short-lower" x1="0" y1="16.5" x2="54" y2="16.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D1E9FF" stopOpacity="0" />
          <stop offset="1" stopColor="#B2DDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Tall branch line (lower area, flipped vertically in usage).
 */
export function BranchLineTallLower(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 68 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M68 2H55c-11.046 0-20 8.954-20 20v47c0 11.046-8.954 20-20 20H0"
        stroke="url(#branch-tall-lower)"
        strokeWidth="4"
      />
      <defs>
        <linearGradient id="branch-tall-lower" x1="0" y1="45.5" x2="68" y2="45.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D1E9FF" stopOpacity="0" />
          <stop offset="1" stopColor="#B2DDFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
