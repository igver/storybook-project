import React from "react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Atom/Button",
  component: Button,
  argTypes: {},
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const enebledButton = Template.bind({});
enebledButton.args = {
  enabled: true,
  buttonLabel: "Add to carts",
  numberOfItems: 10,
};

export const disabledButton = Template.bind({});
disabledButton.args = {
  enabled: false,
  buttonLabel: "Out of stock",
  numberOfItems: 0,
};

export const stockButton = Template.bind({});
stockButton.args = {
  buttonLabel: "Add to the stock",
  numberOfItems: 0,
  stockButton: true,
};

export const cartButton = Template.bind({});
cartButton.args = {
  buttonLabel: "Cart",
  cartButton: true,
};
