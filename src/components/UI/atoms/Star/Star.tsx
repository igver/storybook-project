import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { StarProps } from "./Star.types";

import "./Star.scss";

const Star = ({ fill, onClickHandler }: StarProps) => {
  return (
    // <button onClick={() => setFillStatus(!fillStatus)}>
    <button className="button-star" onClick={onClickHandler}>
      {fill === true ? (
        <AiFillStar className="star star-fill" />
      ) : (
        <AiOutlineStar className="star" />
      )}
    </button>
  );
};

export default Star;
