"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group cursor-pointer block"
    >
      {/* Product Image */}
      <div className="relative aspect-square mb-4 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>

      {/* Product Info */}
      <div className="flex items-start justify-between gap-2 mt-2">
        <p className="text-xs text-black leading-tight">
          {product.category} / {product.name}
        </p>
        {product.isSoldOut ? (
          <span className="text-xs text-black whitespace-nowrap">SOLD OUT</span>
        ) : (
          <span className="text-xs text-black whitespace-nowrap">
            ₦{product.price.toLocaleString()}
          </span>
        )}
      </div>
    </Link>
  );
}
