import { HeadingProps } from "./Heading.types";
import "./Heading.scss";

export const Heading = ({ text, variante }: HeadingProps) => {
  switch (variante) {
    case "h2":
      return <h2>{text}</h2>;
    case "h3":
      return <h3>{text}</h3>;
    case "h4":
      return <h4>{text}</h4>;
    case "h5":
      return <h5>{text}</h5>;
    case "h6":
      return <h6>{text}</h6>;
    default:
      return <h1>{text}</h1>;
  }
};

export default Heading;
