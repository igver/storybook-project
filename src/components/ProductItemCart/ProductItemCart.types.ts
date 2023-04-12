import { ProductProps } from "src/lib/types/Product.types";

export interface ProductItemCartProps extends ProductProps {
  numItems: number;
}
