import Heading from "../../atoms/Heading/Heading";
import StarsBlock from "../StarsBlock/StarsBlock";
import UserName from "../../atoms/UserName/UserName";
import CompanyComment from "../../atoms/CompanyComment/CompanyComment";

import "./ReviewItem.scss";
import { ReviewItemProps } from "./ReviewItem.types";
// import { ProductProps } from "src/lib/types/Product.types";

const ReviewItem = ({ reviews }: ReviewItemProps) => {
  // console.log(id);
  // console.log(product);

  console.log(reviews);

  if (reviews === null || reviews === undefined) {
    return <p>No reviews at the moment!</p>;
  } else {
    return (
      <div className="review-items">
        {reviews.map((review) => {
          return (
            <div className="review-item" key={review.userName}>
              <UserName userName={review.userName} date={review.date} />

              <div className="review-item__rating-and-heading">
                <StarsBlock
                  averageRating={review.averageRating}
                  disabled={true}
                />
                <Heading text={review.title} variante="h6" />
              </div>

              <div className="review-item__message">
                <p>{review.reviewMessage}</p>
              </div>

              {review.reviewAnswer && (
                <div className="review-item__answer">
                  <CompanyComment text={review.reviewAnswer} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
};

export default ReviewItem;
