// import { ProductItemInfoProps } from "./ProductItemInfo.types";
// import { ProductPageProps } from "src/components/ProductPage/ProductPage.types";
import { ProductItemInfoProps } from "../../molecules/ProductItemInfo/ProductItemInfo.types";
import "./ProductItemInfo.scss";

import { Description } from "../../atoms/Description/Description";
import Heading from "../../atoms/Heading/Heading";
import Stock from "../../atoms/Stock/Stock";
import Button from "../../atoms/Button/Button";

import MyAccordion from "../../organisms/MyAccordion/MyAccordion";
import ReviewTemplate from "../../templates/ReviewTemplate/ReviewTemplate";

export const ProductItemInfo = (product: ProductItemInfoProps) => {
  // console.log(product);

  const isEnabled = product.stock > 0;

  return (
    <>
      <div className="product-item-info">
        <Heading text={product.heading} variante="h1" />
        <Description text={product.description} />
        <Stock numOfItems={product.stock} />
        <Button
          className="product-item-info__add-to-cart"
          buttonLabel="Add to Cart"
          enabled={isEnabled}
          onButtonClick={product.onButtonClick}
        />
      </div>
      <div className="my-accordion">
        <MyAccordion />
      </div>

      <ReviewTemplate productId={product.id} />
    </>
  );
};
