export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "White Sneakers",
    price: 100.99,
    category: "Shoes",
    image: "/Shoes1.jpg",
    description: "Premium white sneakers"
  },
  {
    id: 2,
    name: "High Top Sneakers",
    price: 50.99,
    category: "Shoes",
    image: "/Shoes2.webp",
    description: "High top sneakers"
  },
  {
    id: 3,
    name: "Red Sneakers",
    price: 60.99,
    category: "Shoes",
    image: "/Shoes3.avif",
    description: "Sneakers"
  }
  // {
  //   id: 4,
  //   name: "Denim Jeans",
  //   price: 49.99,
  //   category: "Clothing",
  //   image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",
  //   description: "Classic denim jeans with straight fit"
  // },
  // {
  //   id: 5,
  //   name: "Coffee Table",
  //   price: 149.99,
  //   category: "Home",
  //   image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&q=80",
  //   description: "Modern coffee table with wooden finish"
  // },
  // {
  //   id: 6,
  //   name: "Desk Lamp",
  //   price: 39.99,
  //   category: "Home",
  //   image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
  //   description: "Adjustable desk lamp with LED bulb"
  // }
];
