"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Star,
  Minus,
  Plus,
  Zap,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { FaShoppingCart } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

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

const sizeData = [
  { size: "M", chest: 38, length: 27, sleeve: 8.5, tolerance: "± 1" },
  { size: "L", chest: 40, length: 28, sleeve: 9, tolerance: "± 1" },
  { size: "XL", chest: 42, length: 29, sleeve: 9.5, tolerance: "± 1" },
  { size: "XXL", chest: 44, length: 30, sleeve: 10, tolerance: "± 1" },
];

const specs = [
  "Organic Ringspun Combed Compact Cotton",
  "100% Cotton",
  "Regular fit, Crew Neck Mid-weight, 5.16 oz/yd\u00B2 (approximately 175 GSM)",
  "Reactive Dye, enzyme, and silicon washed",
  "Preshrunk to minimize shrinkage",
  "Design panels are all fabric; cut and sew",
  "Typography and artworks are normal/high-density screen print",
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" as const },
  }),
};

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

  const sliderImages = [
    "/images/tsirtImages/tsirt01.png",
    "/images/tsirtImages/Screenshot_12.png",
    "/images/tsirtImages/Screenshot_13.png",
    "/images/tsirtImages/Screenshot_14.png",
    "/images/tsirtImages/Screenshot_15.png",
    "/images/tsirtImages/Screenshot_16.png",
    "/images/tsirtImages/Screenshot_17.png",
    "/images/tsirtImages/Screenshot_18.png",
  ];

  return (
    <main className="min-h-screen bg-white px-2 py-6 text-gray-900 sm:px-8 lg:px-12">
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
        <div>
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

            <div className="mt-14 hidden lg:block">
              <h2 className="mb-3 text-lg font-extrabold text-gray-900">
                You may also like
              </h2>
              <div className="mb-6 h-px w-full bg-gray-900" />
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
                {sliderImages.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.35 }}
                    className="overflow-hidden group rounded-md border  border-gray-200 bg-white"
                  >
                    <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                      <Image
                        src={product}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                        alt=""
                        className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>

                    <div className="border-t border-gray-100 px-3 py-2 text-sm">
                      <span className="font-semibold text-gray-900">৳100</span>{" "}
                      <span className="text-gray-400 line-through">৳200</span>
                    </div>

                    <button className="flex w-full items-center justify-center gap-1.5 bg-black py-2.5 text-xs font-semibold text-white transition-colors hover:bg-gray-900">
                      <Plus size={14} className="text-white" strokeWidth={3} />
                      Add to Cart
                    </button>
                  </motion.div>
                ))}

                {/* VIEW MORE */}
              </div>
            </div>
          </div>
          {/* pepole also like this section  */}
        </div>

        {/* ---------------- info ---------------- */}
        <div className=" h-full">
          <span className="inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-600">
            {product?.badge}
          </span>

          <h1 className="mt-3 lg:text-2xl text-lg font-bold uppercase leading-snug tracking-tight text-gray-900">
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
            <span className="lg:text-2xl text-xl font-bold text-gray-900">
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

          <div className="mt-6 flex items-center justify-start gap-1 lg:gap-2">
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
          <div className="mx-auto w-full  space-y-8 py-8">
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="space-y-4 text-sm leading-relaxed text-muted-foreground"
            >
              <p>
                Trust wear Men&apos;s Premium Quality t-shirt offers a smoother,
                silky feel and a more structured, mid-weight fit than regular
                t-shirts. The t-shirts are made with the finest quality Combed
                Compact Cotton, featuring an astonishing 175 GSM on just
                26&apos;s cotton, providing a smooth and compact construction.
              </p>
            </motion.div>

            {/* Detailed specification */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <h3 className="mb-3 text-base font-semibold text-foreground">
                Detailed specification
              </h3>
              <ul className="space-y-2">
                {specs.map((item, i) => (
                  <motion.li
                    key={item}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <Separator />

            {/* Size chart */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base uppercase font-medium  text-foreground">
                  Size chart
                </h3>
              </div>

              <Card className="overflow-hidden rounded-lg border-none py-0 shadow-sm">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-zinc-800 hover:bg-zinc-800">
                        <TableHead className="py-4 text-xs font-bold text-center uppercase tracking-wide text-white">
                          Size
                        </TableHead>
                        <TableHead className="py-4 text-xs font-bold uppercase tracking-wide text-white text-center">
                          Chest
                        </TableHead>
                        <TableHead className="py-4 text-xs font-bold uppercase tracking-wide text-white text-center">
                          Length
                        </TableHead>
                        <TableHead className="py-4 text-xs font-bold uppercase tracking-wide text-white text-center">
                          Sleeve
                        </TableHead>
                        <TableHead className="py-4 text-xs font-bold uppercase tracking-wide text-white text-center">
                          Tolerance
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sizeData.map((row, i) => (
                        <motion.tr
                          key={row.size}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07, duration: 0.35 }}
                          className="border-b border-zinc-100 last:border-0 odd:bg-zinc-100/70 even:bg-zinc-50"
                        >
                          <TableCell className="bg-zinc-800 py-4 text-base text-center  font-semibold text-white">
                            {row.size}
                          </TableCell>
                          <TableCell className="py-4 text-base font-semibold text-zinc-800 text-center">
                            {row.chest}
                          </TableCell>
                          <TableCell className="py-4 text-base font-semibold text-zinc-800 text-center">
                            {row.length}
                          </TableCell>
                          <TableCell className="py-4 text-base font-semibold text-zinc-800 text-center">
                            {row.sleeve}
                          </TableCell>
                          <TableCell className="py-4 text-base font-semibold text-zinc-800 text-center">
                            {row.tolerance}
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleTshirt;

import {
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  CalendarDays,
  Truck,
  PackageSearch,
  Wallet,
  Handshake,
  BadgeCheck,
  FileText,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const QUICK_FACTS = [
  "Tell us within 7 days",
  "Free return shipping*",
  "Instant refund on receipt",
];

const SECTIONS = [
  {
    icon: CalendarDays,
    title: "Return Window",
    body: (
      <p className="mt-1">
        Request a return within{" "}
        <span className="font-semibold text-gray-900">7 days</span> of receiving
        your order.
      </p>
    ),
  },
  {
    icon: Truck,
    title: "Free Return Shipping",
    body: (
      <p className="mt-1">
        We cover return shipping for defective products, size/color mismatch,
        print issues, or wrong item sent.
      </p>
    ),
  },
  {
    icon: PackageSearch,
    title: "How to Return",
    body: (
      <ul className="mt-1 flex flex-col gap-1.5">
        <li className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
          <span>
            Call our hotline{" "}
            <a
              href="tel:+8809677666888"
              className="text-emerald-700 hover:underline"
            >
              +8809677666888
            </a>
            , email{" "}
            <a
              href="mailto:support@fabrilife.com"
              className="text-emerald-700 hover:underline"
            >
              support@fabrilife.com
            </a>
            , or message us on{" "}
            <a href="#" className="text-emerald-700 hover:underline">
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
    ),
  },
  {
    icon: Wallet,
    title: "Refunds",
    body: (
      <p className="mt-1">
        Once we receive your return, refunds are processed within{" "}
        <span className="font-semibold text-gray-900">1 business day</span> to
        your original payment method.
      </p>
    ),
  },
  {
    icon: Handshake,
    title: "Our Promise",
    body: (
      <p className="mt-1">
        We stand behind our products. In rare cases, we may issue a refund
        without requiring return — because your trust matters most.
      </p>
    ),
  },
];

const ReturnsExchange = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-7 w-full rounded-sm bg-white p-5 shadow-sm">
      {/* header */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="flex items-center gap-2.5 text-[15px] font-bold text-gray-900">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
            <RotateCcw className="text-emerald-600" size={16} />
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
      <div className="mt-3 flex flex-wrap items-center  gap-y-2 pl-2">
        {QUICK_FACTS.map((fact, i) => (
          <span key={fact} className="flex items-center gap-3">
            {i > 0 && <span className="h-3 w-px bg-gray-200" />}
            <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              {fact}
            </span>
          </span>
        ))}
      </div>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="mt-4 text-sm leading-relaxed text-gray-600">
          {/* satisfaction banner */}
          <div className="flex items-start gap-3 rounded-xl bg-emerald-50 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-600">
              <ShieldCheck className="text-white" size={18} />
            </span>
            <div>
              <p className="font-bold text-gray-900">
                Your satisfaction is our priority.
              </p>
              <p className="mt-0.5">
                If something isn&apos;t right with your order, returning it is
                simple.
              </p>
            </div>
          </div>

          {/* icon sections */}
          <div className="mt-1">
            {SECTIONS.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className={cn(
                  "flex gap-4 py-4",
                  i !== 0 && "border-t border-gray-100",
                )}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
                  <Icon className="text-emerald-600" size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  {body}
                </div>
              </div>
            ))}
          </div>

          {/* footer badge */}
          <div className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-emerald-50 p-3 text-[13px] font-medium text-emerald-800">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Hassle-free returns. No stress, just easy.
          </div>

          {/* CTA */}
          <a
            href="#"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-800 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
          >
            <FileText size={16} />
            View Full Return &amp; Refund Policy
            <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
