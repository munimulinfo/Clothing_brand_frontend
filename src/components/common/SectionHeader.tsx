import { Geist } from "next/font/google";
type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

const manrope = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <div
      className={`  relative my-10 overflow-hidden rounded-lg px-5 py-5 bg-[linear-gradient(90deg,rgba(254,243,199,0.35)_0%,rgba(254,243,199,0.18)_20%,rgba(255,255,255,0.95)_60%,transparent_100%)]`}
    >
      <div>
        <span className="inline-flex rounded-full  border border-green-700/20 bg-green-700/10 px-4 py-1 md:text-sm text-[10px] font-semibold uppercase tracking-[0.3em] text-green-800">
          {badge}
        </span>

        <h2 className={` ${manrope.className}md:mt-5 mt-3 md:text-4xl text-[18px] font-bold text-gray-900`}>
          {title}
        </h2>

        <p className={` ${manrope.className} md:mt-3 mt-1 lg:max-w-4xl w-full   italic md:not-italic md:text-justify lg:text-left md:text-base text-[11px] leading-7 text-gray-600`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
