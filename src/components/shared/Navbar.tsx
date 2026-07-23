// "use client";
// import Image from "next/image";
// import { UserCircleIcon, ShoppingCartIcon } from "@phosphor-icons/react";
// import Link from "next/link";
// const Navbar = () => {
//   return (
//     <div className="w-full sticky top-0 z-50  flex bg-white/90 backdrop-blur-md border-b border-gray-200 justify-center justify-items-center h-20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border-b  border-neutral-100">
//       <div className="flex  justify-between  max-w-[1300px] w-full">
//         {/* first div */}
//         <div className="flex gap-32 items-center">
//           <div className="flex items-center">
//             <Image
//               src="/images/logo.png"
//               alt="Trust Wear"
//               width={80}
//               height={80}
//               priority
//             />
//             <div className="flex flex-col relative ">
//               <h1 className="text-[22px] text-black uppercase font-bold tracking-widest">
//                 TRUST WEAR
//               </h1>

//               <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
//                 Confidence in Every Thread
//               </span>
//             </div>
//           </div>
//           <div className="flex items-start gap-6">
//             <Link href="/">
//               <h1 className="cursor-pointer text-[15px]   font-semibold text-black">
//                 Home
//               </h1>
//             </Link>

//             <Link href="/tshirts">
//               <h1 className="cursor-pointer text-[15px]   font-semibold text-black ">
//                 T-Shirts
//               </h1>
//             </Link>
//             <Link href="/shirts">
//               <h1 className="cursor-pointer text-[15px]   font-semibold  text-black ">
//                 Shirts
//               </h1>
//             </Link>

//             <h1 className="cursor-pointer text-[15px]   font-semibold text-black">
//               Help & Support
//             </h1>
//           </div>
//         </div>

//         {/* second div  */}

//         <div className="flex items-center gap-4">
//           <button className="transition  hover:scale-110">
//             <UserCircleIcon className="w-8 h-8 text-black" />
//           </button>

//           <button className="relative  transition hover:scale-110">
//             <ShoppingCartIcon className="w-8 h-8 text-black" />

//             {/* Cart Badge */}
//             <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
//               2
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  ListIcon,
  XIcon,
} from "@phosphor-icons/react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "T-Shirts", href: "/tshirts" },
  { label: "Shirts", href: "/shirts" },
  { label: "Help & Support", href: "/help" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="w-full sticky top-0 z-50  bg-white backdrop-blur-md border-b border-gray-200 flex justify-center items-center h-20 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ">
      <div className="flex justify-between  items-center max-w-[1380px] w-full px-4 sm:px-6">
        {/* first div */}
        <div className="flex gap-8 lg:gap-16 xl:gap-32 items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Trust Wear"
              width={80}
              height={80}
              priority
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
            />
            <div className="flex flex-col relative">
              <h1 className="text-[16px] sm:text-[19px] lg:text-[22px] text-black uppercase font-bold tracking-widest">
                TRUST WEAR
              </h1>

              <span className="hidden sm:block text-[9px] uppercase tracking-[0.2em] text-neutral-400">
                Confidence in Every Thread
              </span>
            </div>
          </div>

          {/* desktop nav links */}
          <div className="hidden lg:flex items-start gap-6">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative pb-1"
                >
                  <h1
                    className={cn(
                      "cursor-pointer text-[14px] font-semibold transition-colors",
                      active
                        ? "text-emerald-700"
                        : "text-black hover:text-neutral-600",
                    )}
                  >
                    {link.label}
                  </h1>
                  {active && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-emerald-600"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* second div  */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:inline-flex transition hover:scale-110">
            <UserCircleIcon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
          </button>

          <button className="relative transition hover:scale-110">
            <ShoppingCartIcon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />

            {/* Cart Badge */}
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              2
            </span>
          </button>

          {/* mobile menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <button
                className="lg:hidden transition hover:scale-110"
                aria-label="Open menu"
              >
                <ListIcon className="w-7 h-7 text-black" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white">
              <div className="flex items-center justify-between mt-2 mb-6">
                <h1 className="text-[16px] uppercase font-bold tracking-widest text-black">
                  Trust Wear
                </h1>
                <button onClick={() => setOpen(false)} aria-label="Close menu">
                  <XIcon className="w-5 h-5 text-black" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      <h1
                        className={cn(
                          "cursor-pointer text-[15px] font-semibold py-3 px-2 rounded-lg transition-colors flex items-center gap-2",
                          active
                            ? "bg-emerald-50 text-emerald-700"
                            : "text-black hover:bg-neutral-100",
                        )}
                      >
                        {active && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        )}
                        {link.label}
                      </h1>
                    </Link>
                  );
                })}

                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-100 px-2">
                  <UserCircleIcon className="w-5 h-5 text-black" />
                  <span className="text-[14px] font-semibold text-black">
                    My Account
                  </span>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
