"use client";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";
import { ShoppingCart, Zap } from "lucide-react";
import Link from "next/link";

export function TshirtCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative border   border-[#DAD4C6] bg-white"
    >
      {/* swing tag discount */}
      <div className="absolute drop-shadow-xl rounded-r-2xl left-0 top-3 z-10 flex items-center gap-1 bg-[#0C943D] hover:bg-[#0EA845] px-2.5 py-1 text-[#F7F5EE] shadow-sm">
        <span className="font-mono text-xs font-bold">-{discount}%</span>
      </div>

      <div className=" aspect-[4/5] overflow-hidden bg-[#F1EEE4]">
        <Link href={`/shirts/${product.id}`}>
          <motion.img
            src={product?.image}
            alt={product?.name}
            className="h-full w-full object-cover cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </Link>
      </div>
      <div className="border-t border-dashed  border-[#DAD4C6] px-2">
        <div className="px-2 py-3.5">
          <h3 className="line-clamp-1 font-semibold min-h-[2.5rem] font-display text-[14px]  leading-tight tracking-wide text-[#181818]">
            {product?.name}
          </h3>

          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              ৳{product.price}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ৳{product.mrp}
            </span>
            <span className="ml-auto rounded-full  bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-[#0C943D]">
              Save ৳{product.mrp - product.price}
            </span>
          </div>
        </div>
        <div className=" mb-2 flex gap-2 ">
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-sm  bg-gray-900 py-2.5 text-[10px] font-semibold text-white transition-colors hover:bg-gray-800"
          >
            <FaCartPlus className="h-3.5 w-3.5" />
            Add to Cart
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.96 }}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-sm border-1 border-[#0C943D] bg-white py-2.5 text-[10px] font-semibold text-[#0C943D] transition-colors hover:bg-[#0C943D] hover:text-white"
          >
            <Zap className="h-3.5 w-3.5" />
            Buy Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
