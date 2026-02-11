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
      className="flex flex-col gap-10 md:gap-[64px] items-start px-4 sm:px-8 md:px-[80px] py-12 md:py-[96px] rounded-tl-[40px] rounded-tr-[40px] md:rounded-tl-[80px] md:rounded-tr-[80px] w-full"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #EFF8FF 0%, #FFFFFF 100%)",
      }}
    >
      {/* ---- Header container ---- */}
      <div className="flex flex-col items-start w-full max-w-[1280px] px-0 md:px-[32px] mx-auto">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-4 md:gap-[20px] items-center w-full max-w-[768px]">
            {/* Heading + badge */}
            <div className="flex flex-col gap-4 md:gap-[24px] items-center w-full">
              {/* Badge */}
              <Badge
                variant="outline"
                className="gap-[8px] rounded-[12px] border-[#1570ef] px-[12px] py-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
              >
                <div className="size-[32px] overflow-hidden shrink-0 flex items-center justify-center">
                  <StarIcon className="w-[16px] h-[16px]" />
                </div>
                <span
                  className="font-semibold text-[14px] leading-[20px] text-center bg-gradient-to-r from-[#1570ef] to-[#2e90fa] bg-clip-text shrink-0"
                  style={{ WebkitTextFillColor: "transparent" }}
                >
                  Benefits
                </span>
              </Badge>

              {/* Main heading */}
              <h2 className="font-semibold text-[28px] sm:text-[36px] md:text-[48px] leading-[36px] sm:leading-[44px] md:leading-[60px] tracking-[-0.56px] md:tracking-[-0.96px] text-center text-[#101828] w-full">
                Stop spending hours formatting and designing slides
              </h2>
            </div>

            {/* Supporting text */}
            <p className="font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-center text-[#475467] w-full">
              Powerful features that save time and maintain perfect brand standards
            </p>
          </div>
        </div>
      </div>

      {/* ---- Cards container ---- */}
      <div className="flex flex-col items-center w-full max-w-[1280px] px-0 md:px-[32px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Left card: Brand Alignment */}
          <Card className="flex flex-col gap-6 md:gap-[32px] items-start overflow-hidden rounded-[16px] md:rounded-[24px] border-[#eaecf5] bg-white p-0 shadow-none">
            <CardHeader className="p-5 md:p-[32px] pb-0 md:pb-0 space-y-[8px]">
              <CardTitle className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#101828]">
                No design skills? No problem!
              </CardTitle>
              <CardDescription className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#475467]">
                With SlideSpeak, easily align your presentations with your brand by uploading your logo or letting us fetch it from your site.{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-5 md:px-[32px] pb-5 md:pb-[32px] w-full overflow-x-auto">
              <BrandAlignmentIllustration />
            </CardContent>
          </Card>

          {/* Right card: Color Consistency */}
          <Card className="flex flex-col gap-6 md:gap-[32px] items-center overflow-clip rounded-[16px] md:rounded-[24px] border-[#eaecf5] bg-white p-0 shadow-none">
            <CardHeader className="p-5 md:p-[32px] pb-0 md:pb-0 w-full space-y-[8px]">
              <CardTitle className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] text-[#101828]">
                Consistent colors, fonts, logos... automatically
              </CardTitle>
              <CardDescription className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#475467]">
                Every presentation looks pixel-perfect and professionally branded. Impress clients, investors, and stakeholders instantly.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-5 md:px-[32px] pb-5 md:pb-[32px] w-full overflow-x-auto">
              <ColorConsistencyIllustration />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
