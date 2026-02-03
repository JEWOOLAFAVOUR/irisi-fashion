"use client";

import Image from "next/image";
import { X, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartSidebar() {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    updateQuantity,
    getSubtotal,
    recentlyViewed,
  } = useCartStore();

  const [mounted, setMounted] = useState(false);

  // Fix hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  const subtotal = mounted ? getSubtotal() : 0;

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/30 z-50" onClick={closeCart} />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[450px] max-w-[95vw] bg-white z-50 transform transition-transform duration-1000 ease-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div
            className="flex items-center justify-between border-b border-gray-200"
            style={{ padding: "20px 24px" }}
          >
            <div>
              <h2 className="text-sm font-medium tracking-widest">CART</h2>
              <p className="text-xs text-gray-500 mt-1">AVAILABLE SOON</p>
            </div>
            <button
              onClick={closeCart}
              className="hover:opacity-60 transition cursor-pointer"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          {/* Cart Items */}
          <div
            className="flex-1 overflow-y-auto"
            style={{ padding: "20px 24px" }}
          >
            {items.length === 0 ? (
              <p className="text-sm text-gray-500 text-center mt-10">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="relative w-24 h-32 bg-gray-100 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="text-xs font-medium tracking-wide">
                        {item.product.category} / {item.product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.color.toUpperCase()} / {item.size}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Est. Ship Date February 2026
                      </p>
                      <p className="text-xs mt-1">
                        ₦{item.product.price.toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="hover:opacity-60 transition"
                        >
                          <Minus size={14} strokeWidth={1.5} />
                        </button>
                        <span className="text-xs w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="hover:opacity-60 transition"
                        >
                          <Plus size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-xs underline hover:opacity-60 transition self-start"
                    >
                      REMOVE
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Recently Viewed */}
            {recentlyViewed.length > 0 && (
              <div className="mt-10">
                <h3 className="text-xs font-medium tracking-widest mb-4">
                  RECENTLY VIEWED
                </h3>
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {recentlyViewed.slice(0, 4).map((product) => (
                    <Link
                      href={`/product/${product.id}`}
                      key={product.id}
                      onClick={closeCart}
                      className="flex-shrink-0"
                    >
                      <div className="relative w-24 h-24 bg-gray-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className="border-t border-gray-200"
            style={{ padding: "20px 24px" }}
          >
            <p className="text-xs text-gray-500 mb-2">
              Taxes calculated at checkout
            </p>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium tracking-widest">
                SUBTOTAL
              </span>
              <span className="text-sm">₦{subtotal.toLocaleString()}</span>
            </div>

            {subtotal > 100000 && (
              <p className="text-xs text-center mb-4 py-2 border-t border-b border-gray-200">
                YOUR ORDER IS ELIGIBLE FOR FREE SHIPPING
              </p>
            )}

            <div className="flex gap-3">
              <button
                onClick={closeCart}
                className="flex-1 py-4 border border-black text-xs font-medium tracking-widest hover:bg-gray-100 transition"
              >
                UPDATE
              </button>
              <button className="flex-1 py-4 bg-black text-white text-xs font-medium tracking-widest hover:bg-gray-800 transition">
                CHECKOUT
              </button>
            </div>

            <button
              onClick={closeCart}
              className="w-full text-center text-xs underline mt-4 hover:opacity-60 transition"
            >
              VIEW CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
