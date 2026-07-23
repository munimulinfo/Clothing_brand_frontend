export type Product = {
  id: string;
  name: string;
  style: "polo" | "drop-shoulder" | "oversized" | "regular" | "hoodie";
  price: number;
  mrp: number;
  image: string;
  tag?: string;
};

export const styleFilters = [
  { value: "polo", label: "Polo", count: 149 },
  { value: "drop-shoulder", label: "Drop Shoulder", count: 88 },
  { value: "oversized", label: "Oversized", count: 62 },
  { value: "regular", label: "Regular Fit", count: 351 },
  { value: "hoodie", label: "Hoodie", count: 30 },
] as const;

export const sizeFilters = ["S", "M", "L", "XL", "XXL"];

export const products: Product[] = [
  {
    id: "1",
    name: "Metro Edition Full Sleeve Tee — Whitespace",
    style: "regular",
    price: 750,
    mrp: 980,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Urban Spirit Tee — Metro",
    style: "drop-shoulder",
    price: 690,
    mrp: 900,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Winindow Graphic Tee",
    style: "oversized",
    price: 649,
    mrp: 850,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Classic Pique Polo",
    style: "polo",
    price: 890,
    mrp: 1150,
    image:
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Bold Stripe Tee — Maroon",
    style: "regular",
    price: 610,
    mrp: 750,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Boxy Drop-Shoulder Tee",
    style: "drop-shoulder",
    price: 730,
    mrp: 960,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "7",
    name: "Cozy Comfort Oversized Tee",
    style: "oversized",
    price: 700,
    mrp: 920,
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "8",
    name: "Signature Polo — Slate",
    style: "polo",
    price: 820,
    mrp: 1080,
    image:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=800&auto=format&fit=crop",
  },
];