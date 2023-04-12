import { Review } from "./Review.types";

export interface ProductProps {
  id: number;
  url?: string;
  image: string[];
  altText: string;
  heading: string;
  price: number;
  description: string;
  stock: number;
  similarProducts: [];
  review?: Review[];
  variante?: "homepage" | "similar";
}
