import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./MySwiper.scss";

import { ProductCard } from "../productCard/ProductCard";

import { useSelector } from "react-redux";
import { ReduxState } from "../../../../store/state.types";
// import { ProductCardProps } from "src/components/productCard/ProductCard.types";
import { MySwiperProps } from "./MySwiper.types";
import { ProductProps } from "../../../../lib/types/Product.types";
import Heading from "../../atoms/Heading/Heading";
import SwiperButton from "../../atoms/SwiperButton/SwiperButton";

import { useState } from "react";

import { Image } from "../../atoms/Image/Image";

export const MySwiper = ({
  similarProducts,
  visibleOne,
  currProd,
}: MySwiperProps) => {
  const products = useSelector((state: ReduxState) => state.product);

  const productIdForSlider: [] = similarProducts;

  const currentProductImages = currProd.image;

  // const currentProductAltText = currProd?.altText;

  // console.log(currentProductImages);

  let numDetailImages: number | undefined = 1;
  numDetailImages = currentProductImages?.length;

  // console.log(numDetailImages);

  const [imageIndex, setImageIndex] = useState(0);

  let productsForSlider: ProductProps[] = [];

  if (typeof productIdForSlider === "object") {
    productsForSlider = productIdForSlider.map((id: number) => {
      return products[id - 1];
    });
  }

  if (visibleOne) {
    return (
      <div className="my-swiper no-margin">
        <Swiper
          style={{ position: "relative" }}
          className={`${visibleOne && "swiper-border"}`}
          spaceBetween={0}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => {
            // console.log(swiper.realIndex);
            // console.log(productsForSlider.length);
            setImageIndex(swiper.realIndex);
          }}
          slidesPerView={1}
        >
          {currentProductImages?.map((image: string, _index: number) => {
            return (
              <div key={`${_index}`}>
                <SwiperSlide key={`${_index}`}>
                  <Image className="swiper-image" src={image} altText={image} />
                </SwiperSlide>
              </div>
            );
          })}
          <>
            {imageIndex > 0 && <SwiperButton variante="prev" size="small" />}

            {imageIndex < numDetailImages - 1 && (
              <SwiperButton variante="next" size="small" />
            )}
          </>
        </Swiper>
      </div>
    );
  }

  return (
    <div className="my-swiper">
      <div className="my-swiper__heading">
        <Heading
          text={`Similar ${
            productsForSlider.length > 1 ? "products" : "product"
          }`}
          variante="h3"
        />
      </div>

      <Swiper
        spaceBetween={productsForSlider.length > 1 ? 50 : 0}
        slidesPerView={3}
        pagination={{ clickable: true /*, el: "swiper-custom-pagination" */ }}
        onSlideChange={() => {}}
      >
        {productsForSlider.map((product: ProductProps, _index: number) => {
          return (
            <SwiperSlide key={`${_index}_${product.id}`}>
              <ProductCard
                key={`${product.heading}_${_index}_${product.id}`}
                heading={product.heading}
                altText={product.altText}
                description={product.description}
                image={product.image}
                price={product.price}
                url={product.url}
                stock={product.stock}
                id={product.id}
                similarProducts={product.similarProducts}
                // forSimilar={true}
                variante="similar"
              />
            </SwiperSlide>
          );
        })}
        {productsForSlider.length > 3 ? (
          <>
            <SwiperButton variante="prev" />
            <SwiperButton variante="next" />
          </>
        ) : (
          ""
        )}
      </Swiper>
    </div>
  );
};
