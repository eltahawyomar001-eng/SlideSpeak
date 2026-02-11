import { type SVGProps } from "react";

/**
 * X-close icon with Rosé/600 (#E31B54) stroke.
 * Used in the color consistency illustration (incorrect slide badge).
 */
export function XCloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 9.333 9.333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8.667.667L.667 8.667M.667.667l8 8"
        stroke="#E31B54"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
