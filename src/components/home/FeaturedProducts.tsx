"use client";
import SectionHeader from "../common/SectionHeader";
const sliderImages = [
  "/images/tsirtImages/tsirt01.png",
  "/images/tsirtImages/Screenshot_12.png",
  "/images/tsirtImages/Screenshot_13.png",
  "/images/tsirtImages/Screenshot_14.png",
  "/images/tsirtImages/Screenshot_15.png",
  "/images/tsirtImages/Screenshot_16.png",
  "/images/tsirtImages/Screenshot_17.png",
  "/images/tsirtImages/Screenshot_18.png",
];

import { motion } from "framer-motion";
import { Geist } from "next/font/google";
import Image from "next/image";

const manrope = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const FeaturedProducts = () => {
  return (
    <div className={manrope.className}>
      <SectionHeader
        badge="Trust Wear"
        title="Where comfort meets confidence."
        description="
          Every piece is made from carefully selected fabrics with attention to design, fit, and quality. Because great clothing doesn't just elevate your style—it elevates your confidence.
        "
      />

      <section className="mt-10  px-2">
        <div className="grid gap-5  lg:grid-cols-[430px_1fr]">
          {/* LEFT BIG IMAGE */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden "
          >
            <Image
              src={sliderImages[0]}
              alt=""
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {sliderImages.map((item) => (
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{ duration: 0.25 }}
                key={item}
                className="group overflow-hidden  bg-white shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item}
                    width={500}
                    height={500}
                    alt=""
                    className="duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">৳ {400}</span>

                    <span className="text-sm text-gray-400 line-through">
                      ৳ {600}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* sirt gallary  */}
      <section className="mt-5  px-2">
        <div className="grid gap-5 lg:grid-cols-[430px_1fr]">
          {/* LEFT BIG IMAGE */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden"
          >
            <Image
              src={sliderImages[0]}
              alt=""
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {sliderImages.map((item) => (
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{ duration: 0.25 }}
                key={item}
                className="group overflow-hidden bg-white shadow-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item}
                    width={500}
                    height={500}
                    alt=""
                    className="duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">৳ {400}</span>

                    <span className="text-sm text-gray-400 line-through">
                      ৳ {600}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* VIEW MORE */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProducts;
