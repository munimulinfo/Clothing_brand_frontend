"use client";
import { CartItemRow } from "./CartItemRow";
import { CartSummary } from "./CartSummary";
import { useAppSelector } from "@/redux/hook";


// Sample data — replace with items from your cart store/API.
const initialItems = [
  {
    id: "1",
    name: "Men's Performance Track Trouser — StormFit",
    availableSizes: ["M", "L", "XL", "XXL"],
    size: "XL",
    qty: 2,
    originalPrice: 1010,
    salePrice: 770,
  },
  {
    id: "2",
    name: "Teens Everyday Pajama — Cloud White",
    availableSizes: ["M", "L", "XL"],
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
  const items = useAppSelector((state) => state.cart);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_500px]">
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
              Cart Items
            </h2>
          </div>

          {items?.length === 0 ? (
            <div className="p-10 text-center text-sm text-slate-500">
              Your cart is empty.
            </div>
          ) : (
            items?.map((item, index) => <CartItemRow key={index} item={item} />)
          )}
        </section>

        <CartSummary items={initialItems} />
      </div>
    </div>
  );
};

export default CartItem;
