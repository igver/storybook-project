import React from "react";

import "./Button.scss";
import { ButtonProps } from "./Button.types";

export const Button = ({
  enabled,
  buttonLabel,
  onButtonClick,
  stockButton,
  cartButton,
  className,
}: ButtonProps) => {
  const mode = enabled ? "button-add__enabled" : "button-add__disabled";
  const stockButtonChecker = stockButton && "button-add__stock";
  const cartButtonChecker = cartButton && "button-add__button-cart";

  return (
    <button
      type="button"
      className={`button-add ${mode} ${stockButtonChecker} ${cartButtonChecker} ${className} `}
      onClick={(event) => (onButtonClick ? onButtonClick() : null)}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
