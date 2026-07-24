"use client";

import { useState } from "react";
import { CartItemRow } from "./CartItemRow";
import { CartSummary } from "./CartSummary";

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
// Sample data — replace with items from your cart store/API.
const initialItems = [
  {
    id: "1",
    name: "Men's Performance Track Trouser — StormFit",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    size: "XL",
    qty: 2,
    originalPrice: 1010,
    salePrice: 770,
  },
  {
    id: "2",
    name: "Teens Everyday Pajama — Cloud White",
    availableSizes: ["S", "M", "L", "XL"],
    size: "L",
    qty: 1,
    originalPrice: 1100,
    salePrice: 940,
  },
  {
    id: "3",
    name: "Girls Relaxed Tunic — Amberleaf",
    availableSizes: ["S", "M", "L"],
    size: "M",
    qty: 3,
    originalPrice: 3500,
    salePrice: 2190,
  },
];

const CartItem = () => {
  const [items, setItems] = useState<CartLineItem[]>(initialItems);

  const updateSize = (id: string, size: string) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, size } : i)));

  const updateQty = (id: string, qty: number) =>
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));

  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

  const addSize = (id: string) => {
    // Hook this up to whatever "add another size for this product" flow you use.
    console.log("Add size for item", id);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Cart Items
            </h2>
          </div>

          {items.length === 0 ? (
            <div className="p-10 text-center text-sm text-slate-500">
              Your cart is empty.
            </div>
          ) : (
            items.map((item) => (
              <CartItemRow
                key={item.id}
                item={item}
                onSizeChange={updateSize}
                onQtyChange={updateQty}
                onRemove={removeItem}
                onAddSize={addSize}
              />
            ))
          )}
        </section>

        <CartSummary items={items} />
      </div>
    </div>
  );
};

export default CartItem;
