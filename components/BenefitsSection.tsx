import { StarIcon } from "@/components/icons/StarIcon";
import { BrandAlignmentIllustration } from "@/components/svgs/BrandAlignmentIllustration";
import { ColorConsistencyIllustration } from "@/components/svgs/ColorConsistencyIllustration";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/**
 * Benefits Section
 *
 * Full-width section with:
 * - Gradient background (sky-50 to white)
 * - 80px top border-radius
 * - Badge with gradient text + star icon
 * - Display heading + supporting text
 * - Two-column card grid (24px gap)
 *
 * Typography: Figtree (400, 600, 700)
 * Design tokens from Figma node 1:5697.
 */
export function BenefitsSection() {
  return (
    <section
      className="flex flex-col gap-[64px] items-start px-[80px] py-[96px] rounded-tl-[80px] rounded-tr-[80px] w-full"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #EFF8FF 0%, #FFFFFF 100%)",
      }}
    >
      {/* ---- Header container ---- */}
      <div className="flex flex-col items-start w-full max-w-[1280px] px-[32px] mx-auto">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-[20px] items-center w-full max-w-[768px]">
            {/* Heading + badge */}
            <div className="flex flex-col gap-[24px] items-center w-full">
              {/* Badge */}
              <Badge
                variant="outline"
                className="gap-[8px] rounded-[12px] border-[#1570ef] px-[12px] py-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                <div className="size-[32px] overflow-hidden shrink-0 flex items-center justify-center">
                  <StarIcon className="w-[14.84px] h-[14.83px]" />
                </div>
                <span
                  className="font-semibold text-[14px] leading-[20px] text-center bg-gradient-to-r from-[#1570ef] to-[#2e90fa] bg-clip-text shrink-0"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  Benefits
                </span>
              </Badge>

              {/* Main heading */}
              <h2 className="font-semibold text-[48px] leading-[60px] tracking-[-0.96px] text-center text-[#101828] w-full">
                Stop spending hours formatting and designing slides
              </h2>
            </div>

            {/* Supporting text */}
            <p className="font-normal text-[18px] leading-[28px] text-center text-[#475467] w-full">
              Powerful features that save time and maintain perfect brand standards
            </p>
          </div>
        </div>
      </div>

      {/* ---- Cards container ---- */}
      <div className="flex flex-col items-center w-full max-w-[1280px] px-[32px] mx-auto">
        <div className="grid grid-cols-2 gap-[24px] w-full">
          {/* Left card: Brand Alignment */}
          <Card className="flex flex-col gap-[32px] items-start overflow-hidden rounded-[24px] border-[#eaecf5] bg-white p-0 shadow-none">
            <CardHeader className="p-[32px] pb-0">
              <CardTitle className="text-[24px] leading-[32px] text-[#101828]">
                No design skills? No problem!
              </CardTitle>
              <CardDescription className="text-[16px] leading-[24px] text-[#475467]">
                With SlideSpeak, easily align your presentations with your brand by uploading your logo or letting us fetch it from your site.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-[32px] pb-[32px]">
              <BrandAlignmentIllustration />
            </CardContent>
          </Card>

          {/* Right card: Color Consistency */}
          <Card className="flex flex-col gap-[32px] items-center overflow-clip rounded-[24px] border-[#eaecf5] bg-white p-0 shadow-none">
            <CardHeader className="p-[32px] pb-0 w-full">
              <CardTitle className="text-[24px] leading-[32px] text-[#101828]">
                Consistent colors, fonts, logos... automatically
              </CardTitle>
              <CardDescription className="text-[16px] leading-[24px] text-[#475467]">
                Every presentation looks pixel-perfect and professionally branded. Impress clients, investors, and stakeholders instantly.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-[32px] pb-[32px]">
              <ColorConsistencyIllustration />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
