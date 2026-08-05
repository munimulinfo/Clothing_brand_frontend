import { ShieldCheck } from "lucide-react";



const PrivacyHero = () => {
  return (
    <section className={" mx-auto max-w-7xl px-5 pt-10 "}>
      <div
        style={{
          backgroundImage: "url('/images/heroImages/help&SupportImage.png')",
        }}
        className="relative bg-cover bg-center bg-no-repeat overflow-hidden rounded-[36px] border h-[500px]  px-8 py-14 lg:px-16 pt-26"
      >
        {/* Background Glow */}
        <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-green-200/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

        {/* Decorative Circle */}
        <div className="absolute right-6 top-6 hidden lg:flex h-16 w-16 items-center justify-center rounded-full border border-green-200 bg-white/70 backdrop-blur">
          <ShieldCheck className="h-10 w-10 text-green-700" />
        </div>

        {/* Content */}
        <div className="relative max-w-3xl">
          <h1 className="mt-6 text-4xl font-black tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Privacy <span className="text-emerald-700">Policy</span>
          </h1>

          <p className="mt-4 max-w-[400px]  leading-8 text-gray-600 font-medium md:text-lg">
            Your privacy is our priority. See how we protect your information.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white">
              Last Updated: August 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
