export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  isSoldOut?: boolean;
  isNew?: boolean;
}

export const categories = [
  "All",
  "FOOTWEAR",
  "TOPS",
  "BOTTOMS",
  "OUTERWEAR",
  "ACCESSORIES",
  "SUITING",
  "KNITWEAR",
  "SHIRTS",
  "DENIM",
  "ACTIVEWEAR",
  "SWIM",
  "LOUNGEWEAR",
  "SEASONAL",
];

export const products: Product[] = [
  // FOOTWEAR
  {
    id: 1,
    name: "New Balance 990v6 Cream",
    price: 285000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    name: "New Balance 991 Made in UK",
    price: 399700,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Premium Leather Loafers",
    price: 185000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Suede Chelsea Boots",
    price: 245000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Canvas Sneakers White",
    price: 95000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Hiking Trail Boots",
    price: 275000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 7,
    name: "Vintage Running Sneakers",
    price: 165000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
  },
  {
    id: 8,
    name: "Penny Loafers Burgundy",
    price: 198000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&h=600&fit=crop",
  },
  {
    id: 9,
    name: "Minimalist White Sneakers",
    price: 145000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=600&h=600&fit=crop",
  },
  {
    id: 10,
    name: "Oxford Dress Shoes",
    price: 225000,
    category: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&h=600&fit=crop",
  },

  // TOPS
  {
    id: 11,
    name: "Oxford Button Down Shirt",
    price: 85000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
  },
  {
    id: 12,
    name: "Cashmere Crewneck Sweater",
    price: 195000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
  },
  {
    id: 13,
    name: "Rugby Stripe Polo",
    price: 75000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=600&fit=crop",
  },
  {
    id: 14,
    name: "Linen Camp Collar Shirt",
    price: 95000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=600&fit=crop",
  },
  {
    id: 15,
    name: "Cable Knit Cardigan",
    price: 175000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
  },
  {
    id: 16,
    name: "Heavyweight Cotton Tee",
    price: 45000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  },
  {
    id: 17,
    name: "Striped Breton Shirt",
    price: 65000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=600&fit=crop",
  },
  {
    id: 18,
    name: "Merino Wool V-Neck",
    price: 125000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 19,
    name: "Flannel Check Shirt",
    price: 89000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop",
  },
  {
    id: 20,
    name: "Vintage Graphic Tee",
    price: 55000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop",
  },
  {
    id: 21,
    name: "Half-Zip Fleece Pullover",
    price: 135000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
  },
  {
    id: 22,
    name: "Chambray Work Shirt",
    price: 78000,
    category: "TOPS",
    image:
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&h=600&fit=crop",
  },

  // BOTTOMS
  {
    id: 23,
    name: "Essential Chino Pants",
    price: 95000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
  },
  {
    id: 24,
    name: "Selvedge Denim Jeans",
    price: 185000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop",
  },
  {
    id: 25,
    name: "Pleated Wool Trousers",
    price: 165000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&h=600&fit=crop",
  },
  {
    id: 26,
    name: "Cargo Utility Pants",
    price: 125000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 27,
    name: "Corduroy Wide Leg Pants",
    price: 115000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=600&fit=crop",
  },
  {
    id: 28,
    name: "Linen Drawstring Trousers",
    price: 89000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=600&h=600&fit=crop",
  },
  {
    id: 29,
    name: "Tailored Suit Pants",
    price: 175000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
  },
  {
    id: 30,
    name: "Vintage Wash Denim",
    price: 145000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=600&fit=crop",
  },
  {
    id: 31,
    name: "Athletic Track Pants",
    price: 75000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop",
  },
  {
    id: 32,
    name: "Classic Bermuda Shorts",
    price: 65000,
    category: "BOTTOMS",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
  },

  // OUTERWEAR
  {
    id: 33,
    name: "Wool Overcoat Camel",
    price: 395000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=600&fit=crop",
  },
  {
    id: 34,
    name: "Quilted Field Jacket",
    price: 285000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
  },
  {
    id: 35,
    name: "Leather Bomber Jacket",
    price: 485000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 36,
    name: "Harrington Jacket Navy",
    price: 195000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?w=600&h=600&fit=crop",
  },
  {
    id: 37,
    name: "Denim Trucker Jacket",
    price: 165000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop",
  },
  {
    id: 38,
    name: "Waxed Cotton Raincoat",
    price: 345000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=600&fit=crop",
  },
  {
    id: 39,
    name: "Shearling Collar Jacket",
    price: 525000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=600&h=600&fit=crop",
  },
  {
    id: 40,
    name: "Lightweight Parka",
    price: 275000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=600&fit=crop",
  },
  {
    id: 41,
    name: "Corduroy Blazer Brown",
    price: 245000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=600&fit=crop",
  },
  {
    id: 42,
    name: "Puffer Vest Black",
    price: 145000,
    category: "OUTERWEAR",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=600&fit=crop",
  },

  // ACCESSORIES
  {
    id: 43,
    name: "Leather Bifold Wallet",
    price: 65000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=600&h=600&fit=crop",
  },
  {
    id: 44,
    name: "Canvas Tote Bag",
    price: 85000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=600&h=600&fit=crop",
  },
  {
    id: 45,
    name: "Wool Beanie Hat",
    price: 35000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=600&fit=crop",
  },
  {
    id: 46,
    name: "Silk Pocket Square",
    price: 25000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop",
  },
  {
    id: 47,
    name: "Leather Belt Brown",
    price: 75000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
  },
  {
    id: 48,
    name: "Aviator Sunglasses",
    price: 145000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 49,
    name: "Cashmere Scarf Navy",
    price: 125000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop",
  },
  {
    id: 50,
    name: "Leather Weekender Bag",
    price: 385000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop",
  },
  {
    id: 51,
    name: "Stainless Steel Watch",
    price: 295000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
  },
  {
    id: 52,
    name: "Leather Cardholder",
    price: 45000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop",
  },
  {
    id: 53,
    name: "Baseball Cap Olive",
    price: 35000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&h=600&fit=crop",
  },
  {
    id: 54,
    name: "Knit Tie Navy",
    price: 55000,
    category: "ACCESSORIES",
    image:
      "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=600&h=600&fit=crop",
  },

  // SUITING
  {
    id: 55,
    name: "Navy Two-Piece Suit",
    price: 485000,
    category: "SUITING",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop",
  },
  {
    id: 56,
    name: "Charcoal Wool Suit",
    price: 525000,
    category: "SUITING",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
  },
  {
    id: 57,
    name: "Cream Linen Suit",
    price: 445000,
    category: "SUITING",
    image:
      "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 58,
    name: "Double Breasted Blazer",
    price: 285000,
    category: "SUITING",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=600&fit=crop",
  },
  {
    id: 59,
    name: "Tweed Sport Coat",
    price: 345000,
    category: "SUITING",
    image:
      "https://images.unsplash.com/photo-1555069519-127aadedf1ee?w=600&h=600&fit=crop",
  },
  {
    id: 60,
    name: "Black Tuxedo Set",
    price: 695000,
    category: "SUITING",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?w=600&h=600&fit=crop",
  },

  // KNITWEAR
  {
    id: 61,
    name: "Aran Cable Knit Sweater",
    price: 195000,
    category: "KNITWEAR",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=600&fit=crop",
  },
  {
    id: 62,
    name: "Lambswool Crewneck",
    price: 145000,
    category: "KNITWEAR",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop",
  },
  {
    id: 63,
    name: "Turtleneck Sweater Cream",
    price: 165000,
    category: "KNITWEAR",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
  },
  {
    id: 64,
    name: "Fair Isle Sweater",
    price: 225000,
    category: "KNITWEAR",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 65,
    name: "Shawl Collar Cardigan",
    price: 185000,
    category: "KNITWEAR",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=600&h=600&fit=crop",
  },
  {
    id: 66,
    name: "Zip-Up Knit Jacket",
    price: 175000,
    category: "KNITWEAR",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
  },

  // SHIRTS
  {
    id: 67,
    name: "White Dress Shirt",
    price: 95000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=600&fit=crop",
  },
  {
    id: 68,
    name: "Blue Bengal Stripe Shirt",
    price: 89000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&h=600&fit=crop",
  },
  {
    id: 69,
    name: "Pink Oxford Shirt",
    price: 85000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=600&fit=crop",
  },
  {
    id: 70,
    name: "Denim Western Shirt",
    price: 115000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&h=600&fit=crop",
  },
  {
    id: 71,
    name: "Gingham Check Shirt",
    price: 78000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&h=600&fit=crop",
  },
  {
    id: 72,
    name: "Linen Band Collar Shirt",
    price: 98000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 73,
    name: "Poplin Spread Collar",
    price: 105000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&h=600&fit=crop",
  },
  {
    id: 74,
    name: "Seersucker Summer Shirt",
    price: 89000,
    category: "SHIRTS",
    image:
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9?w=600&h=600&fit=crop",
  },

  // DENIM
  {
    id: 75,
    name: "Raw Selvedge Jeans",
    price: 245000,
    category: "DENIM",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=600&fit=crop",
  },
  {
    id: 76,
    name: "Slim Fit Dark Wash",
    price: 165000,
    category: "DENIM",
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?w=600&h=600&fit=crop",
  },
  {
    id: 77,
    name: "Relaxed Fit Light Wash",
    price: 145000,
    category: "DENIM",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&h=600&fit=crop",
  },
  {
    id: 78,
    name: "Black Stretch Denim",
    price: 155000,
    category: "DENIM",
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=600&fit=crop",
  },
  {
    id: 79,
    name: "Vintage Washed Jeans",
    price: 175000,
    category: "DENIM",
    image:
      "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 80,
    name: "Denim Shorts Indigo",
    price: 85000,
    category: "DENIM",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
  },

  // ACTIVEWEAR
  {
    id: 81,
    name: "Performance Running Tee",
    price: 55000,
    category: "ACTIVEWEAR",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  },
  {
    id: 82,
    name: "Training Joggers",
    price: 85000,
    category: "ACTIVEWEAR",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop",
  },
  {
    id: 83,
    name: "Zip-Up Track Jacket",
    price: 125000,
    category: "ACTIVEWEAR",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
  },
  {
    id: 84,
    name: "Compression Shorts",
    price: 45000,
    category: "ACTIVEWEAR",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
  },
  {
    id: 85,
    name: "Windbreaker Jacket",
    price: 145000,
    category: "ACTIVEWEAR",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=600&fit=crop",
  },
  {
    id: 86,
    name: "Hooded Sweatshirt Grey",
    price: 95000,
    category: "ACTIVEWEAR",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
    isSoldOut: true,
  },

  // SWIM
  {
    id: 87,
    name: "Swim Trunks Navy",
    price: 75000,
    category: "SWIM",
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&h=600&fit=crop",
  },
  {
    id: 88,
    name: "Tropical Print Shorts",
    price: 85000,
    category: "SWIM",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
  },
  {
    id: 89,
    name: "Striped Beach Shorts",
    price: 79000,
    category: "SWIM",
    image:
      "https://images.unsplash.com/photo-1520116468816-95b69f847357?w=600&h=600&fit=crop",
  },
  {
    id: 90,
    name: "Quick Dry Swim Shorts",
    price: 65000,
    category: "SWIM",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop",
  },

  // LOUNGEWEAR
  {
    id: 91,
    name: "Cotton Pajama Set",
    price: 85000,
    category: "LOUNGEWEAR",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
  },
  {
    id: 92,
    name: "Terry Cloth Robe",
    price: 145000,
    category: "LOUNGEWEAR",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop",
  },
  {
    id: 93,
    name: "Lounge Sweatpants",
    price: 75000,
    category: "LOUNGEWEAR",
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=600&fit=crop",
  },
  {
    id: 94,
    name: "Modal T-Shirt 3-Pack",
    price: 95000,
    category: "LOUNGEWEAR",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
  {
    id: 95,
    name: "Cashmere Lounge Hoodie",
    price: 295000,
    category: "LOUNGEWEAR",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop",
  },

  // SEASONAL
  {
    id: 96,
    name: "Wool Peacoat Navy",
    price: 385000,
    category: "SEASONAL",
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=600&fit=crop",
  },
  {
    id: 97,
    name: "Down Puffer Jacket",
    price: 345000,
    category: "SEASONAL",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop",
  },
  {
    id: 98,
    name: "Leather Gloves Brown",
    price: 85000,
    category: "SEASONAL",
    image:
      "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=600&h=600&fit=crop",
  },
  {
    id: 99,
    name: "Wool Blend Scarf",
    price: 75000,
    category: "SEASONAL",
    image:
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&h=600&fit=crop",
  },
  {
    id: 100,
    name: "Insulated Parka Green",
    price: 425000,
    category: "SEASONAL",
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=600&h=600&fit=crop",
    isSoldOut: true,
  },
];
