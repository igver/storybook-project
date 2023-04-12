import { HtmlHTMLAttributes } from "react";

export interface TextareaProps extends HtmlHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  nameAttribute: string;
  value?: string;
  rows?: number;
  cols?: number;
  messageValidity?: boolean;
}
