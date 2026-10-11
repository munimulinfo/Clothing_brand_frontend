"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Geist } from "next/font/google";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CartItem,
  removeFromCart,
  updateCartItem,
} from "@/redux/featuresSlice/cartItemsSlice";
import { useAppDispatch } from "@/redux/hook";

const manrope = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const availableSizes = ["M", "L", "XL", "XXL"];
const QTY_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);
// Swap the symbol/locale here if you need a different currency.
const currency = (n: number) => `৳${n.toLocaleString("en-BD")}`;

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const dispatch = useAppDispatch();

  const updateProductSize = (
    productId: string,
    size: string,
    quantity: number,
  ) => {
    dispatch(
      updateCartItem({
        productId: productId,
        quantity: quantity,
        size: size,
      }),
    );
  };

  return (
    <div
      className={`${manrope.className} flex gap-4 border-b border-slate-100 md:p-6 p-4 last:border-b-0`}
    >
      <div className="flex md:h-[133px] md:w-26 h-26  w-22 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-slate-100">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-[11px] text-slate-400">No image</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="cursor-pointer  font-semibold md:text-sm text-[10px] hover:text-emerald-700">
          {item.name}
        </h3>

        <div className="text-right flex mt-3 justify-start items-end gap-2 ">
          <p className="font-semibold md:text-[18px] text-sm text-slate-900">
            {currency(item.price * item.quantity)}
          </p>
          {item.oldPrice > item.price && (
            <p className="md:text-sm text-[10px]  text-slate-400 line-through">
              {currency(item.oldPrice)}
            </p>
          )}
        </div>

        <div className="mt-3 flex flex-wrap md:gap-2 gap-1.5 ">
          <div>
            <p className="mb-1 md:text-[11px] text-[8px] font-medium uppercase tracking-wide text-slate-500">
              Size
            </p>
            <Select
              value={item.size}
              onValueChange={(value) =>
                updateProductSize(item.productId, String(value), item.quantity)
              }
            >
              <SelectTrigger className="md:!h-9 md:w-22 !h-6 w-18 rounded-sm shadow-xs bg-white">
                <SelectValue className=" md:text-sm text-[11px] font-semibold transition-colors" />
              </SelectTrigger>
              <SelectContent className="rounded-xs  border-gray-100">
                {availableSizes.map((s) => (
                  <SelectItem
                    key={s}
                    value={s}
                    className=" border   rounded-none  text-sm font-semibold transition-colors"
                  >
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <p className="mb-1 md:text-[11px] text-[8px] font-medium uppercase tracking-wide text-slate-500">
              Quantity
            </p>
            <Select
              value={String(item.quantity)}
              onValueChange={(value) =>
                updateProductSize(
                  item?.productId,
                  item?.size as string,
                  Number(value),
                )
              }
            >
              <SelectTrigger className="md:!h-9 md:w-22 w-18 !h-6 rounded-sm  border shadow-xs  bg-white">
                <SelectValue className=" md:text-sm text-[11px] font-semibold transition-colors" />
              </SelectTrigger>
              <SelectContent>
                {QTY_OPTIONS.map((q) => (
                  <SelectItem
                    key={q}
                    value={String(q)}
                    className=" border rounded-none  text-sm font-semibold transition-colors"
                  >
                    {q}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="md:mt-5 mt-1 ">
            <Button
              size="sm"
              variant="secondary"
              className="md:h-9 h-6 gap-1 w-full md:w-24 md:text-xs text-[11px] bg-red-700 text-white font-bold rounded-sm"
              onClick={() =>
                dispatch(
                  removeFromCart({
                    productId: item.productId,
                    size: item.size as string,
                  }),
                )
              }
            >
              <Trash2 className="h-4 w-4 hidden md:block" strokeWidth={3} />
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
