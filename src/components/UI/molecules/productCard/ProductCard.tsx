import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import { ProductCardProps } from "./ProductCard.types";
import "./productCard.scss";

import { Button } from "../../atoms/Button/Button";
import { productActions } from "../../../../store/products";
import { ReduxState } from "../../../../store/state.types";
import { addToCartHelper } from "../../../../lib/helpers/addToCartHelper";
import { Image } from "../../atoms/Image/Image";
import clsx from "clsx";

export const ProductCard = ({
  id,
  url,
  image,
  altText,
  heading,
  description,
  price,
  stock,
  similarProducts,
  // forSimilar,
  variante,
  ...props
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: ReduxState) => state);
  const { products } = cart;
  const productsInCart = products;

  const allProducts = useSelector((state: ReduxState) => state.product);

  // console.log(variante);

  const addToStockToast = (num: number) => {
    toast(
      `${num} item${num > 1 ? "s" : ""} of '${heading}' ${
        num > 1 ? "are" : "is"
      } added to cart!`,
      {
        className: "add-to-stock",
        progressClassName: "add-to-stock-progress",
        toastId: `${heading}_${id}_${productStockNumber}`,
      }
    );
  };

  const productToAdd = {
    id,
    heading,
    description,
    image,
    altText,
    price,
    stock,
    numItems: 1,
  };

  const productIndex = allProducts.findIndex((product) => {
    if (product.id === productToAdd.id) {
      return product;
    } else {
      return "";
    }
  });

  // const productStockNumber = allProducts[productIndex].stock;
  const productStockNumber = 0;
  // const productNumItems = allProducts[productIndex].numItems;

  const addToCartHandler = () => {
    addToCartHelper(
      dispatch,
      productToAdd,
      productsInCart,
      productStockNumber,
      productIndex
    );
  };

  // const forSimilar = variante === 'similar';

  const loadTheStock = (numberOfItems: number) => {
    dispatch(productActions.addToStock({ productIndex, numberOfItems }));

    addToStockToast(numberOfItems);
  };

  return (
    <>
      <div
        className={clsx(
          "product-card",
          variante && `product-card__${variante}`
        )}
        {...props}
      >
        <Link to={url || ""}>
          <h1>{heading}</h1>
        </Link>
        <Link to={url || ""}>
          <Image
            src={image[0]}
            altText={altText}
            onHover={(e) => {
              e.currentTarget.setAttribute("src", image[1]);
            }}
            offHover={(e) => {
              e.currentTarget.setAttribute("src", image[0]);
            }}
          />
        </Link>
        <div className="product-card__stock">
          Available: <span> items</span>
        </div>
        <div className="product-card__info">
          <p className="product-card__info__description">{description}</p>
          <span className="product-card__info__price">{price} €</span>
        </div>
        <Button
          buttonLabel="Add to Cart"
          enabled={productStockNumber >= 1 && true}
          onButtonClick={addToCartHandler}
        />
        {productStockNumber === 0 && (
          <Button
            buttonLabel="Load the stock"
            enabled={productStockNumber === 0}
            onButtonClick={() => loadTheStock(3)}
            stockButton={true}
          />
        )}
      </div>
    </>
  );
};

// ProductCard.defaultProps = {
//   url: "#",
//   image: "./images/default-image.jpg",
//   altText: "Default altText blue shoes",
//   heading: "Name of product",
//   description:
//     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
//   price: 75,
//   stock: 0,
//   // numItems: 0,
// };
