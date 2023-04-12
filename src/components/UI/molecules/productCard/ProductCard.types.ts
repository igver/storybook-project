import { ProductProps } from "src/lib/types/Product.types";

export interface ProductCardProps extends ProductProps {
  forSimilar?: boolean;
}
