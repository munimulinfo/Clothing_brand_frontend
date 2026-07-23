"use client";

import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { Star, UserRound, Quote } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { useEffect } from "react";

const customerReviews = [
  {
    id: 1,
    review:
      "The fabric quality exceeded my expectations. It's incredibly soft, breathable, and still looks brand new after multiple washes. Definitely my favorite everyday t-shirt.",
    name: "Rahim Ahmed",
    role: "Verified Customer",
    rating: 5,
  },
  {
    id: 2,
    review:
      "Perfect fitting, premium stitching, and very fast delivery. The packaging also felt premium. Highly recommended!",
    name: "Nusrat Jahan",
    role: "Verified Customer",
    rating: 5,
  },
  {
    id: 3,
    review:
      "Trust Wear has become my go-to clothing brand. Excellent quality, stylish designs, and outstanding comfort.",
    name: "Fahim Hasan",
    role: "Verified Customer",
    rating: 5,
  },
  {
    id: 4,
    review:
      "Trust Wear has become my go-to clothing brand. Excellent quality, stylish designs, and outstanding comfort.",
    name: "Fahim Hasan",
    role: "Verified Customer",
    rating: 5,
  },
  {
    id: 5,
    review:
      "Trust Wear has become my go-to clothing brand. Excellent quality, stylish designs, and outstanding comfort.",
    name: "Fahim Hasan",
    role: "Verified Customer",
    rating: 5,
  },
];


const items = [...customerReviews, ...customerReviews];
const Reviews = () => {
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();


  const startAnimation = () => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 35,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (!reduceMotion) {
      startAnimation();
    }
  }, [reduceMotion]);
  return (
    <section className="overflow-hidden">
      <SectionHeader
        badge="Testimonials"
        title="Loved by Our Customers"
        description="Every review reflects our dedication to premium quality, unmatched comfort, and timeless style. Discover why Trust Wear is becoming a favorite for everyday fashion."
      />
      <motion.div
        className="flex gap-7 relative overflow-hidden py-4"
        animate={controls}
        onHoverStart={() => controls.stop()}
        onHoverEnd={() => startAnimation()}
      >
        {items.map((review, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.25 }}
            className="flex w-100 shrink-0 flex-col rounded-3xl border border-green-100 bg-gradient-to-br from-white via-white to-green-50 p-7 shadow-md transition-all hover:border-green-300 hover:shadow-2xl"
          >
            {/* Rating */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <Quote size={34} className="rotate-180 text-green-600/20" />
            </div>

            {/* Badge */}
            <div className="mt-5">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold tracking-wide text-green-700">
                ✓ Verified Purchase
              </span>
            </div>

            {/* Review */}
            <p className="mt-6 flex-1 text-[15px] leading-7 text-gray-600">
              {review.review}
            </p>

            {/* Footer */}
            <div className="flex items-center pt-5 justify-between border-t border-gray-200  ">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-emerald-500 text-white shadow-lg">
                  <UserRound size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>

                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>

              <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                5.0
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Reviews;
