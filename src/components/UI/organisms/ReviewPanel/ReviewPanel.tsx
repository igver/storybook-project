import { useSelector } from "react-redux";
import { ProductProps } from "src/lib/types/Product.types";
import Heading from "../../atoms/Heading/Heading";
import ReviewItem from "../../molecules/ReviewItem/ReviewItem";
import { ReviewPanelProps } from "../../organisms/ReviewPanel/ReviewPanel.types";

import { ReduxState } from "src/store/state.types";

import "./ReviewPanel.scss";
import StarsBlock from "../../molecules/StarsBlock/StarsBlock";

const ReviewPanel = ({ id }: ReviewPanelProps) => {
  // console.log(id);

  const { product } = useSelector((state: ReduxState) => state);
  const productId = id;

  const currentReviews = product.find((prod: ProductProps) => {
    return productId === prod.id;
  })?.review;

  // console.log(currentReviews);

  const numOfReviews = currentReviews?.length;

  let rating = currentReviews?.reduce((total, currentValue) => {
    return total + currentValue.averageRating;
  }, 0);

  // console.log(rating);
  // console.log(numOfReviews);

  if (rating !== undefined && numOfReviews !== undefined) {
    rating = rating / numOfReviews;
  }

  // console.log(rating);

  // let reviewsExist: boolean;
  // let numOfReviews: number;

  // if (currentReviews !== undefined && currentReviews !== null) {
  //   reviewsExist = true;
  //   numOfReviews = currentReviews?.length;
  // } else {
  //   reviewsExist = false;
  //   numOfReviews = 0;
  // }

  if (numOfReviews !== undefined && numOfReviews > 0) {
    return (
      <div className="review-panel">
        <div className="review-panel__heading-box">
          <Heading text={`${numOfReviews} Kundenbewertungen`} variante="h3" />
          <StarsBlock averageRating={rating} disabled={true} />
        </div>
        <p className="review-panel__para">
          Some lorem ispum text about reviews goes here
        </p>

        <ReviewItem reviews={currentReviews} />
      </div>
    );
  } else {
    return (
      <div className="review-panel">
        <Heading text="Kundenbewertungen" variante="h3" />
        <ReviewItem reviews={currentReviews} />
      </div>
    );
  }
};

export default ReviewPanel;
