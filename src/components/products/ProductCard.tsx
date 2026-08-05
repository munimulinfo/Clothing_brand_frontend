"use client";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Geist } from "next/font/google";
import { TagIcon } from "@phosphor-icons/react/dist/ssr";
import { FaCartPlus } from "react-icons/fa";
import { useState } from "react";
import AddToCartModal from "./AddToCartModal";
interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  save?: number;
}

const manrope = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ProductCard = ({
  id,
  title,
  image,
  price,
  oldPrice,
  discount,
  save,
}: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        className={
          manrope.className +
          " relative overflow-hidden lg:rounded-[28px] rounded-lg  border-none p-0 transition-all duration-300 hover:-translate-y"
        }
      >
        {discount && (
          <div className="absolute left-4 top-4 z-20 rounded-sm bg-emerald-700 lg:px-3 px-2 px:py-1 py-1 lg:text-[10px] text-[9px] font-bold text-white shadow">
            NEW
          </div>
        )}

        <Link href={`/products/${id}`}>
          <div className="relative w-full lg:h-78 h-52 overflow-hidden bg-[#f8f8f8]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Content */}
        <div className="lg:px-4 px-2 pb-4">
          <h3
            className={`line-clamp-2  md:text-[17px] lg:mb-2 font-semibold text-[10px] leading-5  text-black  $`}
          >
            {title} Premium
          </h3>

          {/* Save */}
          {save && (
            <div className="inline-flex items-center gap-1 rounded-sm md:mt-1 md:mb-0 mt-2 mb-1 bg-emerald-700 hover:bg-emerald-600 px-2   py-1 md:text-[12px] text-[8px] font-semibold text-white">
              <TagIcon weight="fill" className="md:text-[13px] tet-[10px]" />
              Save ৳{save}
            </div>
          )}

          {/* Price */}
          <div className="flex items-end justify-between">
            <div className="flex items-center gap-2">
              <span className="lg:text-[22px] text-sm font-extrabold text-black">
                <span className="font-extrabold md:text-[16px] text-sm">৳</span>
                {price}
              </span>

              {oldPrice && (
                <span className="lg:text-[13px] md:mt-1 mt-0.5 text-[10px] text-gray-400 line-through">
                  ৳{oldPrice}
                </span>
              )}

              {discount && (
                // <div className=" md:rounded-sm rounded-[3px] bg-[#FF3F6C] md:px-3 px-1.5 px:py-1 py-0.5 lg:text-xs text-[8px] font-bold text-white shadow">
                //   -{discount}%
                // </div>
                <span className="lg:text-[13px] mt-1 text-[10px] font-semibold text-[#FF3F6C]">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Cart */}
            <button
              onClick={() => setOpen(true)}
              className="lg:h-12 h-8 flex justify-center items-center cursor-pointer lg:w-12 w-8 rounded-full bg-black transition hover:scale-110 hover:bg-[#FF3F6C]"
            >
              <FaCartPlus className="lg:text-[20px] text-sm text-white" />
            </button>
          </div>
        </div>
      </Card>

      <AddToCartModal
        open={open}
        onOpenChange={setOpen}
        productImage={image}
        productTitle="Spain 2026 World Cup Home Jersey - Fan Edition (Fabrilife Original)"
        onAddToCart={(size) => {
          console.log("Added to cart:", size);
          setOpen(false);
        }}
      />
    </>
  );
};

export default ProductCard;
