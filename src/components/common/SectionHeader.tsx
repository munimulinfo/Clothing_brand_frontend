type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <div className="relative my-10 overflow-hidden rounded-lg px-5 py-5 bg-[linear-gradient(90deg,rgba(254,243,199,0.35)_0%,rgba(254,243,199,0.18)_20%,rgba(255,255,255,0.95)_60%,transparent_100%)]">
      <div>
        <span className="inline-flex rounded-full border border-green-700/20 bg-green-700/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-green-800">
          {badge}
        </span>

        <h2 className="mt-5 lg:text-4xl text-2xl font-bold text-gray-900">{title}</h2>

        <p className="mt-3 lg:max-w-4xl w-full text-justify lg:text-left  text-base leading-7 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionHeader;
