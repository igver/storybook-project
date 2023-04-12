// import StarBlockProps from

import { useEffect, useState } from "react";

import Star from "../../atoms/Star/Star";

import "./StarsBlock.scss";
import { StarsBlockProps } from "./StarsBlock.types";

const StarsBlock = ({
  averageRating,
  ratingText,
  disabled,
  onSetRating,
  fieldValidity,
}: StarsBlockProps) => {
  if (averageRating === undefined) {
    averageRating = 0;
  }

  const [rating, setRating] = useState(averageRating);

  // const fillStars = (index: number) => {
  //   index += 1;

  // for (let i = 0; i < index; i++) {
  //   starsStatus[i] = 1;
  //   console.log(index);
  // }

  // setStarStatus(starsStatus);

  //   console.log("clicked");
  // };

  useEffect(() => {
    onSetRating && onSetRating(rating);
  });

  const ratingHandler = (item: number) => {
    !disabled && setRating(item);
    // setRating(item);
  };

  // console.log(averageRating);

  return (
    <div
      className={`stars-block ${fieldValidity === false ? "error" : ""} ${
        disabled && "disabled"
      } `}
    >
      {[1, 2, 3, 4, 5].map((item) => {
        // console.log(item);

        return (
          <Star
            fill={rating < item ? false : true}
            key={item}
            index={item}
            onClickHandler={() => ratingHandler(item)}
          />
        );
      })}

      {ratingText && <p>({ratingText})</p>}
    </div>
  );
};

export default StarsBlock;
