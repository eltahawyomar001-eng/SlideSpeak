import { SlideSpeakMark } from "@/components/icons/SlideSpeakMark";
import SlideSpeakMascot from "@/components/icons/SlideSpeakMascot";
import { GlobeIcon } from "@/components/icons/GlobeIcon";
import {
  CurveLineUpper,
  CurveLineLower,
  BranchLineTall,
  BranchLineShortUpper,
  BranchLineShortLower,
  BranchLineTallLower,
} from "@/components/icons/ConnectingLines";

/**
 * Brand Alignment Illustration — left card.
 *
 * Layout (270x532px canvas):
 * - Two icon cards (SlideSpeak mark + Globe) stacked on the left
 * - Curved connecting SVG lines in the middle
 * - Three color-hex pills on the right (#1D1C2B, #6658E1, #FF6817)
 * - A SlideSpeak logo pill in the centre
 * - A "Typography" button at the bottom-right
 *
 * All graphics are inline SVGs — no external assets.
 */
export function BrandAlignmentIllustration() {
  return (
    <div
      className="relative h-[270px] w-[532px] shrink-0"
      role="img"
      aria-label="Brand alignment illustration showing SlideSpeak extracting brand colors, logos, and typography"
    >
      {/* -- Connecting lines (absolute positioned) -- */}

      {/* Upper curve: top icon card to right area */}
      <div className="absolute left-[138px] top-[135px] h-[47.5px] w-[131.5px]">
        <div className="absolute inset-[-4.21%_0]">
          <CurveLineUpper className="block size-full" />
        </div>
      </div>

      {/* Lower curve (flipped vertically) */}
      <div className="absolute left-[138px] top-[91px] flex h-[44px] w-[132px] items-center justify-center">
        <div className="-scale-y-100 flex-none">
          <div className="relative h-[44px] w-[132px]">
            <div className="absolute inset-[-4.55%_0]">
              <CurveLineLower className="block size-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Tall branch: fork to top + bottom pills */}
      <div className="absolute left-[268px] top-[49px] h-[86px] w-[54.001px]">
        <div className="absolute inset-[-2.33%_0]">
          <BranchLineTall className="block size-full" />
        </div>
      </div>

      {/* Short branch upper: to middle pill */}
      <div className="absolute left-[268px] top-[106px] h-[29px] w-[54px]">
        <div className="absolute inset-[-6.9%_0]">
          <BranchLineShortUpper className="block size-full" />
        </div>
      </div>

      {/* Short branch lower (flipped) */}
      <div className="absolute left-[268px] top-[135px] flex h-[29px] w-[54px] items-center justify-center">
        <div className="-scale-y-100 flex-none">
          <div className="relative h-[29px] w-[54px]">
            <div className="absolute inset-[-6.9%_0]">
              <BranchLineShortLower className="block size-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Tall branch lower (flipped) to Typography */}
      <div className="absolute left-[260px] top-[135px] flex h-[87px] w-[68px] items-center justify-center">
        <div className="-scale-y-100 flex-none">
          <div className="relative h-[87px] w-[68px]">
            <div className="absolute inset-[-2.3%_0]">
              <BranchLineTallLower className="block size-full" />
            </div>
          </div>
        </div>
      </div>

      {/* -- Icon tile cards (left column, stacked) -- */}
      <div className="absolute left-[76px] top-[59px] flex w-[64px] flex-col gap-[24px] items-start">
        {/* SlideSpeak mark card */}
        <div className="w-full shrink-0 overflow-hidden rounded-[20px] bg-white p-[11.429px] shadow-[0px_1.143px_3.429px_0px_rgba(16,24,40,0.1),0px_1.143px_2.286px_0px_rgba(16,24,40,0.06)]">
          <div className="flex items-center gap-[4.571px] shrink-0">
            <div className="flex size-[41.143px] shrink-0 flex-col items-center justify-center rounded-[11.455px] border-[1.214px] border-solid border-white bg-[#f4f9ff] px-[8.591px] py-[7.159px]">
              <div className="flex items-center gap-[7.481px] shrink-0">
                <SlideSpeakMark className="h-[22.442px] w-[22.441px] shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Globe icon card */}
        <div className="w-full shrink-0 overflow-hidden rounded-[20px] bg-white p-[11.429px] shadow-[0px_1.143px_3.429px_0px_rgba(16,24,40,0.1),0px_1.143px_2.286px_0px_rgba(16,24,40,0.06)]">
          <div className="flex items-center gap-[4.571px] shrink-0">
            <div className="flex size-[41.143px] shrink-0 flex-col items-center justify-center rounded-[11.455px] border-[1.214px] border-solid border-white bg-[#f4f9ff] px-[8.591px] py-[7.159px]">
              <div className="size-[22.442px] overflow-hidden shrink-0">
                <GlobeIcon className="block size-full" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -- SlideSpeak logo pill (center) -- */}
      <div className="absolute left-[189px] top-[calc(50%-1px)] -translate-y-1/2 flex items-center gap-[7px] rounded-[40px] border border-[#f8f9fc] bg-white py-[6px] pl-[6px] pr-[12px] shadow-[0px_4px_8px_0px_rgba(16,24,40,0.1),0px_2px_4px_0px_rgba(16,24,40,0.06)]">
        <div className="flex items-center gap-[3px] shrink-0">
          <div className="flex size-[18px] shrink-0 items-center justify-center p-[1.5px]">
            <SlideSpeakMascot className="h-[15.75px] w-[13.125px] shrink-0" />
          </div>
          <span className="font-bold text-[9px] leading-[12px] text-[#101828] whitespace-nowrap shrink-0">
            SlideSpeak
          </span>
        </div>
      </div>

      {/* -- Color hex pills (right column) -- */}
      <ColorPill color="#1d1c2b" hex="#1D1C2B" top="24px" />
      <ColorPill color="#6658e1" hex="#6658E1" top="82px" />
      <ColorPill color="#ff6817" hex="#FF6817" top="140px" />

      {/* -- Typography button (bottom-right) -- */}
      <div className="absolute left-[322px] top-[198px] flex h-[48px] w-[131px] items-center justify-center rounded-[40px] bg-black px-[12px] py-[8px] shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)]">
        <span
          className="font-bold text-[18px] leading-normal shrink-0 bg-clip-text"
          style={{
            backgroundImage: "url('/typography-gradient.png')",
            backgroundSize: "100% auto",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Typography
        </span>
      </div>
    </div>
  );
}

/* -- Helper: color pill -- */
function ColorPill({
  color,
  hex,
  top,
}: {
  color: string;
  hex: string;
  top: string;
}) {
  return (
    <div
      className="absolute left-[322px] flex items-center gap-[12px] rounded-[40px] bg-white px-[12px] py-[8px] shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)]"
      style={{ top }}
    >
      <div
        className="size-[32px] shrink-0 rounded-[28.785px]"
        style={{ backgroundColor: color }}
      />
      <span className="font-semibold text-[16px] leading-[24px] text-black shrink-0">
        {hex}
      </span>
    </div>
  );
}
