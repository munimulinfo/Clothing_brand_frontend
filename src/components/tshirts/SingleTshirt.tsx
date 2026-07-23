"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Zap,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  ShieldCheck,
  Lock,
  Truck,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { FaShoppingCart } from "react-icons/fa";

const product = {
  breadcrumb: ["T-Shirts", "Polo Shirt", "Premium Designer Edition Polo"],
  badge: "NEW ARRIVAL",
  name: "PREMIUM DESIGNER EDITION DOUBLE PK COTTON POLO",
  rating: 4,
  reviews: 126,
  price: 1140,
  mrp: 1490,
  images: ["#1B2230", "#E5E7EB", "#111827", "#1F2937", "#0F172A"],
  sizes: ["M", "L", "XL", "2XL"],
  description:
    "Crafted from double PK fabric with premium 80% combed compact organic cotton, this polo has a soft, all-day-comfortable handfeel. Regular fit with a classic shirt collar.",
  specs: [
    { label: "Color", value: "Navy, Maroon and White" },
    { label: "Fabric Type", value: "Double PK" },
    { label: "Yarn Count", value: "26/1" },
    { label: "Composition", value: "CVC (80% cotton + 20% polyester)" },
    { label: "GSM", value: "210–220" },
    { label: "Design Panel", value: "Cut & Stitch" },
    { label: "Color Type", value: "Reactive Dye, Enzyme & Silicon Washed" },
  ],
  sizeChart: {
    inch: [
      { size: "M", chest: 39, length: 27.5, sleeve: 8.25 },
      { size: "L", chest: 40.5, length: 28.5, sleeve: 8.5 },
      { size: "XL", chest: 43, length: 29, sleeve: 9 },
      { size: "2XL", chest: 45, length: 30, sleeve: 9.5 },
    ],
    cm: [
      { size: "M", chest: 99, length: 70, sleeve: 21 },
      { size: "L", chest: 103, length: 72.5, sleeve: 21.5 },
      { size: "XL", chest: 109, length: 74, sleeve: 23 },
      { size: "2XL", chest: 114, length: 76, sleeve: 24 },
    ],
  },
};

const TRUST_BADGES = [
  { icon: RotateCcw, label: "Easy Returns & Exchange" },
  { icon: ShieldCheck, label: "Premium Quality" },
  { icon: Lock, label: "Secure Payment" },
  { icon: Truck, label: "Fast Delivery" },
];

const SingleTshirt = () => {
  const [activeImg, setActiveImg] = useState(0);
  const [saved, setSaved] = useState(false);
  const [size, setSize] = useState<string | null>("M");
  const [qty, setQty] = useState(1);

  const discount = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100,
  );
  const nextImg = () => setActiveImg((i) => (i + 1) % product.images.length);
  const prevImg = () =>
    setActiveImg(
      (i) => (i - 1 + product.images.length) % product.images.length,
    );

  return (
    <main className="min-h-screen bg-white px-4 py-6 text-gray-900 sm:px-8 lg:px-12">
      {/* breadcrumb */}
      <div className="mx-auto mb-6 flex max-w-7xl flex-wrap items-center gap-1.5 text-xs text-gray-400">
        <span className="cursor-pointer hover:text-gray-600">Home</span>
        {product.breadcrumb.map((b, i) => (
          <span key={b} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" />
            <span
              className={
                i === product.breadcrumb.length - 1
                  ? "text-gray-500"
                  : "cursor-pointer hover:text-gray-600"
              }
            >
              {b}
            </span>
          </span>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gric-cols gap-10 lg:grid-cols-2">
        {/* ---------------- gallery ---------------- */}
        <div className="h-full">
          <div className="relative  overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
            <div className="absolute left-3 top-3 z-10 rounded-md bg-emerald-600 px-2.5 py-1 text-xs font-bold text-white">
              -{discount}%
            </div>

            <button
              onClick={() => setSaved((s) => !s)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-colors hover:border-gray-300"
              aria-label="Save to wishlist"
            >
              <Heart
                className={cn(
                  "h-4 w-4",
                  saved ? "fill-rose-500 text-rose-500" : "text-gray-500",
                )}
              />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="h-[485px] w-full"
                style={{ backgroundColor: product.images[activeImg] }}
              />
            </AnimatePresence>
          </div>

          <div className="mt-3 flex gap-2">
            {product?.images?.map((bg, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "h-16 w-16 shrink-0 rounded-lg border-2 transition-colors",
                  activeImg === i
                    ? "border-emerald-600"
                    : "border-gray-100 hover:border-gray-300",
                )}
                style={{ backgroundColor: bg }}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ---------------- info ---------------- */}
        <div className=" h-full">
          <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
            {product?.badge}
          </span>

          <h1 className="mt-3 text-2xl font-bold uppercase leading-snug tracking-tight text-gray-900">
            {product?.name}
          </h1>

          <div className="mt-2 flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < product.rating
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-gray-200",
                )}
              />
            ))}
            <span className="ml-1 text-sm text-gray-500">
              ({product.reviews} Reviews)
            </span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold text-gray-900">
              ৳{product.price}
            </span>
            <span className="text-base text-gray-400 line-through">
              ৳{product.mrp}
            </span>
            <span className="rounded-md bg-rose-50 px-2 py-0.5 text-xs font-semibold text-rose-500">
              {discount}% OFF
            </span>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-700">Select Size</p>
            </div>
            <div className="mt-2 flex gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={cn(
                    "flex h-11 w-14 items-center justify-center rounded-lg border text-sm font-semibold transition-colors",
                    size === s
                      ? "border-emerald-600 bg-emerald-600 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-gray-300",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-start gap-2">
            <div className="flex h-12 items-center rounded-lg border border-gray-200">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-full w-9 items-center justify-center text-gray-600 hover:text-gray-900"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center text-sm font-medium">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="flex h-full w-9 items-center justify-center text-gray-600 hover:text-gray-900"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              className="flex h-12 w-full max-w-40 items-center justify-center gap-2 rounded-lg bg-gray-900 text-xs font-semibold text-white transition-colors hover:bg-gray-800"
            >
              <FaShoppingCart className="h-4 w-4" />
              ADD TO CART
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.97 }}
              className="flex h-12 w-full max-w-40 items-center justify-center gap-2 rounded-lg bg-emerald-600 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <Zap className="h-4 w-4 fill-white" />
              BUY NOW
            </motion.button>
          </div>


          <ReturnsExchange />
        </div>
      </div>

      {/* ---------------- details + size chart ---------------- */}
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 border-t border-gray-100 pt-8 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
            Product Details
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-500">
            {product.description}
          </p>

          <dl className="mt-5 flex flex-col gap-2.5">
            {product.specs.map((s) => (
              <div key={s.label} className="flex gap-2 text-sm">
                <dt className="w-32 shrink-0 font-medium text-gray-900">
                  {s.label}
                </dt>
                <dd className="text-gray-500">: {s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-900">
            Size Chart{" "}
            <span className="font-normal normal-case text-gray-400">
              (Expected deviation &lt; 3%)
            </span>
          </h2>
          <Tabs defaultValue="inch" className="mt-3">
            <TabsList className="h-9 rounded-lg bg-gray-100 p-1">
              <TabsTrigger
                value="inch"
                className="rounded-md text-xs font-semibold data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                Inch
              </TabsTrigger>
              <TabsTrigger
                value="cm"
                className="rounded-md text-xs font-semibold data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
              >
                Cm
              </TabsTrigger>
            </TabsList>

            {(["inch", "cm"] as const).map((unit) => (
              <TabsContent key={unit} value={unit} className="mt-4">
                <div className="overflow-x-auto rounded-lg border border-gray-100">
                  <table className="w-full min-w-[360px] border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
                        <th className="px-4 py-2.5 font-medium">Size</th>
                        <th className="px-4 py-2.5 font-medium">Chest Round</th>
                        <th className="px-4 py-2.5 font-medium">Length</th>
                        <th className="px-4 py-2.5 font-medium">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizeChart[unit].map((row) => (
                        <tr key={row.size} className="border-t border-gray-100">
                          <td className="px-4 py-2.5 font-medium text-gray-900">
                            {row.size}
                          </td>
                          <td className="px-4 py-2.5 text-gray-500">
                            {row.chest}
                          </td>
                          <td className="px-4 py-2.5 text-gray-500">
                            {row.length}
                          </td>
                          <td className="px-4 py-2.5 text-gray-500">
                            {row.sleeve}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </main>
  );
};




export default SingleTshirt;

import { Check, ChevronDown } from "lucide-react";
import { RiExchangeFundsFill, RiExchangeFundsLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";

const QUICK_FACTS = [
  "Tell us within 7 days",
  "Free return shipping*",
  "Instant refund on receipt",
];

const ReturnsExchange = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mt-7 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="flex items-center gap-2 text-[15px] font-bold text-gray-900">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
            <TbTruckReturn  className="h-4 w-4  text-emerald-700" strokeWidth={3} />
          </span>
          Easy Returns &amp; Exchange
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-gray-400 transition-transform",
            open && "rotate-180",
          )}
        />
      </button>

      {/* quick facts */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
        {QUICK_FACTS.map((fact) => (
          <span
            key={fact}
            className="flex items-center gap-1.5 text-[13px] text-gray-600"
          >
            <Check className="h-3.5 w-3.5 text-emerald-600" strokeWidth={3} />
            {fact}
          </span>
        ))}
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="mt-4 border-t border-gray-100 pt-4 text-sm leading-relaxed text-gray-600">
          <p>
            Your satisfaction is our priority. If something isn&apos;t right
            with your order, returning it is simple.
          </p>

          <h3 className="mt-4 font-bold text-gray-900">Return Window</h3>
          <p className="mt-1">
            Request a return within{" "}
            <span className="font-semibold text-gray-900">7 days</span> of
            receiving your order.
          </p>

          <h3 className="mt-4 font-bold text-gray-900">Free Return Shipping</h3>
          <p className="mt-1">
            We cover return shipping for defective products, size/color
            mismatch, print issues, or wrong item sent.
          </p>

          <h3 className="mt-4 font-bold text-gray-900">How to Return</h3>
          <ul className="mt-1 flex flex-col gap-1.5">
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
              <span>
                Call our hotline{" "}
                <a
                  href="tel:+8809677666888"
                  className="text-blue-600 hover:underline"
                >
                  +8809677666888
                </a>
                , email{" "}
                <a
                  href="mailto:support@fabrilife.com"
                  className="text-blue-600 hover:underline"
                >
                  support@fabrilife.com
                </a>
                , or message us on{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Facebook
                </a>
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
              Items must be unused, unwashed, with original tags and packaging
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
              We&apos;ll arrange pickup for eligible returns
            </li>
          </ul>

          <h3 className="mt-4 font-bold text-gray-900">Refunds</h3>
          <p className="mt-1">
            Once we receive your return, refunds are processed within{" "}
            <span className="font-semibold text-gray-900">1 business day</span>{" "}
            to your original payment method.
          </p>

          <h3 className="mt-4 font-bold text-gray-900">Our Promise</h3>
          <p className="mt-1">
            We stand behind our products. In rare cases, we may issue a refund
            without requiring return — because your trust matters most.
          </p>

          <div className="mt-5 text-center">
            <a
              href="#"
              className="text-sm text-blue-600 underline underline-offset-2 hover:text-blue-700"
            >
              View Full Return &amp; Refund Policy
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
