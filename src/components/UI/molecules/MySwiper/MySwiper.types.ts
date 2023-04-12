import { ProductProps } from "src/lib/types/Product.types";

export interface MySwiperProps {
  heading: string;
  similarProducts: [];
  visibleOne?: boolean;
  currProd: ProductProps;
}
