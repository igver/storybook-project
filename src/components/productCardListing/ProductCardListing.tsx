import React from "react";
import "./ProductCardListing.scss";
import { ProductCardListingProps } from "./ProductCardListing.types";
import { ProductCard } from "../UI/molecules/productCard/ProductCard";
import { useSelector } from "react-redux";
import { ReduxState } from "../../store/state.types";

export const ProductCardListing = ({ heading }: ProductCardListingProps) => {
  const products = useSelector((state: ReduxState) => state.product);

  // console.log(products);

  return (
    <div className="product-card-listing">
      <h1 className="product-card-listing__heading">{heading}</h1>

      {products.map((product, _index) => {
        // console.log(product);
        return (
          <ProductCard
            heading={product.heading}
            altText={product.altText}
            description={product.description}
            image={product.image}
            price={product.price}
            url={product.url}
            key={`${product.heading} ${_index}`}
            stock={product.stock}
            id={product.id}
            similarProducts={product.similarProducts}
            variante="homepage"
          />
        );
      })}
    </div>
  );
};
