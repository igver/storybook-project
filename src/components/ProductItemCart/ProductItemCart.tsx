import "./ProductItemCart.scss";
import { ProductItemCartProps } from "./ProductItemCart.types";

export const ProductItemCart = ({
  id,
  url,
  image,
  altText,
  heading,
  description,
  price,
  stock,
  numItems,
  ...props
}: ProductItemCartProps) => {
  return (
    <div className="product-item-cart">
      <img src={image[0]} alt={altText} width="70" height="auto" />
      <div className="product-item-cart__info">
        <h5>{heading}</h5>

        <div className="product-item-cart__info__details">
          <p>
            {numItems > 1 ? "Items" : "Item"}: {numItems}
          </p>
          <p className="product-item-cart__info__details__price">{price} €</p>
        </div>
      </div>
    </div>
  );
};

// ProductItemCart.defaultProps = {
//   id: "1",
//   url: "#",
//   image: "./images/default-image.jpg",
//   altText: "Default altText blue shoes",
//   heading: "Name of product",
//   description:
//     "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
//   price: 75,
//   stock: 0,
//   numItems: 1,
// };
