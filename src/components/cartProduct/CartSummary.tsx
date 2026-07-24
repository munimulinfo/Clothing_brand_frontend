"use client";

import { ArrowRight, Globe, RotateCcw, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const currency = (n: number) => `৳${n.toLocaleString("en-BD")}`;

interface OrderSummaryProps {
  items: CartLineItem[];
  onPlaceOrder?: () => void;
  onContinueShopping?: () => void;
  onShipWorldwide?: () => void;
  supportPhone?: string;
  supportEmail?: string;
}


type CartLineItem = {
  id: string;
  name: string;
  imageUrl?: string;
  availableSizes: string[];
  size: string;
  qty: number;
  originalPrice: number;
  salePrice: number;
};
 

export function CartSummary({
  items,
  onPlaceOrder,
  onContinueShopping,
  onShipWorldwide,
  supportPhone = "+880 1234-567890",
  supportEmail = "support@yourstore.com",
}: OrderSummaryProps) {
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.salePrice * i.qty, 0);

  return (
    <aside className="h-fit overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:sticky lg:top-6">
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
          Order Summary
        </h2>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex justify-between text-sm text-slate-600">
          <span>
            Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
          </span>
          <span className="font-medium text-slate-900">
            {currency(subtotal)}
          </span>
        </div>

        <div className="flex justify-between text-sm text-slate-600">
          <span>Shipping</span>
          <span className="italic text-slate-500">Calculated at checkout</span>
        </div>

        <Separator />

        <div className="flex justify-between text-base font-semibold text-slate-900">
          <span>Total</span>
          <span>{currency(subtotal)}</span>
        </div>

        <Button
          className="w-full gap-2 bg-emerald-600 py-6 text-base hover:bg-emerald-700"
          onClick={onPlaceOrder}
        >
          Place Order
          <ArrowRight className="h-4 w-4" />
        </Button>

        <Button variant="outline" className="w-full" onClick={onContinueShopping}>
          Continue Shopping
        </Button>



        <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-slate-700">
          For bulk orders, call{" "}
          <a href={`tel:${supportPhone}`} className="font-semibold text-emerald-700">
            {supportPhone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${supportEmail}`} className="font-semibold text-emerald-700">
            {supportEmail}
          </a>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Secure checkout
          </span>
          <span className="flex items-center gap-1">
            <Truck className="h-3.5 w-3.5 text-emerald-600" />
            Fast delivery
          </span>
          <span className="flex items-center gap-1">
            <RotateCcw className="h-3.5 w-3.5 text-emerald-600" />
            Easy returns
          </span>
        </div>
      </div>
    </aside>
  );
}