"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";

const items = [
  {
    id: 1,
    image: "/images/tsirtImages/Screenshot_14.png",
    title: "Premium Polo",
    className: "md:row-span-2",
  },
  {
    id: 2,
    image: "/images/tsirtImages/Screenshot_15.png",
    title: "Classic Fit",
  },
  {
    id: 3,
    image: "/images/tsirtImages/Screenshot_16.png",
    title: "Luxury Collection",
  },
  {
    id: 4,
    image: "/images/tsirtImages/Screenshot_17.png",
    title: "New Arrival",
    className: "md:row-span-2",
  },
  {
    id: 5,
    image: "/images/tsirtImages/Screenshot_18.png",
    title: "Featured",
  },

  {
    id: 6,
    image: "/images/tsirtImages/Screenshot_12.png",
    title: "Oversized Tee",
  },
  {
    id: 7,
    image: "/images/tsirtImages/Screenshot_13.png",
    title: "Premium Shirt",
  },
  {
    id: 8,
    image: "/images/tsirtImages/Screenshot_14.png",
    title: "Shop Collection",
  },
  {
    id: 9,
    image: "/images/tsirtImages/Screenshot_14.png",
    title: "Shop Collection",
  },
  {
    id: 10,
    image: "/images/tsirtImages/Screenshot_14.png",
    title: "Shop Collection",
  },
];

const ExploreCollection = () => {
  return (
    <section>
      <SectionHeader
        badge="FEATURED COLLECTION"
        title="Discover our premium collection."
        description="
              Explore thoughtfully crafted apparel made with premium fabrics,
            modern fits, and exceptional quality—designed for everyday comfort
            and timeless style."
      />

      <div className="grid auto-rows-[220px] w-full grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className={`group relative overflow-hidden rounded  ${item.className}`}
          >
            <Image
              src={item.image}
              fill
              alt={item.title}
              className="object-cover duration-700 w-[300px] h-[300px]  group-hover:scale-110"
            />

            <div className="absolute inset-0  opacity-80 transition group-hover:opacity-100" />

            <div className="absolute bottom-6 left-6">
              <h3 className="translate-y-4 text-xl font-semibold text-white duration-300 group-hover:translate-y-0">
                {item.title}
              </h3>

              <button className="mt-3 rounded-full border border-white px-5 py-2 text-sm text-white opacity-0 duration-300 group-hover:opacity-100">
                Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCollection;
