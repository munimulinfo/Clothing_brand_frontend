"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { TshirtCard } from "./TshirtCard";

export function TshirtGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid  grid-cols-2 gap-2 px-2 lg:px-0 lg:gap-4 md:grid-cols-3 lg:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {products.map((p, i) => (
          <motion.div key={p.id} layout exit={{ opacity: 0, scale: 0.95 }}>
            <TshirtCard product={p} index={i} />
          </motion.div>
        ))}
      </AnimatePresence>

      {products.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="col-span-full py-16 text-center font-mono text-sm text-[#9A8F72]"
        >
          No tees match these filters yet — try clearing one.
        </motion.p>
      )}
    </div>
  );
}