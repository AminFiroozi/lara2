export type Category = {
  id: string;
  name: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  inventory: number;
  images: string[];
  categoryId: string;
  featured: boolean;
};
