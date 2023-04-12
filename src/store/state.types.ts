import { ProductCardProps } from "src/components/UI/molecules/productCard/ProductCard.types";

export interface ReduxState {
  cart: CartState;
  modal: ModalState;
  product: ProductCardProps[];
}

export interface CartState {
  products: ProductCardProps[];
}

export interface ModalState {
  showModal: boolean;
  myModalInUse: boolean;
}

// export interface ProductsState {
//   products: ProductCardProps[];
// }

// ReduxState = {
//   card: [
//     {heading: String, id: String},
//     {heading: "test", id: "1"},
//     {heading: "test", id: "1"}
//   ],
//   modal: {
//     showModal: true
//   }
// }
