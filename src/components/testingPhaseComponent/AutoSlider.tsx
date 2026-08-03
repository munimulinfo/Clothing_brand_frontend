"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCartPlus, FaFire, FaRegHeart } from "react-icons/fa";
import { Zap } from "lucide-react";

const reviews = [
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
  "/images/tsirtImages/nissan12.jpeg",
];

function AutoSlider() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center px-2  gap-2  md:gap-4 ">
      {reviews.map((image, index) => (
        <motion.div
          key={index}
          style={{ filter: "drop-shadow(0 10px 20px rgba(20,30,20,0.10))" }}
          className="group relative  bg-white w-full max-w-76 rounded-3xl shrink-0"
        >
          {/* main white card */}
          <div className="relative flex  flex-col bg-white rounded-3xl ">
            <div className="absolute left-0 top-0 z-20 flex items-center gap-1 rounded-tl-[26px] bg-[#0D2B18] py-2.5 pl-[22px] pr-5 md:text-xs text-[8px] font-bold tracking-wide text-white [clip-path:polygon(0_0,calc(100%-12px)_0,100%_50%,calc(100%-12px)_100%,0_100%)]">
              <FaFire className="text-[#F3B518] text-sm" />
              HOT
            </div>



            <div className="relative md:h-[300px] h-[220px] w-full  rounded-t-3xl overflow-hidden bg-[#E6E7DF]">
              <Image
                src={image}
                alt="Oversized Tee"
                fill
                draggable={false}
                className="object-cover transition-transform h-full w-full duration-700 group-hover:scale-105"
              />

              <span className="absolute bottom-4 right-4 uppercase rounded-full bg-white px-3 py-1.5 md:text-[10.5px] text-[8px] text-[#0D2B18] font-bold tracking-wide  shadow-md">
                Best Seller
              </span>
            </div>

            <div className="flex flex-col  w-full gap-2 md:px-5 px-3 pt-5">
              <h3 className="md:text-[15px] text-[12px] font-bold text-slate-800 line-clamp-2 ">
                Men's premium t-shirt-Drop shoulder
              </h3>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[20px] font-extrabold text-[#0D2B18]">
                    ৳790
                  </span>

                  <span className="lg:text-[12px] font-semibold text-[9px] text-gray-400 line-through">
                    ৳{700}
                  </span>

                  <span className="lg:text-[12px] text-[9px] font-semibold text-[#FF3F6C]">
                    -{23}%
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex md:px-5 px-3 mb-4 mt-3  w-full md:gap-2 gap-1 ">
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="flex lg:flex-1 w-full items-center justify-center gap-1.5 rounded-sm  bg-gray-900 md:py-2.5 py-1.5 md:text-[10px] text-[9px]  font-semibold text-white transition-colors hover:bg-gray-800"
              >
                <FaCartPlus className="md:h-3.5 h-2.5 w-2.5 md:w-3.5" />
                Add to Cart
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.96 }}
                className="flex lg:flex-1 w-full items-center justify-center gap-1.5 rounded-sm border-1 border-[#0C943D] bg-white md:py-2.5  py-1.5 md:text-[10px] text-[9px] font-semibold text-[#0C943D] transition-colors hover:bg-[#0C943D] hover:text-white"
              >
                <Zap className="md:h-3.5 h-2.5 w-2.5 md:w-3.5" />
                Buy Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default AutoSlider;
