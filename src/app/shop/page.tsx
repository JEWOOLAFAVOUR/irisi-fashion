"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    switch (sortBy) {
      case "newest":
        result = result
          .filter((p) => p.isNew)
          .concat(result.filter((p) => !p.isNew));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <main className="min-h-screen pt-32 lg:pt-40">
      {/* Page Header */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-2">
            Shop All
          </h1>
          <p className="text-sm text-neutral-500">
            {filteredAndSortedProducts.length} Products
          </p>
        </motion.div>
      </div>

      {/* Filter & Sort Bar */}
      <div className="sticky top-[104px] lg:top-[136px] bg-white z-40 border-y border-neutral-200">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-14">
            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`text-[11px] tracking-widest uppercase transition-opacity ${
                    selectedCategory === category
                      ? "text-black"
                      : "text-neutral-400 hover:text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Mobile Filter Button */}
            <button
              className="lg:hidden flex items-center gap-2 text-[11px] tracking-widest uppercase"
              onClick={() => setIsFilterOpen(true)}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filter
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 text-[11px] tracking-widest uppercase"
              >
                Sort
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isSortOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isSortOpen && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-40"
                      onClick={() => setIsSortOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 top-full mt-2 bg-white border border-neutral-200 shadow-lg z-50 min-w-[200px]"
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setSortBy(option.value);
                            setIsSortOpen(false);
                          }}
                          className={`block w-full text-left px-4 py-3 text-[11px] tracking-widest uppercase hover:bg-neutral-50 transition-colors ${
                            sortBy === option.value
                              ? "text-black"
                              : "text-neutral-500"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-12">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-neutral-500">No products found.</p>
          </motion.div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-lg tracking-widest uppercase">Filter</h2>
                  <button onClick={() => setIsFilterOpen(false)}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-8">
                  <h3 className="text-[11px] tracking-widest uppercase mb-4 text-neutral-500">
                    Category
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                        }}
                        className={`block w-full text-left py-2 text-sm transition-colors ${
                          selectedCategory === category
                            ? "text-black"
                            : "text-neutral-500 hover:text-black"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-black text-white py-4 text-[11px] tracking-widest uppercase"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
