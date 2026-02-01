export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isSoldOut?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "New Balance Made in UK 991",
    price: 399700,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "New Balance Made in UK 991",
    price: 399700,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Signal Rugby Shirt",
    price: 321200,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Signal Rugby Sweater",
    price: 321200,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Essential Cargo Pants",
    price: 0,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 6,
    name: "Classic Logo Cap",
    price: 45000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
  },
  {
    id: 7,
    name: "Performance Fleece Pant",
    price: 0,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 8,
    name: "Nautical Bandana",
    price: 71400,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=600&fit=crop",
  },
  {
    id: 9,
    name: "Offshore Jacket Red",
    price: 785100,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
  },
  {
    id: 10,
    name: "Offshore Jacket Black",
    price: 0,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 11,
    name: "Essential Hoodie Grey",
    price: 185000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
  },
  {
    id: 12,
    name: "Essential Hoodie Black",
    price: 185000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=600&fit=crop",
  },
  {
    id: 13,
    name: "Vintage Logo Tee",
    price: 75000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  },
  {
    id: 14,
    name: "Classic Oxford Shirt",
    price: 145000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
  },

  {
    id: 16,
    name: "Cable Knit Sweater",
    price: 245000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600&h=600&fit=crop",
  },
  {
    id: 17,
    name: "Leather Weekend Bag",
    price: 495000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
  },
  {
    id: 18,
    name: "Cashmere Scarf",
    price: 185000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop",
  },
  {
    id: 19,
    name: "Suede Loafers",
    price: 0,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 20,
    name: "Cotton Varsity Jacket",
    price: 425000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
  },
  {
    id: 21,
    name: "Merino Polo Shirt",
    price: 145000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1625910513413-5fc45b57e88b?w=600&h=600&fit=crop",
  },
  {
    id: 22,
    name: "Corduroy Trousers",
    price: 275000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop",
  },
  {
    id: 23,
    name: "Leather Belt",
    price: 125000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop",
  },
  {
    id: 24,
    name: "Quilted Vest",
    price: 295000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
  },
  {
    id: 25,
    name: "Running Sneakers",
    price: 189000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
  },
  {
    id: 26,
    name: "Denim Jacket",
    price: 325000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
  },
  {
    id: 27,
    name: "Canvas Tote Bag",
    price: 95000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
  },
  {
    id: 28,
    name: "Slim Fit Chinos",
    price: 165000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
  },
  {
    id: 29,
    name: "Graphic Print Tee",
    price: 85000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
  },
  {
    id: 30,
    name: "Bomber Jacket",
    price: 0,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 31,
    name: "Striped Rugby Shirt",
    price: 195000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
  },
  {
    id: 32,
    name: "Wool Beanie",
    price: 55000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=600&fit=crop",
  },
  {
    id: 33,
    name: "Leather Gloves",
    price: 125000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop",
  },
  {
    id: 34,
    name: "Tech Fleece Joggers",
    price: 175000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop",
  },
  {
    id: 35,
    name: "Windbreaker",
    price: 285000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
  },
  {
    id: 36,
    name: "Crewneck Sweatshirt",
    price: 145000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
  },
  {
    id: 37,
    name: "Linen Shirt",
    price: 165000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
  },
  {
    id: 38,
    name: "Cargo Shorts",
    price: 135000,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
  },
  {
    id: 39,
    name: "Retro Sneakers",
    price: 0,
    category: "IRISI",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
];
