"use client";

import Image from "next/image";

const SignUpBanner = () => {
  return (
    <div className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-700 to-green-500 lg:flex">
      <Image
        src="/images/tsirtImages/signup.png"
        alt="Trust Wear"
        fill
        priority
        className="object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end p-14 text-white">
        <span className="mb-4 w-fit rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm backdrop-blur">
          TRUST WEAR
        </span>

        <h1 className="max-w-md text-5xl font-bold leading-tight">
          Wear Confidence.
          <br />
          Live Comfort.
        </h1>

        <p className="mt-6 max-w-md text-lg text-white/80">
          Join thousands of customers discovering premium quality apparel made
          for everyday confidence.
        </p>
      </div>
    </div>
  );
};

export default SignUpBanner;
