import { toast } from "react-toastify";
import { ProductItemCartProps } from "../../components/ProductItemCart/ProductItemCart.types";
import { cartActions } from "../../store/cart";
import { productActions } from "../../store/products";
import { ProductProps } from "../types/Product.types";

export const addToCartHelper: Function = (
  dispatch: Function,
  productToAdd: ProductItemCartProps,
  productsInCart: ProductItemCartProps[],
  productStockNumber: number,
  productIndex: number
) => {
  const addToExistingProduct = (
    allProductsCart: ProductProps[],
    currentProduct: ProductProps,
    index: number
  ) => {
    let existingProductInCart = allProductsCart[index];

    existingProductInCart = {
      ...currentProduct,
    };

    dispatch(cartActions.addExistingToCart(existingProductInCart));
  };

  if (productStockNumber > 0) {
    toast(`The ${productToAdd.heading} is added to cart!`, {
      className: "add-to-cart",
      progressClassName: "add-to-cart-progress",
      toastId: `${productToAdd.heading}_${productToAdd.id}_${productStockNumber}`,
    });

    const index = productsInCart.findIndex(
      (element) => element.id === productToAdd.id
    );

    if (index === -1) {
      dispatch(cartActions.addNewToCart({ ...productToAdd, numItems: 1 }));
    } else {
      addToExistingProduct(productsInCart, productToAdd, index);
    }

    dispatch(productActions.addProduct(productIndex));
  }

  // return console.log("Change prod stats");
};
