"use client";

import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type CartLineItem = {
  id: string;
  name: string;
  imageUrl?: string;
  availableSizes: string[];
  size: string;
  qty: number;
  originalPrice: number;
  salePrice: number;
};

const QTY_OPTIONS = Array.from({ length: 10 }, (_, i) => i + 1);

// Swap the symbol/locale here if you need a different currency.
const currency = (n: number) => `৳${n.toLocaleString("en-BD")}`;

interface CartItemRowProps {
  item: CartLineItem;
  onSizeChange: (id: string, size: string) => void;
  onQtyChange: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  onAddSize: (id: string) => void;
}

export function CartItemRow({
  item,
  onSizeChange,
  onQtyChange,
  onRemove,
  onAddSize,
}: CartItemRowProps) {
  return (
    <div className="flex gap-4 border-b border-slate-100 p-6 last:border-b-0">
      <div className="flex h-[133px] w-26 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-slate-100">
        {item.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imageUrl}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-[11px] text-slate-400">No image</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="cursor-pointer  font-semibold text-sm hover:text-emerald-700">
          {item.name}
        </h3>

        <div className="mt-3 flex gap-2">
          <div>
            <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
              Size
            </p>
            <Select
              value={item.size}
              onValueChange={(value) => onSizeChange(item.id, value as string)}
            >
              <SelectTrigger className="h-9 w-22 rounded-sm shadow-xs bg-white">
                <SelectValue className=" text-sm font-semibold transition-colors" />
              </SelectTrigger>
              <SelectContent
            
                className="rounded-xs  border-gray-100"
              >
              
                  {item.availableSizes.map((s) => (
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
            <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
              Quantity
            </p>
            <Select
              value={String(item.qty)}
              onValueChange={(value) => onQtyChange(item.id, Number(value))}
            >
              <SelectTrigger className="h-9 w-22 rounded-sm  border shadow-xs  bg-white">
                <SelectValue className="  text-sm font-semibold transition-colors" />
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
          
        </div>

        <div className="mt-3 ">
         
          <Button
            size="sm"
            variant="secondary"
            className="h-8 gap-1 text-xs bg-red-700 text-white font-bold rounded-sm"
            onClick={() => onAddSize(item.id)}
          >
            <Trash2 className="h-4 w-4" strokeWidth={3} />
            Remove
          </Button>
        </div>
      </div>

      <div className="shrink-0 text-right">
        {item.originalPrice > item.salePrice && (
          <p className="text-sm text-slate-400 line-through">
            {currency(item.originalPrice)}
          </p>
        )}
        <p className="font-semibold text-slate-900">
          {currency(item.salePrice * item.qty)}
        </p>
      </div>
    </div>
  );
}
