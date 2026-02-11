import { type SVGProps } from "react";

/**
 * Checkmark icon with Success/600 (#039855) stroke.
 * Used in the color consistency illustration (correct slide badge).
 */
export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 8.667"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M11.333.667L4 8 .667 4.667"
        stroke="#039855"
        strokeWidth="1.333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
