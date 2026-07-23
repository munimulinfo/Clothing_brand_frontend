"use client";
import { useMemo, useState } from "react";
import { Sidebar } from "../common/Sidebar";
import { products } from "@/lib/data";
import { TshirtGrid } from "./TshirtGrid";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Search } from "lucide-react";

const SORTS = ["Popular", "Price: Low to High", "Price: High to Low"] as const;

const AllTshirts = () => {
  const [activeStyles, setActiveStyles] = useState<string[]>([]);
  const [activeSizes, setActiveSizes] = useState<string[]>([]);
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Popular");

  const toggleStyle = (v: string) =>
    setActiveStyles((s) =>
      s.includes(v) ? s.filter((x) => x !== v) : [...s, v],
    );

  const toggleSize = (v: string) =>
    setActiveSizes((s) =>
      s.includes(v) ? s.filter((x) => x !== v) : [...s, v],
    );

  const clearAll = () => {
    setActiveStyles([]);
    setActiveSizes([]);
  };

  const filtered = useMemo(() => {
    let list = products;
    if (activeStyles.length) {
      list = list.filter((p) => activeStyles.includes(p.style));
    }
    if (sort === "Price: Low to High")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: High to Low")
      list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeStyles, sort]);

  return (
    <main>
      <div className="mx-auto flex max-w-[1400px] gap-6">
        <Sidebar
          activeStyles={activeStyles}
          onToggleStyle={toggleStyle}
          activeSizes={activeSizes}
          onToggleSize={toggleSize}
          onClear={clearAll}
        />

        <section className="flex-1 pb-10 pt-10 bg-white">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#DAD4C6] pb-3">
            <div>
              <InputGroup className="max-w-xs rounded-none text-black bg-red-50">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                  <Search />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  {" "}
                  {filtered.length} item{filtered.length !== 1 && "s"}
                </InputGroupAddon>
              </InputGroup>
            </div>

            <div className="flex items-center gap-2">
              {SORTS.map((s) => (
                <Button
                  key={s}
                  variant={"link"}
                  onClick={() => setSort(s)}
                  className={` text-[11px] uppercase tracking-wide transition-colors ${
                    sort === s
                      ? "text-[#181818] underline underline-offset-4"
                      : "text-[#080601] hover:text-[#181818]"
                  }`}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>

          <TshirtGrid products={filtered} />
        </section>
      </div>
    </main>
  );
};

export default AllTshirts;
