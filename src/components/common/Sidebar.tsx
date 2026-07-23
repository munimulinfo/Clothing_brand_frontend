"use client";

import { motion } from "framer-motion";
import {
  Shirt,
  CircleDashed,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { styleFilters } from "../../lib/data";
import { FaTshirt } from "react-icons/fa";

type Props = {
  activeStyles: string[];
  onToggleStyle: (value: string) => void;
  activeSizes: string[];
  onToggleSize: (value: string) => void;
  onClear: () => void;
};

const ICONS: Record<string, typeof Shirt> = {
  oversized: CircleDashed,
};

export function Sidebar({ activeStyles, onToggleStyle, onClear }: Props) {
  const totalCount = styleFilters.reduce((sum, f) => sum + f.count, 0);
  const allActive = activeStyles.length === 0;

  return (
    <aside
      className={`w-72 lg:shrink-0 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.06)]  sticky bg-white top-20 h-[calc(100vh-5rem)]`}
    >
      <div className="sticky pt-6 flex h-full flex-col">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            Find Your Perfect Tee
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            Explore premium styles crafted for everyday confidence.
          </p>
        </div>

        <ul className="mt-6 flex flex-col gap-2.5 overflow-y-auto pr-2">
          <motion.li
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClear}
              className={`group flex w-full items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 ${
                allActive
                  ? "border-transparent bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg"
                  : "border-gray-200 bg-white hover:border-green-500 hover:bg-green-50"
              }`}
            >
              <span className="flex items-center gap-3">
                <FaTshirt
                  className={cn(
                    "h-4 w-4",
                    allActive ? "text-white" : "text-blue-300",
                  )}
                />
                <span className="text-sm font-semibold">All T-Shirt</span>
              </span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  allActive
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {totalCount}
              </span>
            </button>
          </motion.li>

          {styleFilters?.map((f, i) => {
            const active = activeStyles.includes(f.value);
            const Icon = ICONS[f.value] ?? Shirt;
            return (
              <motion.li
                key={f.value}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <button
                  onClick={() => onToggleStyle(f.value)}
                  className={`group flex w-full items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 ${
                    active
                      ? "border-transparent bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg"
                      : "border-gray-200 bg-white hover:border-green-500 hover:bg-green-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-sm font-medium">{f.label}</span>
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {78}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        <div className="relative mt-auto md:hidden lg:block overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-white p-5">
          <h4 className="mb-4 font-semibold text-gray-900">Why Trust Wear?</h4>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-green-600" size={20} />
              <span className="text-sm text-gray-600">Premium Fabric</span>
            </div>

            <div className="flex items-center gap-3">
              <Truck className="text-green-600" size={20} />
              <span className="text-sm text-gray-600">
                Fast Nationwide Delivery
              </span>
            </div>

            <div className="flex items-center gap-3">
              <RotateCcw className="text-green-600" size={20} />
              <span className="text-sm text-gray-600">Easy Return Policy</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
