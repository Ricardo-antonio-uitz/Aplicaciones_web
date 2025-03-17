export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: "1",
    title: "Overthink This T-Shirt",
    description: "Hang on. Let me overthink this. A hilarious t-shirt for overthinkers.",
    price: 24.99,
    image: "https://ih1.redbubble.net/image.1654473456.5665/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u3.jpg",
    category: "T-Shirts",
    tags: ["funny", "humor", "overthinking", "black"]
  },
  {
    id: "2",
    title: "Stay Positive Shark T-Shirt",
    description: "Stay positive with this colorful shark design on a comfortable blue t-shirt.",
    price: 26.99,
    image: "https://ih1.redbubble.net/image.2404102447.9073/ssrco,classic_tee,mens,2f4cb5:1dee1fd9b6,front_alt,square_product,600x600.jpg",
    category: "T-Shirts",
    tags: ["shark", "funny", "colorful", "blue"]
  },
  {
    id: "3",
    title: "Ghost Boo T-Shirt",
    description: "Cute ghost saying 'boo' on a stylish black t-shirt. Perfect for Halloween or any day.",
    price: 23.99,
    image: "https://ih1.redbubble.net/image.4953435766.4852/ssrco,classic_tee,mens,101010:01c5ca27c6,front_alt,square_product,600x600.u2.jpg",
    category: "T-Shirts",
    tags: ["ghost", "halloween", "cute", "black"]
  },
  {
    id: "4",
    title: "Mummy Is Unimpressed T-Shirt",
    description: "Featuring a sarcastic mummy who is thoroughly unimpressed. Wear your attitude.",
    price: 25.99,
    image: "https://ih1.redbubble.net/image.5781310195.2997/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.u1.jpg",
    category: "T-Shirts",
    tags: ["mummy", "sarcastic", "funny", "white"]
  },
  {
    id: "5",
    title: "Nescafe Mug T-Shirt",
    description: "A humorous take on the classic Nescafe mug with a twist. For coffee lovers.",
    price: 24.99,
    image: "https://ih1.redbubble.net/image.4701959926.2043/ssrco,classic_tee,womens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg",
    category: "T-Shirts",
    tags: ["coffee", "mug", "nescafe", "white"]
  },
  {
    id: "6",
    title: "Coffee Tarot Card Sticker",
    description: "The Coffee tarot card design, perfect for laptops, water bottles, or any smooth surface.",
    price: 3.99,
    image: "https://i.etsystatic.com/19977973/r/il/0b59d9/3206796155/il_570xN.3206796155_t7lc.jpg",
    category: "Stickers",
    tags: ["coffee", "tarot", "mystical", "sticker"]
  },
  {
    id: "7",
    title: "Momma Needs A Latte Sticker",
    description: "Show your coffee love with this 'Momma Needs A Latte' design.",
    price: 3.49,
    image: "https://i.etsystatic.com/6544322/r/il/846955/2993947351/il_570xN.2993947351_rbic.jpg",
    category: "Stickers",
    tags: ["coffee", "latte", "mom", "sticker"]
  },
  {
    id: "8",
    title: "Nescafe Mug Tote Bag",
    description: "Carry your essentials in style with this Nescafe mug design tote bag.",
    price: 19.99,
    image: "https://ih1.redbubble.net/image.1487700467.8331/ssrco,tote,cotton,canvas_creme,flatlay,tall_portrait,750x1000-bg,f8f8f8.1.jpg",
    category: "Tote Bags",
    tags: ["coffee", "mug", "nescafe", "bag"]
  }
];
