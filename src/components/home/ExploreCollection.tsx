"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../common/SectionHeader";
import { Eye, Glasses, Heart, ShoppingBag, Star } from "lucide-react";
import { FaCartPlus } from "react-icons/fa";
import { Geist } from "next/font/google";

const items = [
  {
    id: 1,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Off-Shoulder Edit",
  },
  {
    id: 2,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Classic Fit",
  },
  {
    id: 3,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Luxury Collection",
  },
  {
    id: 4,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "New Arrival",
  },
  {
    id: 5,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Featured",
  },

  {
    id: 6,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Oversized Tee",
  },
  {
    id: 7,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Premium Shirt",
  },
  {
    id: 8,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Shop Collection",
  },
  {
    id: 9,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Shop Collection",
  },
  {
    id: 10,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Shop Collection",
  },
  {
    id: 11,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Shop Collection",
  },
  {
    id: 12,
    image: "/images/tsirtImages/nissan2.jpg",
    title: "Shop Collection",
  },
];

const manrope = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ExploreCollection = () => {
  return (
    <section className={manrope.className}>
      <SectionHeader
        badge="FEATURED COLLECTION"
        title="Discover our premium collection."
        description="
              Explore thoughtfully crafted apparel made with premium fabrics,
            modern fits, and exceptional quality—designed for everyday comfort
            and timeless style."
      />

      <div className="grid w-full grid-cols-2 md:gap-4 gap-2 md:px-0 px-1 md:grid-cols-4 mt-10 mb-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative bg-white md:rounded-3xl p-0 rounded-xl md:p-4 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Frame */}
            <div className="relative md:h-[300px] h-[180px] w-full overflow-hidden md:rounded-2xl rounded-t-xl bg-slate-100">
              <Image
                src={item.image}
                fill
                alt="clothing"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Badge */}

              <span className="absolute top-3 left-3 z-10 bg-slate-900/80 backdrop-blur-md text-white md:text-[11px] text-[8px]  font-medium tracking-wider uppercase px-3 py-1 rounded-full border border-white/20">
                Sale
              </span>

              {/* AR Virtual Try-On Icon Button */}
              <button
                title="Virtual Try-On"
                className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-md text-slate-700 md:p-2 p-1 rounded-full shadow-md hover:bg-white hover:text-emerald-600 transition-colors"
              >
                <Heart
                  className={`md:w-4 md:h-4 w-2.5 h-2.5 transition-colors text-slate-600`}
                />
              </button>

              {/* Quick Actions Hover Glass Bar */}
              <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex gap-2 z-10">
                <button className="flex-1 bg-white/90 backdrop-blur-md hover:bg-white text-slate-900 font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-lg border border-white/40 transition-colors">
                  <Eye className="w-3.5 h-3.5" /> Quick View
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-4 md:p-0 p-2 flex flex-col gap-2 flex-grow justify-between">
              <div>
                <div className="flex items-center justify-between  text-slate-500 mb-1">
                  <span className="flex items-center gap-0.5 md:gap-1 text-amber-500 font-medium">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </span>
                  <span className="md:text-[11px] text-[8px] text-emerald-600 bg-emerald-50 px-2 py-0.5 md:rounded-md rounded-[4px] font-medium">
                    {500} viewing
                  </span>
                </div>

                <h3 className="md:text-[16px] text-[10px] font-bold text-slate-800 line-clamp-2 mt-2 group-hover:text-emerald-700 transition-colors">
                  Men&apos;s premium t-shirt-Drop shoulder
                </h3>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-md font-extrabold text-slate-900">
                    ৳990
                  </span>

                  <span className="lg:text-[12px] font-semibold text-[9px] text-gray-400 line-through">
                    ৳{700}
                  </span>

                  <span className="lg:text-[12px] text-[9px] font-semibold text-[#FF3F6C]">
                    -{23}%
                  </span>
                </div>

                {/* Desktop & Tablet */}
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="hidden md:flex flex-1 max-w-[100px] items-center justify-center gap-1.5 rounded-sm bg-gray-900 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-gray-800"
                >
                  <FaCartPlus className="h-3.5 w-3.5" />
                  Add to Cart
                </motion.button>

                {/* Mobile */}
                <button className="flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-black transition hover:scale-110 hover:bg-[#FF3F6C]">
                  <FaCartPlus className="text-sm text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExploreCollection;
