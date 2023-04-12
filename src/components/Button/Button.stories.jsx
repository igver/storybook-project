import React from "react";
import { Button } from "./Button";

export default {
  title: "Button Add - enabled",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const enebledButton = Template.bind({});
enebledButton.args = {
  enabled: true,
  buttonLabel: "Add to cart",
  numberOfItems: 10,
};

export const disabledButton = Template.bind({});
disabledButton.args = {
  enabled: false,
  buttonLabel: "Out of stock",
  numberOfItems: 0,
};
