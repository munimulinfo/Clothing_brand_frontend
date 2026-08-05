"use client";

import Image from "next/image";
import { Geist } from "next/font/google";

import {
  Package,
  Truck,
  RefreshCcw,
  Shirt,
  CreditCard,
  CircleUserRound,
  ArrowRight,
  Headset,
  Mail,
  Phone,
  MessageCircleMore,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const categories = [
  {
    icon: Package,
    title: "Orders",
    desc: "Track and manage your orders",
  },
  {
    icon: Truck,
    title: "Shipping",
    desc: "Delivery & tracking",
  },
  {
    icon: RefreshCcw,
    title: "Returns",
    desc: "Return & refund policy",
  },
  {
    icon: Shirt,
    title: "Products",
    desc: "Size guide & product care",
  },
  {
    icon: CreditCard,
    title: "Payments",
    desc: "Payment methods",
  },
  {
    icon: CircleUserRound,
    title: "Account",
    desc: "Manage your account",
  },
];

const faqs = [
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you'll receive a tracking confirmation via SMS or email. You can also track your order from your account under 'My Orders'.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Inside Dhaka: 1-2 business days. Outside Dhaka: 2-5 business days depending on your location.",
  },
  {
    question: "Can I return my product?",
    answer:
      "Yes. You can request a return within 7 days if the product is unused and in its original condition.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Cash on Delivery, bKash, Nagad, Rocket and Debit/Credit Cards.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Yes. Contact our support team before the order is shipped to cancel it.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach us via Facebook, WhatsApp, phone or email. Our support team is available Saturday to Thursday.",
  },
];

const supports = [
  {
    title: "Live Chat",
    description: "Chat with us for instant support",
    icon: Headset,
    href: "/contact",
  },
  {
    title: "Email Support",
    description: "support@trustwear.com",
    icon: Mail,
    href: "mailto:support@trustwear.com",
  },
  {
    title: "Call Us",
    description: "+880 1712-345678",
    icon: Phone,
    href: "tel:+8801712345678",
  },
  {
    title: "WhatsApp",
    description: "Message us on WhatsApp",
    icon: MessageCircleMore,
    href: "https://wa.me/8801712345678",
  },
];

const manrope = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const Help = () => {
  return (
    <main className={`${manrope.className} bg-white`}>
      <section className="mx-auto max-w-7xl md:pt-10">
        <div className="relative overflow-hidden md:rounded-[34px]">
          {/* Background Image */}
          <Image
            src="/images/heroImages/help&SupportImage.png"
            alt="Help & Support"
            fill
            priority
            className="md:object-cover object-fill"
          />

          {/* Optional Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex md:min-h-[500px] h-[280px] items-center md:px-8 px-5 lg:px-16">
            <div className="max-w-xl">
              <span className=" md:text-sm text-[9px] font-semibold uppercase  text-emerald-700">
                We&apos;re Here To Help You
              </span>
              <h1 className="md:mt-4 mt-2 text-[20px] font-black leading-tight text-gray-900 lg:text-6xl">
                Help &<span className="text-emerald-700"> Support</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl mt-16  pb-20">
        <h2 className="mb-10 text-center md:text-4xl text-2xl font-bold text-[#1c3d22]">
          How can we help?
        </h2>

        <div className="grid md:gap-5 gap-3 px-3 md:px-0 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-800 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f2f7f2] transition group-hover:bg-[#2d5d33]">
                  <Icon className="h-8 w-8 text-[#2d5d33] group-hover:text-white" />
                </div>

                <h3 className="mt-6 md:text-xl text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 md:text-xs text-[10.5px] leading-6 uppercase  text-gray-500">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl md:px-0 px-2">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Left Card */}
          <div className="rounded-[28px] border h-fit border-neutral-200 bg-white md:p-7 p-6 shadow-sm">
            <h2 className="mb-6 md:text-[38px] text-2xl font-extrabold tracking-tight  text-[#1c3d22]">
              Frequently Asked Questions
            </h2>

            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="px-6 py-6 text-left md:text-[17px] text-[14px] font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6 md:text-[15px] text-xs leading-7 text-neutral-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <Button
              variant="outline"
              className="mt-8 md:h-12 h-10 rounded-sm border-emerald-700 px-6 md:text-sm text-xs font-bold text-emerald-700 hover:bg-emerald-700 hover:text-white"
            >
              View All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Card will come in Part 2 */}
          <div className="rounded-[30px] border   h-fit border-neutral-200 bg-gradient-to-br from-[#f8fbf9] via-white to-[#f6faf8] p-8 shadow-sm">
            <h2 className="md:text-[36px] text-2xl font-extrabold tracking-tight text-[#1c3d22]">
              Need More Help?
            </h2>

            <p className="mt-2 mb-8 md:text-[16px] text-sm text-neutral-600">
              Our support team is ready to assist you.
            </p>

            <div className="space-y-4">
              {supports.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="group flex items-center justify-between rounded-2xl border-b border-neutral-200 py-6 transition-all last:border-b-0 hover:bg-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex md:h-16 md:w-16 h-12 w-12 items-center justify-center rounded-full bg-[#f2f7f2] transition group-hover:bg-emerald-50">
                        <Icon className="md:h-8 md:w-8 h-6 w-6 text-[#2d5d33]" />
                      </div>

                      <div>
                        <h3 className="md:text-[20px] text-xl font-bold text-neutral-900">
                          {item.title}
                        </h3>

                        {item.description.split("\n").map((line, i) => (
                          <p
                            key={i}
                            className="mt-1 md:text-[16px] text-xs leading-7 text-neutral-600"
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex md:h-14 md:w-14 h-10 w-10 items-center justify-center rounded-full border border-emerald-600 transition-all group-hover:bg-emerald-600 group-hover:border-emerald-700">
                      <ArrowRight className="md:h-6 md:w-6 h-4 w-4 text-emerald-700 transition group-hover:text-white" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl pt-20">
        <div className="relative overflow-hidden md:rounded-[28px] bg-gradient-to-r from-[#184c21] via-[#1b5a28] to-[#0d3518] px-8 py-8 lg:px-12">
          {/* Decorative Dots */}
          <div className="absolute right-0 top-0 h-full w-40 opacity-20">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(255,255,255,.45) 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:items-center items-center justify-between gap-8 lg:flex-row">
            {/* Left */}
            <div className="flex items-center  gap-6">
              <div className="relative md:h-24  md:w-24 overflow-hidden rounded-full border border-white/20">
                <Image
                  src="/images/logo.png"
                  alt="Trust Wear"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="md:text-4xl text-3xl font-bold text-white">
                  Still need help?
                </h2>

                <p className="mt-2 max-w-md text-sm leading-7 text-white/80 md:text-[17px]">
                  We&apos;re here for you. Reach out to us and we&apos;ll get
                  back as soon as possible.
                </p>
              </div>
            </div>

            {/* Button */}

            <Link
              href="/contact"
              className="group flex md:h-14 h-10 items-center gap-3 rounded-xl -ml-[115px] md:-ml-0 bg-white px-7 font-semibold text-[#184c21] text-[12px] md:text-sm transition-all hover:scale-105 hover:bg-neutral-100"
            >
              Contact Support
              <ArrowRight className="md:h-5 md:w-5 h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Help;
