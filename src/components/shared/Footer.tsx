"use client";

import Link from "next/link";
import Image from "next/image";
import {
  EnvelopeSimple,
  Phone,
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
  TiktokLogo,
  PinterestLogo,
  XLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-[#575757] text-white mt-20">
      <div className="mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr_340px]">
          {/* LEFT */}

          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo2.png"
                width={55}
                height={55}
                alt="Trust Wear"
              />
            </Link>

            <div className="mt-8 space-y-4 text-[17px] text-gray-200">
              <Link href="#" className="block hover:text-white">
                About Trust Wear
              </Link>

              <Link href="#" className="block hover:text-white">
                Terms & Conditions
              </Link>

              <Link href="#" className="block hover:text-white">
                Privacy Policy
              </Link>

              <Link href="#" className="block hover:text-white">
                Return Policy
              </Link>

              <Link href="#" className="block hover:text-white">
                FAQs
              </Link>

              <Link href="#" className="block hover:text-white">
                Contact Us
              </Link>
            </div>
          </div>

          {/* CENTER */}

          <div className="space-y-14">
            <div>
              <div className="mb-6 flex items-center gap-3 text-lg font-semibold uppercase">
                <EnvelopeSimple
                  size={22}
                  weight="fill"
                  className="text-orange-400"
                />
                GET SPECIAL DISCOUNTS IN YOUR INBOX
              </div>

              <div className="flex flex-col gap-3 md:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="h-12 flex-1 border-b border-gray-300 bg-transparent outline-none placeholder:text-gray-300"
                />

                <button className="h-12 rounded bg-[#F4A640] px-7 font-medium transition hover:bg-orange-500">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <div className="mb-6 flex items-center gap-3 text-lg font-semibold uppercase">
                <Phone size={22} weight="fill" className="text-orange-400" />
                FOR ANY HELP YOU MAY CALL US AT
              </div>

              <div className="space-y-2 text-gray-300">
                <p>+880 1234-567890</p>

                <p>Customer Support</p>

                <p>Track your order or get help returning an order.</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h3 className="mb-6 text-lg font-semibold uppercase">Follow Us</h3>

            <p className="mb-8 text-gray-300">
              Stay updated on our latest arrivals, exclusive promotions and
              events.
            </p>

            <div className="mb-10 flex flex-wrap gap-5">
              <FacebookLogo
                size={34}
                className="cursor-pointer hover:text-orange-400"
              />

              <InstagramLogo
                size={34}
                className="cursor-pointer hover:text-orange-400"
              />

              <TiktokLogo
                size={34}
                className="cursor-pointer hover:text-orange-400"
              />

              <XLogo
                size={34}
                className="cursor-pointer hover:text-orange-400"
              />

              <PinterestLogo
                size={34}
                className="cursor-pointer hover:text-orange-400"
              />

              <YoutubeLogo
                size={34}
                className="cursor-pointer hover:text-orange-400"
              />
            </div>

            <div className="rounded-xl bg-white p-5 text-black">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white">
                  <FacebookLogo size={30} weight="fill" />
                </div>

                <div>
                  <h4 className="font-semibold">Trust Wear</h4>

                  <p className="text-sm text-gray-500">Follow us on Facebook</p>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-gray-500 pt-6 text-center text-gray-300">
          © {new Date().getFullYear()} Trust Wear. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
