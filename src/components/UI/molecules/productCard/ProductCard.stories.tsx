import React from "react";
import { RouterProvider } from "react-router-dom";
import { ProductProps } from "src/lib/types/Product.types";

import router from "src/routes/routes";

import { ProductCard } from "./ProductCard";
import { ProductCardProps } from "./ProductCard.types";

export default {
  title: "Product card",
  component: ProductCard,
  argTypes: {},
};

const Template = (args: ProductCardProps) => (
  <RouterProvider router={router}>
    <ProductCard {...args} />
  </RouterProvider>
);

export const defaultCard = Template.bind({});
defaultCard.args = {};

export const firstCard = Template.bind({});
firstCard.args = {
  heading: "Vans oldschool",
  description: "Some text goes here lorem ipsum dolor sit amet",
  image: "./images/image-1.jpg",
  altText: "Vans shoes",
  price: 20,
  stock: 10,
  url: "/product/1",
};

export const secondCard = Template.bind({});
secondCard.args = {
  heading: "Vans shoes",
  image: "./images/image-2.jpg",
  altText: "Vans shoes black",
  price: 150,
  description: "Some text goes here",
  stock: 10,
  url: "/product/1",
};
