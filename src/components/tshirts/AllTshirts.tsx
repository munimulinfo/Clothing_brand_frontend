"use client";
import { useEffect, useMemo, useState } from "react";
import { products } from "@/lib/data";
import { TshirtGrid } from "./TshirtGrid";
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
const SORTS = ["Popular", "Price Low to High", "Price High to Low"] as const;
export const categories = [
  {
    name: "All T-Shirts",
    value: "",
  },
  {
    name: "Polo",
    value: "polo",
  },
  {
    name: "Oversized",
    value: "oversized",
  },
  {
    name: "Regular Fit",
    value: "regular",
  },
  {
    name: "Drop Shoulder",
    value: "drop-shoulder",
  },
  {
    name: "Hoodie",
    value: "hoodie",
  },
];

const AllTshirts = () => {
  const [activeStyles, setActiveStyles] = useState<string>("");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Popular");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = useMemo(() => {
    let list = products;
    if (activeStyles) {
      list = list.filter((p) => p.style === activeStyles);
    }
    if (sort === "Price Low to High")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price High to Low")
      list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [activeStyles, sort]);

  return (
    <div className="mx-auto  max-w-7xl pb-10 lg:pt-10 pt-5">
      <div
        className={`sticky top-[75px] md:top-20 z-50 transition-all duration-100  ${
          isSticky
            ? "bg-white backdrop-blur-md shadow-lg pb-2 pt-8 px-2 rounded-b-sm "
            : "bg-white py-2"
        }`}
      >
        <div className="mb-4 flex md:flex-row flex-col md:items-center justify-between w-full gap-3">
          <div className="lg:pl-0 px-2">
            <InputGroup className="md:w-[500px]  w-full h-11 rounded-sm px-1 text-black bg-gray-50 focus:border-none">
              <InputGroupInput
                className="md:text-sm text-xs"
                placeholder="Search for t-shirts..."
              />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end" className="md:text-sm !text-xs">
                {" "}
                {filtered.length} item{filtered.length !== 1 && "s"}
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="flex flex-row  gap-2 px-2">
            <Select
              value={sort}
              onValueChange={(value) =>
                setSort(value as (typeof SORTS)[number])
              }
            >
              <SelectTrigger className=" border !h-10 shadow rounded-sm text-[11px] uppercase tracking-wide focus:ring-0">
                <span className="text-gray-500">Sort by:</span>
                <SelectValue placeholder="Popular" />
              </SelectTrigger>

              <SelectContent
                side="bottom"
                sideOffset={2}
                className="rounded-sm min-w-[188px] min-h-[150px]"
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
            {/* for mobile */}
            <Select
              value={activeStyles}
              onValueChange={(value) => setActiveStyles(value as string)}
            >
              <SelectTrigger className="w-full md:hidden !h-10   lg:w-48 shadow rounded-sm text-[11px] uppercase tracking-wide focus:ring-0">
                <SelectValue placeholder="All T-Shirts" />
              </SelectTrigger>

              <SelectContent
                sideOffset={2}
                side="bottom"
                className="rounded-sm"
              >
                {categories.map((item, index) => (
                  <SelectItem
                    key={index}
                    value={item?.value}
                    className="text-[11px] uppercase tracking-wide rounded-none"
                  >
                    {item?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="hidden items-center gap-3 my-6 md:flex ">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveStyles(category.value)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeStyles === category.value
                  ? "bg-green-700 text-white shadow-md font-semibold shadow-green-600/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <TshirtGrid products={filtered} />
      </div>
    </div>
  );
};

export default AllTshirts;
