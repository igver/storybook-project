import { HtmlHTMLAttributes } from "react";

export interface StarsBlockProps extends HtmlHTMLAttributes<HTMLDivElement> {
  averageRating?: number;
  ratingText?: string;
  disabled?: boolean;
  onSetRating?: Function;
  fieldValidity?: boolean;
}
