import ReviewForm from "../../molecules/ReviewForm/ReviewForm";
import ReviewPanel from "../../organisms/ReviewPanel/ReviewPanel";

import "./ReviewTemplate.scss";
import { ReviewTemplateProps } from "./ReviewTemplate.types";

const ReviewTemplate = ({ productId }: ReviewTemplateProps) => {
  const currProductId = productId;

  return (
    <div className="review-template">
      <ReviewPanel id={currProductId} />
      <ReviewForm />
    </div>
  );
};

export default ReviewTemplate;
