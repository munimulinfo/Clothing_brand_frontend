"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface SectionHeadingProps {
  icon: LucideIcon;
  children: ReactNode;
}
import {
  User,
  MapPin,
  Wallet,
  CreditCard,
  Smartphone,
  Package,
  Lock,
  Shirt,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const cartItems = [
  {
    id: 1,
    name: "Premium Formal Shirt - Edinburgh",
    size: "2XL",
    qty: 1,
    originalPrice: 2580,
    price: 1980,
  },
  {
    id: 2,
    name: "Premium Formal Shirt - Dresden",
    size: "2XL",
    qty: 1,
    originalPrice: 2580,
    price: 1980,
  },
];

const paymentOptions = [
  {
    id: "cod",
    title: "Cash on Delivery",
    subtitle: "Pay when you receive your order",
    icon: Wallet,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: "POPULAR",
    badgeClass: "bg-gray-100 text-gray-600",
  },

  {
    id: "bkash",
    title: "bKash",
    subtitle: "Pay with bKash mobile wallet",
    icon: Smartphone,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    badge: "5% CASHBACK",
    badgeClass: "bg-pink-600 text-white",
    rightSlot: (
      <span className="font-serif text-lg font-bold italic text-pink-600">
        bKash
      </span>
    ),
  },
];

const subtotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.qty,
  0,
);
const total = subtotal;

const SectionHeading = ({ icon: Icon, children }: SectionHeadingProps) => (
  <div className="flex items-center gap-2.5">
    <Icon className="h-5 w-5 text-gray-700" />
    <h2 className="font-serif text-xl font-semibold text-gray-900">
      {children}
    </h2>
  </div>
);

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="min-h-screen">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_550px]">
        <Card className="h-fit rounded-sm shadow-xl bg-white">
          <CardContent className="space-y-8 p-6 lg:p-8">
            <section className="space-y-5">
              <SectionHeading icon={MapPin}>Shipping Address</SectionHeading>
              <Separator />
              <div>
                <Label>
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Enter your full name"
                  className="mt-2 h-12"
                />
              </div>
              <div>
                <Label>Email (optional)</Label>
                <Input placeholder="your@email.com" className="mt-2 h-12" />
              </div>
              <div>
                <Label>
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="01XXXXXXXXXX" className="mt-2 h-12" />
              </div>

              <div>
                <Label>
                  City / District <span className="text-red-500">*</span>
                </Label>
                <Select>
                  <SelectTrigger className="mt-2 !h-12 w-full !shadow-none rounded-md border border-gray-200 bg-white px-3.5 text-sm text-gray-900 shadow-sm transition-colors hover:border-gray-300 ">
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                  <SelectContent className="rounded-md border border-gray-200 bg-white shadow-lg">
                    {[
                      "Dhaka",
                      "Chattogram",
                      "Rajshahi",
                      "Khulna",
                      "Barisal",
                      "Sylhet",
                      "Rangpur",
                      "Mymensingh",
                    ].map((city) => (
                      <SelectItem
                        key={city}
                        value={city.toLowerCase()}
                        className="cursor-pointer rounded-sm px-3 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:text-gray-900 data-[state=checked]:font-medium data-[state=checked]:text-gray-900"
                      >
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>
                  Detailed Address <span className="text-red-500">*</span>
                </Label>
                <Input placeholder="House, Road, Area" className="mt-2 h-12" />
              </div>

              <div>
                <Label>Note for Delivery</Label>
                <Textarea
                  placeholder="Special instructions (optional)"
                  className="mt-2 min-h-[100px]"
                />
              </div>
            </section>
          </CardContent>
        </Card>

        {/* Right: Order Summary + Payment */}
        <Card className="h-fit rounded-sm border-none bg-white shadow-xl">
          <CardContent className="space-y-5 p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-semibold text-gray-900">
                Order Summary
              </h2>
              <button className="text-sm text-gray-600 underline underline-offset-2">
                Modify
              </button>
            </div>
            <Separator />

            <div className="divide-y">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 py-3 first:pt-0 last:pb-0"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-gray-100">
                    <Shirt className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Size: {item.size} • Qty: {item.qty}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-xs text-gray-400 line-through">
                      ৳{item.originalPrice}
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      ৳{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>৳{subtotal}</span>
              </div>
              <div className="flex justify-between font-medium text-green-600">
                <span>
                  Free Shipping{" "}
                  <span className="font-normal text-gray-500">(Dhaka)</span>
                </span>
                <span>৳0</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between text-base font-semibold text-gray-900">
              <span>Total</span>
              <span>৳{total}</span>
            </div>

            <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-800">
              <Package className="h-4 w-4 shrink-0" />
              <p>
                Delivery <strong>within 2-3 Days</strong> after confirmation
              </p>
            </div>

            <div className="flex gap-2">
              <Input placeholder="Enter coupon code" className="h-11 flex-1" />
              <Button className="h-11 bg-gray-900 px-5 text-white hover:bg-black">
                Apply
              </Button>
            </div>

            <Separator className="!my-6" />

            <h2 className="font-serif text-xl font-semibold text-gray-900">
              Payment Method
            </h2>

            <div className="space-y-3">
              {paymentOptions.map((option) => {
                const Icon = option.icon;
                const selected = selectedPayment === option.id;
                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors ${
                      selected ? "border-gray-900" : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="h-4 w-4 accent-gray-900"
                      checked={selected}
                      onChange={() => setSelectedPayment(option.id)}
                    />
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${option.iconBg}`}
                    >
                      <Icon className={`h-5 w-5 ${option.iconColor}`} />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-gray-900">
                          {option.title}
                        </span>
                        <span
                          className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${option.badgeClass}`}
                        >
                          {option.badge}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{option.subtitle}</p>
                    </div>
                    {option.rightSlot}
                  </label>
                );
              })}
            </div>

            <Separator />

            <label className="flex items-center gap-2 text-[12px] text-gray-700">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 accent-gray-900"
              />
              <span>
                I agree to the{" "}
                <a href="#" className="underline underline-offset-2">
                  Terms &amp; Conditions
                </a>
                ,{" "}
                <a href="#" className="underline underline-offset-2">
                  Refund Policy
                </a>{" "}
                and{" "}
                <a href="#" className="underline underline-offset-2">
                  Privacy Policy
                </a>
              </span>
            </label>

            <Button className="h-14 w-full gap-2 bg-gray-900 text-base font-semibold text-white hover:bg-black">
              <Lock className="h-4 w-4" />
              Confirm Order
              <span className="ml-1">৳{total}</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
