import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = [
  {
    id: 1,
    heading: "Vans oldschool",
    url: "/product/1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis rutrum dui eget tempus.",
    image: [
      "/images/image-1.jpg",
      "/images/image-1-1.jpg",
      "/images/image-1-2.jpg",
      "/images/image-1-3.jpg",
      "/images/image-1-4.jpg",
    ],
    altText: "Vans oldschool",
    price: 70,
    stock: 5,
    similarProducts: [2, 3, 4, 5],
    review: [
      {
        userName: "Katta",
        date: "08.06.2022",
        averageRating: 4.7,
        title: "Lieblingskleid",
        reviewMessage:
          "Wunderschön!!! Kreiert eine tolle Siluette, auch bei etwas mehr Hüfte und Oberschenkel.",
        reviewAnswer:
          "Wir sind begeistert, dass der Artikel sich so verhält wie erwartet.",
      },
    ],
  },
  {
    id: 2,
    heading: "Vans lower",
    url: "/product/2",
    image: [
      "/images/image-2-1.jpg",
      "/images/image-2-2.jpg",
      "/images/image-2-3.jpg",
    ],
    altText: "Vans lower",
    price: 89,
    description:
      "Vivamus eleifend ornare dolor, vitae tristique felis porta id. Etiam varius urna ac ex vestibulum.",
    stock: 1,
    similarProducts: [1, 3, 4],
  },
  {
    id: 3,
    url: "/product/3",
    heading: "Vans red",
    image: [
      "/images/image-3-1.jpg",
      "/images/image-3-2.jpg",
      "/images/image-3-3.jpg",
    ],
    altText: "Vans red",
    price: 69,
    description:
      "In placerat tincidunt ipsum, a dictum dolor efficitur id. Aenean tincidunt lacus sit amet lectus.",
    stock: 3,
    similarProducts: [2, 3],
  },
  {
    id: 4,
    heading: "Vans blue",
    url: "/product/4",
    image: [
      "/images/image-4-1.jpg",
      "/images/image-4-2.jpg",
      "/images/image-4-3.jpg",
      "/images/image-4-4.jpg",
    ],
    altText: "Vans blue",
    price: 89,
    description:
      "Vivamus eleifend ornare dolor, vitae tristique felis porta id. Etiam varius urna ac ex vestibulum. ",
    stock: 1,
    similarProducts: [1],
  },
  {
    id: 5,
    heading: "Vans green",
    url: "/product/5",
    image: [
      "/images/image-5-1.jpg",
      "/images/image-5-2.jpg",
      "/images/image-4-3.jpg",
      "/images/image-4-4.jpg",
    ],
    altText: "Vans green",
    price: 45,
    description:
      "Vivamus eleifend ornare dolor, vitae tristique felis porta id. Etiam varius urna ac ex vestibulum. ",
    stock: 1,
    similarProducts: [1],
  },
];

// console.log(initialProductsState);

const productSlice = createSlice({
  name: "product",
  initialState: initialProductsState,
  reducers: {
    addProduct(state, action) {
      const index = action.payload;
      const currentProduct = state[index];

      currentProduct.stock -= 1;
      // currentProduct.numItems += 1;

      state = [...state, currentProduct];

      // console.log(currentProduct.numItems);

      // console.log("Product changed!");
    },
    addToStock(state, action) {
      const index = action.payload.productIndex;
      const currentProduct = state[index];

      currentProduct.stock =
        currentProduct.stock + action.payload.numberOfItems;

      // console.log("Add to stock");

      state = [...state, currentProduct];
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
