"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, Search, User, X } from "lucide-react";
// import { ShoppingBag } from "lucide-react";

const menuLinks = [
  { name: "SHOP", href: "/shop" },
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
            <button
              className="hover:opacity-60 transition cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            >
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
                <Image
                  src="/icons/shop.png"
                  alt="Shop"
                  width={22}
                  height={20}
                />
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
        className={`fixed top-0 left-0 h-full w-[420px] max-w-[90vw] bg-[#555555]/94 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full text-white">
          {/* Close Button - Top Left */}
          <div className="flex justify-end" style={{ padding: "32px" }}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-60 transition cursor-pointer"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Main Menu Links */}
          <nav
            className="flex-1 pt-4"
            style={{ paddingLeft: "48px", paddingRight: "48px" }}
          >
            <ul className="space-y-8">
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-medium tracking-[0.2em] hover:opacity-60 transition block"
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
              paddingLeft: "48px",
              paddingRight: "48px",
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
              <button className="text-sm font-medium tracking-wide hover:opacity-60 transition ml-4">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div
            style={{
              paddingLeft: "48px",
              paddingRight: "48px",
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
