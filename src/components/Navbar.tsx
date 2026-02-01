"use client";

import Image from "next/image";
import { Menu, Search, User } from "lucide-react";
// import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-300">
      <nav
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <div className="flex items-center justify-between relative">
          {/* Left - Menu */}
          <button className="hover:opacity-60 transition cursor-pointer">
            <Menu size={22} strokeWidth={1.2} />
          </button>

          {/* Center - Logo */}
          <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-medium tracking-widest uppercase">
            IRISI FASHION
          </h1>

          {/* Right - Icons */}
          <div className="flex items-center gap-5">
            <button className="hover:opacity-60 transition cursor-pointer">
              <Search size={20} strokeWidth={1.2} />
            </button>
            <button className="hover:opacity-60 transition cursor-pointer">
              <User size={20} strokeWidth={1.2} />
            </button>
            <button className="hover:opacity-60 transition cursor-pointer">
              <Image src="/icons/shop.png" alt="Shop" width={22} height={20} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
