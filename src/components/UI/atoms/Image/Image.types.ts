import { MouseEventHandler } from "react";

export interface ImageProps extends React.HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  altText: string;
  width?: string;
  height?: string;
  onHover?: MouseEventHandler;
  offHover?: MouseEventHandler;
}
