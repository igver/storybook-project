import { createSlice } from "@reduxjs/toolkit";
import { ProductItemCartProps } from "src/components/ProductItemCart/ProductItemCart.types";
// import { useDispatch } from "react-redux";
// import { ProductProps } from "src/lib/types/Product.types";

const innitialCartState: { products: ProductItemCartProps[] } = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: innitialCartState,
  reducers: {
    addNewToCart(state, action) {
      const currentProduct = action.payload;

      // console.log(currentProduct);

      state.products = [...state.products, currentProduct];
    },
    addExistingToCart(state, action) {
      const currentProduct = action.payload;

      const currIndex = state.products.findIndex(
        (element) => element.id === currentProduct.id
      );

      const currentNumOfItems = state.products[currIndex].numItems;
      const sumOfPrices = state.products[currIndex].price;

      // console.log(currIndex);

      state.products.splice(currIndex, 1);

      currentProduct.numItems = currentNumOfItems + 1;
      currentProduct.price += sumOfPrices;

      // state.products[currIndex].numItems += 1;

      // console.log(state.products[currIndex].numItems);

      // state.products[currIndex] = currentProduct;

      state.products = [...state.products, currentProduct];
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
