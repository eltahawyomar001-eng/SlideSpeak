import { type SVGProps } from "react";

/**
 * Star icon with gradient stroke from Brand/600 (#1570EF) to Brand/500 (#2E90FA).
 * Used in the Benefits badge. Animation-ready with unique gradient ID.
 */
export function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14.84 14.83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8.57 1.713l1.173 2.366a1.24 1.24 0 0 0 .947.706l2.126.356c1.36.229 1.68 1.223.7 2.204l-1.653 1.667a1.24 1.24 0 0 0-.347 1.217l.473 2.063c.374 1.633-.486 2.265-1.92 1.411l-1.993-1.19a1.27 1.27 0 0 0-1.32 0l-1.993 1.19c-1.427.854-2.293.216-1.92-1.411l.474-2.063a1.24 1.24 0 0 0-.347-1.217L1.317 7.345c-.973-.981-.66-1.976.7-2.204l2.127-.357a1.24 1.24 0 0 0 .94-.706l1.173-2.365c.64-1.284 1.68-1.284 2.313 0z"
        stroke="url(#star-gradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="star-gradient"
          x1="0.751"
          y1="0.75"
          x2="14.085"
          y2="0.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1570EF" />
          <stop offset="1" stopColor="#2E90FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
