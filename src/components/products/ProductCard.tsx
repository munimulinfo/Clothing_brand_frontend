"use client";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { TagIcon } from "@phosphor-icons/react/dist/ssr";
import { FaCartPlus } from "react-icons/fa";
interface ProductCardProps {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  save?: number;
}

const ProductCard = ({
  id,
  title,
  image,
  price,
  oldPrice,
  discount,
  save,
}: ProductCardProps) => {
  return (
    <Card className=" relative overflow-hidden lg:rounded-2xl rounded-lg  border-none p-0 transition-all duration-300 hover:-translate-y">
      {discount && (
        <div className="absolute left-4 top-4 z-20 rounded-sm bg-[#FF3F6C] lg:px-3 px-2 px:py-1 py-0.5 lg:text-xs text-[9px] font-bold text-white shadow">
          -{discount}%
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
          className={`line-clamp-2 lg:text-[17px] font-normal leading-5  text-black  $`}
        >
          {title} lokk heavy by the way
        </h3>

        {/* Save */}
        {save && (
          <div className="inline-flex items-center gap-1 mt-2 rounded-sm bg-[#0C943D] hover:bg-[#0EA845] px-2  py-0.5 lg:text-[12px] text-[9px] font-semibold text-white">
            <TagIcon weight="fill" className="lg:text-lg tet-xs" />
            Save ৳{save}
          </div>
        )}

        {/* Price */}
        <div className="flex items-end justify-between  ">
          <div>
            <div className="flex items-center gap-2">
              <span className="lg:text-[22px] text-sm font-semibold text-black">
                <span className="font-medium text-[16px]">৳</span>
                {price}
              </span>

              {oldPrice && (
                <span className="lg:text-[12px] text-[9px] text-gray-400 line-through">
                  ৳{oldPrice}
                </span>
              )}

              {discount && (
                <span className="lg:text-[12px] text-[9px] font-semibold text-[#FF3F6C]">
                  -{discount}%
                </span>
              )}
            </div>
          </div>

          {/* Cart */}
          <button className="lg:h-12 h-8 flex justify-center items-center cursor-pointer lg:w-12 w-8 rounded-full bg-black transition hover:scale-110 hover:bg-[#FF3F6C]">
            <FaCartPlus className="lg:text-[20px] text-sm text-white" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
