import { ShieldCheck } from "lucide-react";

const PrivacyHero = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-10">
      <div className="relative overflow-hidden rounded-[36px] border border-green-100 bg-gradient-to-br from-[#eef9f1] via-white to-[#f7faf8] px-8 py-14 lg:px-16 lg:py-20">
        {/* Background Glow */}
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

        {/* Decorative Circle */}
        <div className="absolute right-16 top-12 hidden lg:flex h-32 w-32 items-center justify-center rounded-full border border-green-200 bg-white/70 backdrop-blur">
          <ShieldCheck className="h-14 w-14 text-green-700" />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Privacy & Security
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Privacy <span className="text-green-600">Policy</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            Your privacy matters to us. Learn how Trust Wear collects, protects,
            and uses your personal information to provide a safe and secure
            shopping experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white">
              Last Updated: August 2026
            </span>

            <span className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-gray-600">
              9 Sections
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
