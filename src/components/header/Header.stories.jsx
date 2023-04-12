import React from "react";

import { Header } from "./Header.tsx";

export default {
  title: "My header",
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const defaultHeader = Template.bind({});
defaultHeader.args = {
  imagePath: "./images/logo.png",
  text: "Lorem ipsum dolor sit amet",
};
