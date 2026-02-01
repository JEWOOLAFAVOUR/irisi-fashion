"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, User, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

const menuLinks = [
  { name: "SHOP", href: "/" },
  { name: "FW25 LOOKBOOK", href: "/lookbook" },
  { name: "NEWS", href: "/news" },
  { name: "ABOUT", href: "/about" },
  { name: "STORES", href: "/stores" },
  { name: "CAFÉ", href: "/cafe" },
  { name: "SONNY", href: "/sonny" },
  { name: "SOUND", href: "/sound" },
];

const footerLinks = [
  { name: "Client Services", href: "/client-services" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Careers", href: "/careers" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Accessibility", href: "/accessibility" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, getItemCount } = useCartStore();
  const [itemCount, setItemCount] = useState(0);

  // Update item count on client side only
  useEffect(() => {
    setItemCount(getItemCount());
  }, [getItemCount]);

  // Subscribe to cart changes
  useEffect(() => {
    const unsubscribe = useCartStore.subscribe((state) => {
      setItemCount(state.getItemCount());
    });
    return () => unsubscribe();
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-300">
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
            <button
              className="hover:opacity-60 transition cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={22} strokeWidth={1.2} />
            </button>

            {/* Center - Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <h1 className="text-base font-medium tracking-widest uppercase">
                IRISI FASHION
              </h1>
            </Link>

            {/* Right - Icons */}
            <div className="flex items-center gap-5">
              <button className="hover:opacity-60 transition cursor-pointer">
                <Search size={20} strokeWidth={1.2} />
              </button>
              <button className="hover:opacity-60 transition cursor-pointer">
                <User size={20} strokeWidth={1.2} />
              </button>
              <button
                className="hover:opacity-60 transition cursor-pointer relative"
                onClick={openCart}
              >
                <Image
                  src="/icons/shop.png"
                  alt="Shop"
                  width={22}
                  height={20}
                />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-50"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[450px] max-w-[90vw] bg-[#555555]/95 backdrop-blur-sm z-50 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="flex flex-col h-full text-white"
          style={{ paddingLeft: "32px", paddingRight: "70px" }}
        >
          {/* Close Button - Top Left */}
          <div
            className="flex justify-end"
            style={{ paddingTop: "32px", paddingBottom: "32px" }}
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-60 transition cursor-pointer"
            >
              <X size={25} strokeWidth={1.5} />
            </button>
          </div>

          {/* Main Menu Links */}
          <nav className="flex-1 pt-4">
            <ul className="space-y-8">
              {menuLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: "20px" }}>
                  <a
                    href={link.href}
                    className="text-sm tracking-[0.2em] hover:opacity-60 transition block text-white/90"
                    style={{ fontWeight: 400 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div
            style={{
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <div className="flex items-center justify-between border-b border-white/50 pb-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-sm text-white/80 placeholder-white/60 outline-none"
              />
              <button className="text-xs font-normal tracking-wide hover:opacity-60 transition ml-4">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div
            style={{
              paddingBottom: "48px",
            }}
          >
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
