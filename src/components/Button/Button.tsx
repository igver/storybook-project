import React from "react";

import "./Button.scss";
import { ButtonProps } from "src/components/Button/Button.types";

export const Button = ({
  enabled,
  buttonLabel,
  onButtonClick,
  stockButton,
  cartButton,
}: ButtonProps) => {
  const mode = enabled ? "button-add__enabled" : "button-add__disabled";
  const stockButtonChecker = stockButton && "button-add__stock";
  const cartButtonChecker = cartButton && "button-add__button-cart";

  return (
    <button
      type="button"
      className={`button-add ${mode} ${stockButtonChecker} ${cartButtonChecker}`}
      onClick={(event) => (onButtonClick ? onButtonClick() : null)}
    >
      {buttonLabel}
    </button>
  );
};
