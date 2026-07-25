"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";

const reviews = [
  "/images/tsirtImages/Screenshot_12.png",
  "/images/tsirtImages/Screenshot_13.png",
  "/images/tsirtImages/Screenshot_14.png",
  "/images/tsirtImages/Screenshot_15.png",
  "/images/tsirtImages/Screenshot_16.png",
  "/images/tsirtImages/Screenshot_17.png",
  "/images/tsirtImages/Screenshot_18.png",
];

const items = [...reviews, ...reviews];

function AutoSlider() {
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
    <section>
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0px, black 10px, black calc(100% - 10px), transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0px, black 10px, black calc(100% - 10px), transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-6"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => startAnimation()}
        >
          {items.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="group relative h-[360px] w-[280px] shrink-0 overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={image}
                alt="Trust Wear"
                fill
                draggable={false}
                className="object-cover brightness-[1.02] transition-all duration-700 group-hover:scale-110"
              />

              {/* Soft Overlay */}
              <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5" />

              {/* Soft Bottom Glow */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/8 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AutoSlider;
