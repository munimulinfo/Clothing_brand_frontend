"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

const sizes = ["M", "L", "XL", "2XL"];

type AddToCartModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void; // called when user closes (X, overlay click, Esc)
  productImage: string;
  productTitle: string;
  onAddToCart?: (size: string) => void;
};

const AddToCartModal = ({
  open,
  onOpenChange,
  productImage,
  productTitle,
  onAddToCart,
}: AddToCartModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <Dialog  open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md gap-0  overflow-hidden w-[calc(100vw-20px)] lg:w-[calc(100vw)] p-0 [&>button]:hidden">
        {/* Dark header */}
        <div className="relative flex items-center justify-center bg-emerald-700 px-5 py-4">
          <DialogTitle className="text-base font-semibold text-white">
            Select Options
          </DialogTitle>
          <DialogClose className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30">
            <X className="h-4 w-4" />
          </DialogClose>
        </div>

        {/* Product info */}
        <div className="p-5 pb-6">
          <div className="mx-auto mb-4 overflow-hidden flex justify-center">
            <Image
              src={productImage}
              alt={productTitle}
              width={250}
              height={280}
              className="object-cover rounded-md"
            />
          </div>
          <p className="text-center text-sm font-medium leading-snug">
            {productTitle}
          </p>

        </div>

        {/* Size selector */}
        <div className="border-t border-gray-200 px-5 py-5">
          <p className="mb-5 text-center text-sm font-medium">Choose Size</p>
          <div className="flex justify-center gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`h-11 w-14 rounded-md border text-sm font-medium transition ${
                  selectedSize === size
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-emerald-600 text-gray-700 hover:border-gray-400"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart */}
        <div className="px-5 pb-5">
          <Button
            disabled={!selectedSize}
            onClick={() => selectedSize && onAddToCart?.(selectedSize)}
            className="w-full bg-emerald-700 py-6 text-base font-semibold hover:bg-emerald-600"
          >
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default AddToCartModal;
