"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import CartSidebar from "@/components/CartSidebar";
import { products, Product } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = [
  { name: "Brown", hex: "#5C4033" },
  { name: "Cream", hex: "#F5F5DC" },
  { name: "Navy", hex: "#1a1a2e" },
  { name: "Black", hex: "#000000" },
];

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const productId = Number(params.id);

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<Product[]>([]);

  const { addItem, addToRecentlyViewed } = useCartStore();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      addToRecentlyViewed(foundProduct);

      // Get recommendations from same category
      const sameCategory = products.filter(
        (p) => p.category === foundProduct.category && p.id !== foundProduct.id,
      );
      const otherProducts = products.filter(
        (p) => p.category !== foundProduct.category && p.id !== foundProduct.id,
      );
      const shuffledRecs = [
        ...shuffleArray(sameCategory).slice(0, 4),
        ...shuffleArray(otherProducts).slice(0, 4),
      ].slice(0, 7);
      setRecommendations(shuffledRecs);
    }
  }, [productId, addToRecentlyViewed]);

  const handleAddToBag = () => {
    if (!product) return;
    if (!selectedSize) {
      setIsSizeOpen(true);
      return;
    }
    addItem(product, selectedSize, selectedColor);
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center h-96">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CartSidebar />

      <main style={{ padding: "40px 20px" }}>
        <div className="max-w-7xl mx-auto">
          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column - Product Info */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <h1 className="text-sm tracking-wide">
                {product.category} / {product.name}
              </h1>
              <p className="text-sm mt-2">₦{product.price.toLocaleString()}</p>

              <p className="text-xs text-gray-600 mt-6 leading-relaxed">
                Fits true to size. Order your normal size. Follows standard US
                mens sizing. Size chart can be found in sizing drawer below.
              </p>

              {/* Accordion Sections */}
              <div className="mt-10 space-y-0">
                {/* Product Details */}
                <button
                  onClick={() => toggleSection("details")}
                  className="w-full flex items-center justify-between py-4 border-t border-gray-200 text-left"
                >
                  <span className="text-xs tracking-wide">Product Details</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      expandedSection === "details" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === "details" && (
                  <div className="pb-4 text-xs text-gray-600 leading-relaxed">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Premium materials</li>
                      <li>Made in Portugal</li>
                      <li>Exclusive collaboration</li>
                      <li>Limited edition</li>
                    </ul>
                  </div>
                )}

                {/* Sizing */}
                <button
                  onClick={() => toggleSection("sizing")}
                  className="w-full flex items-center justify-between py-4 border-t border-gray-200 text-left"
                >
                  <span className="text-xs tracking-wide">Sizing</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      expandedSection === "sizing" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === "sizing" && (
                  <div className="pb-4 text-xs text-gray-600 leading-relaxed">
                    <p>XS: 34-36" chest</p>
                    <p>S: 36-38" chest</p>
                    <p>M: 38-40" chest</p>
                    <p>L: 40-42" chest</p>
                    <p>XL: 42-44" chest</p>
                    <p>XXL: 44-46" chest</p>
                  </div>
                )}

                {/* Delivery and Returns */}
                <button
                  onClick={() => toggleSection("delivery")}
                  className="w-full flex items-center justify-between py-4 border-t border-b border-gray-200 text-left"
                >
                  <span className="text-xs tracking-wide">
                    Delivery and Returns
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      expandedSection === "delivery" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === "delivery" && (
                  <div className="pb-4 text-xs text-gray-600 leading-relaxed">
                    <p>Free shipping on orders over ₦100,000</p>
                    <p className="mt-2">
                      Returns accepted within 14 days of delivery. Items must be
                      unworn with tags attached.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Center - Product Image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Add to Bag */}
            <div className="lg:col-span-3 order-3">
              {/* Color Selection */}
              <div className="mb-6">
                <p className="text-xs mb-3">Color: {selectedColor}</p>
                <div className="flex gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 border-2 transition ${
                        selectedColor === color.name
                          ? "border-black"
                          : "border-transparent"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6 relative">
                <button
                  onClick={() => setIsSizeOpen(!isSizeOpen)}
                  className="w-full flex items-center justify-between py-3 px-4 border border-gray-300 text-sm"
                >
                  <span>{selectedSize || "Select Size"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${isSizeOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isSizeOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 border-t-0 z-10">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setIsSizeOpen(false);
                        }}
                        className="w-full text-left py-3 px-4 text-sm hover:bg-gray-100 transition"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToBag}
                disabled={product.isSoldOut}
                className={`w-full py-4 text-xs font-medium tracking-widest transition ${
                  product.isSoldOut
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {product.isSoldOut ? "SOLD OUT" : "ADD TO BAG"}
              </button>
            </div>
          </div>

          {/* You May Also Like */}
          <div className="mt-20">
            <h2 className="text-xs font-medium tracking-widest mb-6">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-3">
              {recommendations.map((rec) => (
                <Link href={`/product/${rec.id}`} key={rec.id}>
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={rec.image}
                      alt={rec.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/"
                className="text-xs underline hover:opacity-60 transition"
              >
                SEE MORE
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
