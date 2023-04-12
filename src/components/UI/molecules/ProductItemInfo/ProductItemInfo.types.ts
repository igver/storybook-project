export interface ProductItemInfoProps {
  id: number;
  url?: string;
  image: string[];
  altText: string;
  heading: string;
  price: number;
  description: string;
  stock: number;
  similarProducts?: object;
  onButtonClick?: Function;
  review?: object[];
  variante?: "homepage" | "similar";
}
