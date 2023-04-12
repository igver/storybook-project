import React from "react";

import InputField from "./InputField";
import { InputFieldProps } from "./InputField.types";

import "./InputField.scss";

export default {
  title: "Atom/Input field",
  component: InputField,
  argTypes: {},
};

const Template = (args: InputFieldProps) => <InputField {...args} />;

export const defaultInputField = Template.bind({});
defaultInputField.args = {
  label: "Name",
  nameAttribute: "input-field",
};
