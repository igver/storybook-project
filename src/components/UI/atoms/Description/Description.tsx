import { DescriptionProps } from "./Description.types";

import "./Description.scss";

export const Description = ({ text, ...props }: DescriptionProps) => {
  return (
    <div className="description">
      <p>{text}</p>
    </div>
  );
};

export default Description;
