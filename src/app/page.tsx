"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import CartSidebar from "@/components/CartSidebar";
import IntroLoader from "@/components/IntroLoader";
import { products } from "@/data/products";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [shuffledProducts, setShuffledProducts] = useState(products);

  // Shuffle products only on client side after mount
  useEffect(() => {
    setShuffledProducts(shuffleArray(products));
  }, []);

  return (
    <>
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      <div className="min-h-screen bg-white">
        <Navbar />
        <CartSidebar />

        {/* Product Grid */}
        <main
          className="px-4"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-8">
            {shuffledProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
