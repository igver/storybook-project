import { HTMLAttributes } from "react";

export interface InputFieldProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  variante: "text" | "email" | "number";
  value?: string;
  nameAttribute: string;
  inputValidity?: boolean;
}
