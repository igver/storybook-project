import { ImageProps } from "./Image.types";
import "./Image.scss";

export const Image = ({
  src,
  altText,
  width,
  height,
  className,
  onHover,
  offHover,
  ...props
}: ImageProps) => {
  return (
    <div className="image-box">
      <img
        className={className}
        src={src}
        alt={altText}
        onMouseOver={onHover}
        onMouseOut={offHover}
      />
    </div>
  );
};
