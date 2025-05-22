export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

// Ensure the first product has "White" in its name and description
export const products: Product[] = [
  {
    id: 1,
    name: 'White Sneakers',
    price: 100.99,
    category: 'Shoes',
    image: '/Shoes1.jpg',
    description: 'Premium white sneakers with comfortable insoles',
  },
  {
    id: 2,
    name: 'High Top Sneakers',
    price: 50.99,
    category: 'Shoes',
    image: '/Shoes2.webp',
    description: 'High top sneakers',
  },
  {
    id: 3,
    name: 'Red Sneakers',
    price: 60.99,
    category: 'Shoes',
    image: '/Shoes3.avif',
    description: 'Sneakers',
  },
  {
    id: 4,
    name: 'Green Backpack',
    price: 80.99,
    category: 'Fashion',
    image: '/BP1.avif',
    description: 'Fashion',
  },
  {
    id: 5,
    name: 'Red Backpack',
    price: 60.99,
    category: 'Backpack',
    image: '/BP2.avif',
    description: 'Backpack',
  },
   {
    id: 6,
    name: 'Yellow Backpack',
    price: 60.99,
    category: 'Backpack',
    image: '/BP3.avif',
    description: 'Backpack',
  },
  {
    id: 7,
    name: 'Sony Camera',
    price: 60.99,
    category: 'Electronics',
    image: '/Camera1.avif',
    description: 'Camera',
  },
  {
    id: 8,
    name: 'Canon Camera',
    price: 60.99,
    category: 'Electronics',
    image: '/Camera2.avif',
    description: 'Camera',
  },
  {
    id: 9,
    name: 'Samsung Phone',
    price: 60.99,
    category: 'Electronics',
    image: '/Phone1.avif',
    description: 'Phone',
  },
   {
    id: 10,
    name: 'IPhone',
    price: 60.99,
    category: 'Electronics',
    image: '/Phone2.avif',
    description: 'Phone',
  },
  {
    id: 11,
    name: 'Clothes',
    price: 60.99,
    category: 'Clothing',
    image: '/TS1.avif',
    description: 'Clothes',
  },
  {
    id: 12,
    name: 'Clothes',
    price: 60.99,
    category: 'Clothing',
    image: '/TS2.avif',
    description: 'Clothes',
  },
  {
    id: 13,
    name: 'Clothes',
    price: 60.99,
    category: 'Clothing',
    image: '/TS3.avif',
    description: 'Clothes',
  },
];
