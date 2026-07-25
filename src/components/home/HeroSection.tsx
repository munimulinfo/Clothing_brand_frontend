"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/heroImages/Webinar (Banner (Landscape)).png",
    title: "Premium Collection",
    subtitle: "Crafted for Everyday Confidence",
  },
  {
    id: 2,
    image: "/images/heroImages/Untitled design (3).png",
    title: "Luxury Polo",
    subtitle: "Minimal Design. Maximum Comfort.",
  },
  {
    id: 3,
    image: "/images/heroImages/Untitled (1280 x 620 px).png",
    title: "New Arrivals",
    subtitle: "Built For Modern Lifestyle.",
  },
  {
    id: 4,
    image: "/images/heroImages/Untitled design (3).png",
    title: "New Arrivals",
    subtitle: "Built For Modern Lifestyle.",
  },
];

const sideCards = [
  {
    image: "/images/tsirtImages/Screenshot_16.png",
    title: "Performance Polo",
  },
  {
    image: "/images/tsirtImages/Screenshot_15.png",
    title: "Classic Essentials",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="lg:mt-10">
      <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
        {/* Left Carousel */}

        <div className="relative  w-full lg:h-[620px] h-[320px]  overflow-hidden lg:rounded-[30px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <Image
                src={slides[current].image}
                fill
                priority
                alt={slides[current].title}
                className="transition duration-[6000ms] w-full h-full group-hover:scale-110"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 lg:left-12 left-24 z-20 flex  gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  current === index ? "w-14 bg-white" : "w-8 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Cards */}

        {/* Right Cards */}

        <div className="lg:grid hidden  gap-4">
          {sideCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative full overflow-hidden rounded-[30px] shadow-lg"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-fill transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

              {/* Top Badge */}
              <div className="absolute left-5 top-5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                NEW
              </div>

              {/* Content */}
              <div className="absolute bottom-3 left-5 right-5">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>

                <p className="mt-2 text-sm text-white/80">
                  Premium Quality Collection
                </p>

                <button className="mt-3 flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Shop Now
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 rounded-[24px] border border-white/0 transition duration-300 group-hover:border-white/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
