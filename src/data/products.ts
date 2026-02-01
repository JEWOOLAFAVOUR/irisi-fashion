export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  hoverImage: string;
  isNew?: boolean;
  isSoldOut?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wool Blend Overcoat",
    price: 595,
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1544923246-77307dd628b0?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "Cable Knit Sweater",
    price: 245,
    category: "Knitwear",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600&h=800&fit=crop",
  },
  {
    id: 3,
    name: "Pleated Wool Trousers",
    price: 325,
    category: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=800&fit=crop",
  },
  {
    id: 4,
    name: "Oxford Button Down",
    price: 165,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 5,
    name: "Leather Weekend Bag",
    price: 495,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
  },
  {
    id: 6,
    name: "Cashmere Scarf",
    price: 185,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=800&fit=crop",
  },
  {
    id: 7,
    name: "Suede Loafers",
    price: 395,
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=600&h=800&fit=crop",
    isSoldOut: true,
  },
  {
    id: 8,
    name: "Cotton Varsity Jacket",
    price: 425,
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
    isNew: true,
  },
  {
    id: 9,
    name: "Merino Polo Shirt",
    price: 145,
    category: "Shirts",
    image:
      "https://images.unsplash.com/photo-1625910513413-5fc45b57e88b?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=600&h=800&fit=crop",
  },
  {
    id: 10,
    name: "Corduroy Trousers",
    price: 275,
    category: "Bottoms",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop",
  },
  {
    id: 11,
    name: "Leather Belt",
    price: 125,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop",
  },
  {
    id: 12,
    name: "Quilted Vest",
    price: 295,
    category: "Outerwear",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=800&fit=crop",
    hoverImage:
      "https://images.unsplash.com/photo-1544923246-77307dd628b0?w=600&h=800&fit=crop",
  },
];

export const categories = [
  "All",
  "Outerwear",
  "Knitwear",
  "Shirts",
  "Bottoms",
  "Footwear",
  "Accessories",
];
