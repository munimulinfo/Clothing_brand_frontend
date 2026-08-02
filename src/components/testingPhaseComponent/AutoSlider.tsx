"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCartPlus, FaFire, FaRegHeart } from "react-icons/fa";

const reviews = [
  "/images/tsirtImages/Screenshot_12.png",
  "/images/tsirtImages/Screenshot_14.png",
  "/images/tsirtImages/Screenshot_15.png",
  "/images/tsirtImages/Screenshot_16.png",
  "/images/tsirtImages/Screenshot_17.png",
  "/images/tsirtImages/Screenshot_18.png",
  "/images/tsirtImages/Screenshot_17.png",
  "/images/tsirtImages/Screenshot_18.png",
];

function AutoSlider() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols justify-items-center  gap-4 py-8">
      {reviews.map((image, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -2 }}
            style={{ filter: "drop-shadow(0 10px 20px rgba(20,30,20,0.10))" }}
          className="group relative  w-[300px] rounded-3xl shrink-0"
        >
          {/* accent sliver */}
          {/* <div className="absolute inset-0  bg-[#16391F] rounded-4xl [clip-path:path('M26,0_H274_A26,26_0_0_1_300,26_V430_L240,490_H26_A26,26_0_0_1_0,464_V26_A26,26_0_0_1_26,0_Z')]"/> */}

          {/* main white card */}
          <div className="relative flex  flex-col bg-white [clip-path:path('M26,0_H274_A26,26_0_0_1_300,26_V434_L244,490_H26_A26,26_0_0_1_0,464_V26_A26,26_0_0_1_26,0_Z')]">
            <div className="absolute left-0 top-0 z-20 flex items-center gap-1 rounded-tl-[26px] bg-[#0D2B18] py-2.5 pl-[22px] pr-5 text-xs font-bold tracking-wide text-white [clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%)]">
              <FaFire className="text-[#F3B518] text-sm" />
              HOT
            </div>

            <button className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-md transition hover:scale-110">
              <FaRegHeart className="text-[#10151C]" />
            </button>

            <div className="relative h-[300px] w-full overflow-hidden bg-[#E6E7DF]">
              <Image
                src={image}
                alt="Oversized Tee"
                fill
                draggable={false}
                className="object-cover transition-transform h-full w-full duration-700 group-hover:scale-105"
              />
{/* 
              <span className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1.5 text-[10.5px] font-bold tracking-wide text-[#10151C] shadow-md">
                NEW ARRIVAL
              </span> */}
            </div>

            <div className="flex flex-col  w-full gap-2 px-5 py-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#0D2B18]">
                Best Seller
              </span>
              <h3 className="text-[23px] font-bold -tracking-[0.01em] text-[#10151C]">
                Oversized Tee
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[17px] tracking-wider text-[#F3B518]">
                  ★★★★★
                </span>
                <span className="text-[13px] text-[#9CA0A3]">(42)</span>
              </div>
              <div className="mt-0.5 flex items-end gap-2.5">
                <span className="text-[23px] font-extrabold text-[#0D2B18]">
                  ৳790
                </span>
                <span className="pb-0.5 text-sm text-[#B7BBBE] line-through">
                  ৳990
                </span>
              </div>
              <p className="mt-0.5 text-[12.5px] text-[#62766C]">
                Premium Cotton • Oversized Fit
              </p>
            </div>
          </div>

          <button className="absolute -right-1  bottom-3 z-30 flex h-[60px] w-[60px] items-center justify-center rounded-full border-4 border-white bg-[#0D2B18]  transition hover:scale-110 hover:bg-[#16391F]">
            <FaCartPlus className="text-lg text-white" />
          </button>
        </motion.div>
      ))}
    </div>
  );
}

export default AutoSlider;
