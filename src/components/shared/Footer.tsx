"use client";

import {
  Mail,
  Phone,
  Users,
  Clock,
  ChevronRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const QUICK_LINKS = [
  "About Us",
  "Terms & Conditions",
  "Privacy Policy",
  "Return Policy",
  "FAQs",
  "Contact Us",
];

const SOCIALS = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaTiktok, label: "TikTok", text: "T" },
  { icon: FaTwitter, label: "X" },
  { icon: null, label: "Pinterest", text: "P" },
  { icon: FaYoutube, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 px-6 pt-12 pb-6 mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + links */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-emerald-600" />
            <span className="text-lg font-bold tracking-wide text-gray-900">
              TRUST <span className="text-emerald-600">WEAR</span>
            </span>
          </div>
          <p className="mb-5 text-sm text-gray-500">
            Where comfort meets confidence.
          </p>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="flex items-center gap-1.5 text-sm text-gray-800  font-medium transition-colors hover:text-emerald-700"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-emerald-800" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Mail className="h-5 w-5 text-emerald-600" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Get Special Discounts
            </h3>
          </div>
          <p className="mb-10 text-sm text-gray-500">
            Subscribe to get updates about new arrivals and exclusive offers.
          </p>
          <form className="flex overflow-hidden rounded-md border border-gray-300">
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full px-3 py-2.5 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="shrink-0 bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Phone className="h-5 w-5 text-emerald-600" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              We&apos;re Here to Help
            </h3>
          </div>
          <p className="mb-5 text-sm text-gray-500">
            Have a question? Our support team is ready to assist you.
          </p>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald-600" />
              <a href="tel:+8801234567890" className="hover:text-emerald-600">
                +880 1234-567890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald-600" />
              <a
                href="mailto:support@trustwear.com"
                className="hover:text-emerald-600"
              >
                support@trustwear.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-600" />
              Mon - Sat: 10:00 AM - 8:00 PM
            </li>
          </ul>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-600 transition-colors hover:bg-emerald-50"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Follow us */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Users className="h-5 w-5 text-emerald-600" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
              Follow Us
            </h3>
          </div>
          <p className="mb-5 text-sm text-gray-500">
            Stay updated on our latest arrivals, exclusive promotions and
            events.
          </p>

          <div className="mb-5 flex flex-wrap gap-2.5">
            {SOCIALS.map(({ icon: Icon, label, text }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-emerald-600 hover:text-emerald-600"
              >
                {Icon ? (
                  <Icon className="h-4 w-4" />
                ) : (
                  <span className="text-xs font-bold">{text}</span>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-gray-100 p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600">
              <FaFacebookF className="h-5 w-5 fill-white text-white" />
            </span>
            <div className="text-sm">
              <p className="font-semibold text-gray-900">Trust Wear</p>
              <p className="text-gray-500">Follow us on Facebook</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 font-semibold text-emerald-600 hover:underline"
              >
                Follow Page
                <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col   lg:max-w-7xl mx-auto w-full text-sm font-medium text-gray-600   pt-10 justify-center gap-2 items-center">
        <div className="flex">
          <span>© 2026 Trust Wear. All Rights Reserved.</span>
          <span className="text-gray-600 ml-2 lg:flex hidden">|</span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#">
            Sitemap
          </a>
          <span className="text-gray-600">|</span>
          <a href="#">
            Shipping Policy
          </a>
          <span className="text-gray-600">|</span>
          <a href="#">
            Size Guide
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
