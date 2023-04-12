import React from "react";

import Textarea from "./Textarea";
import { TextareaProps } from "./Textarea.types";

import "./Textarea.scss";

export default {
  title: "Atom/Textarea",
  component: Textarea,
  argTypes: {},
};

const Template = (args: TextareaProps) => <Textarea {...args} />;

export const defaultTextarea = Template.bind({});
defaultTextarea.args = {
  label: "Message",
  nameAttribute: "message",
};
