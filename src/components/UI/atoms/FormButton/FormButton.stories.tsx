import React from "react";

import FormButton from "./FormButton";
import { FormButtonProps } from "./FormButton.types";

import "./FormButton.scss";

export default {
  title: "Atom/Form Button",
  component: FormButton,
  argTypes: {},
};

const Template = (args: FormButtonProps) => <FormButton {...args} />;

export const defaultFormButton = Template.bind({});
defaultFormButton.args = {
  label: "Send",
  nameAttribute: "submit",
};
