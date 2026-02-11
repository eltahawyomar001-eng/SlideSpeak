"use client";

import { useRef, useState, useEffect } from "react";
import { CheckIcon } from "@/components/icons/CheckIcon";
import { XCloseIcon } from "@/components/icons/XCloseIcon";
import { SlideSpeakMark } from "@/components/icons/SlideSpeakMark";

/**
 * Color Consistency Illustration — right card.
 *
 * Shows two slide-preview documents side by side:
 * - Left: Inconsistent design (random bright colors, X badge)
 * - Right: Consistent branded design (muted blues, check badge)
 *
 * Responsive: scales down proportionally on smaller screens
 * using ResizeObserver + CSS transform.
 */
export function ColorConsistencyIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setScale(Math.min(width / 532, 1));
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[532px] mx-auto overflow-hidden"
      style={{ height: 270 * scale }}
      role="img"
      aria-label="Color consistency illustration comparing inconsistent and branded slide designs"
    >
      <div
        className="absolute top-0 left-0 w-[532px] h-[270px] origin-top-left"
        style={{ transform: `scale(${scale})` }}
      >
      {/* RIGHT SLIDE (consistent, with check badge) */}
      <div className="absolute right-[8px] top-[calc(50%+0.09px)] -translate-y-1/2 flex flex-col items-start rounded-[14px] bg-[rgba(255,255,255,0.1)] p-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="relative h-[138.181px] w-[242px] shrink-0 rounded-[10px] border-[0.261px] border-solid border-[#f2f4f7] bg-white shadow-[0px_0.261px_0.783px_0px_rgba(16,24,40,0.1),0px_0.261px_0.522px_0px_rgba(16,24,40,0.06)]">
          {/* Logo mark */}
          <div className="absolute left-[14.74px] top-[14.33px] flex items-center gap-[5.333px]">
            <div className="relative size-[16px] shrink-0">
              <SlideSpeakMark className="block size-full" />
            </div>
          </div>

          {/* Skeleton text lines */}
          <div className="absolute left-[14.36px] top-[50.19px] flex w-[68.335px] flex-col gap-[8.773px] items-start">
            <SkeletonBar className="h-[6px] w-[68px] bg-[#1e1d2c]" />
            <div className="flex w-full flex-col gap-[5.118px] items-start">
              <SkeletonBar className="h-[4.178px] w-full bg-[#f6f7f9]" />
              <SkeletonBar className="h-[4.178px] w-[51.25px] bg-[#f6f7f9]" />
              <SkeletonBar className="h-[4.178px] w-full bg-[#f6f7f9]" />
              <SkeletonBar className="h-[4.178px] w-full bg-[#f6f7f9]" />
              <SkeletonBar className="h-[4.178px] w-full bg-[#f6f7f9]" />
            </div>
          </div>

          {/* Consistent color blocks (muted blues) */}
          <div className="absolute left-[125.49px] top-[14.36px] size-[48.254px] rounded-[5.455px] bg-[#c6d2ff] opacity-[0.51]" />
          <div className="absolute left-[125.49px] top-[68.46px] size-[48.254px] rounded-[5.455px] bg-[#c6d2ff] opacity-[0.51]" />
          <div className="absolute left-[179.59px] top-[14.36px] size-[48.254px] rounded-[5.455px] bg-[#c6d2ff] opacity-[0.51]" />
          <div className="absolute left-[179.59px] top-[68.46px] size-[48.254px] rounded-[5.455px] bg-[#c6d2ff] opacity-[0.51]" />

          {/* Check badge */}
          <div className="absolute right-[-4.26px] top-[-8.67px] flex items-center rounded-[32px] bg-[#ecfdf3] p-[8px] shadow-[0px_4px_8px_0px_rgba(16,24,40,0.1),0px_2px_4px_0px_rgba(16,24,40,0.06)]">
            <div className="size-[16px] overflow-hidden shrink-0 relative">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-[25%]">
                <CheckIcon className="block size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LEFT SLIDE (inconsistent, with X badge) */}
      <div className="absolute left-0 top-[calc(50%+0.09px)] -translate-y-1/2 flex flex-col gap-[5.878px] items-start rounded-[14px] bg-[rgba(255,255,255,0.1)] p-[4px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.1)]">
        <div className="relative h-[138.181px] w-[242px] shrink-0 rounded-[10px] border-[0.261px] border-solid border-[#f2f4f7] bg-white shadow-[0px_0px_4px_0px_rgba(16,24,40,0.1),0px_0.261px_0.522px_0px_rgba(16,24,40,0.06)]">
          {/* Title skeleton bar */}
          <div className="absolute left-[14.36px] top-[14.36px] h-[9.505px] w-[91.39px] rounded-[47.754px] bg-[#1e1d2c]">
            <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.249px_0.497px_0px_rgba(0,0,0,0.08)]" />
          </div>

          {/* Skeleton text lines */}
          <div className="absolute left-[14.36px] top-[50.19px] flex w-[68.335px] flex-col gap-[8.773px] items-start">
            <SkeletonBar className="h-[6.268px] w-[33.428px] bg-[#7bf1a8]" />
            <div className="flex w-full flex-col gap-[5.118px] items-start">
              <SkeletonBar className="h-[4.178px] w-full bg-[#dab2ff]" />
              <SkeletonBar className="h-[4.178px] w-[51.25px] bg-[#dab2ff]" />
              <SkeletonBar className="h-[4.178px] w-full bg-[#dab2ff]" />
              <SkeletonBar className="h-[4.178px] w-full bg-[#dab2ff]" />
              <SkeletonBar className="h-[4.178px] w-full bg-[#dab2ff]" />
            </div>
          </div>

          {/* Inconsistent color blocks (clashing colors) */}
          <ColorBlock className="left-[125.49px] top-[14.36px] bg-[#6938ef]" />
          <ColorBlock className="left-[125.49px] top-[68.46px] bg-[#f63d68]" />
          <ColorBlock className="left-[179.59px] top-[14.36px] bg-[#2e90fa]" />
          <ColorBlock className="left-[179.59px] top-[68.46px] bg-[#ff4405]" />

          {/* X-close badge */}
          <div className="absolute right-[-4px] top-[-8.41px] flex items-center rounded-[32px] bg-[#fff1f3] p-[8px] shadow-[0px_4px_8px_0px_rgba(16,24,40,0.1),0px_2px_4px_0px_rgba(16,24,40,0.06)]">
            <div className="size-[16px] overflow-hidden shrink-0 relative">
              <div className="absolute inset-[25%]">
                <XCloseIcon className="block size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

/* Helpers */

function SkeletonBar({ className }: { className: string }) {
  return (
    <div className={"relative shrink-0 rounded-[47.754px] " + className}>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.249px_0.497px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}

function ColorBlock({ className }: { className: string }) {
  return (
    <div className={"absolute size-[48.254px] rounded-[5.849px] " + className}>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0.249px_0.497px_0px_rgba(0,0,0,0.08)]" />
    </div>
  );
}
