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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      <div className="mx-auto flex max-w-7xl gap-6">
        <div className="hidden md:block">
          <Sidebar
            activeStyles={activeStyles}
            onToggleStyle={toggleStyle}
            activeSizes={activeSizes}
            onToggleSize={toggleSize}
            onClear={clearAll}
          />
        </div>

        <section className="pb-10 lg:pt-10 pt-5 bg-white">
          <div className="mb-4 flex lg:flex-row flex-col lg:items-center justify-between gap-3 border-b border-[#DAD4C6] pb-3">
            <div className="lg:pl-0 px-2">
              <InputGroup className="lg:w-78 w-full h-10 rounded-sm text-black bg-gray-50 focus:border-none">
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

            <div className="flex flex-row gap-2 px-2">
              <Select
                value={sort}
                onValueChange={(value) =>
                  setSort(value as (typeof SORTS)[number])
                }
              >
                <SelectTrigger className="w-full lg:hidden block  border shadow rounded-sm text-[11px] uppercase tracking-wide focus:ring-0">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent
                  sideOffset={2}
                  className="rounded-sm min-w-[188px] min-h-[100px]"
                >
                  {SORTS.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="text-[11px] uppercase tracking-wide  rounded-none"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={sort}
                onValueChange={(value) =>
                  setSort(value as (typeof SORTS)[number])
                }
              >
                <SelectTrigger className="w-full border lg:w-48 shadow rounded-sm text-[11px] uppercase tracking-wide focus:ring-0">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent
                  sideOffset={2}
                  className="rounded-sm min-w-[188px] min-h-[100px]"
                >
                  {SORTS.map((item) => (
                    <SelectItem
                      key={item}
                      value={item}
                      className="text-[11px] uppercase tracking-wide rounded-none"
                    >
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <TshirtGrid products={filtered} />
        </section>
      </div>
    </main>
  );
};

export default AllTshirts;
