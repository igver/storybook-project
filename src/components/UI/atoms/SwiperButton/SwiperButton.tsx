import { SwiperButtonProps } from "./SwiperButton.types";

import { useSwiper } from "swiper/react";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import "./SwiperButton.scss";

const SwiperButton = (props: SwiperButtonProps) => {
  const swiper = useSwiper();

  const isNext = props.variante === "next" ? true : false;
  const size = props.size;

  const next = () => {
    swiper.slideNext();
  };

  const prev = () => {
    swiper.slidePrev();
  };

  return (
    <div className={`swiper-button ${isNext ? "next" : "prev"} ${size}`}>
      <button
        onClick={isNext ? next : prev}
        aria-label={isNext ? "next" : "prev"}
      >
        {isNext ? <FaAngleRight /> : <FaAngleLeft />}
      </button>
    </div>
  );
};

export default SwiperButton;
