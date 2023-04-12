import React from "react";
import { Footer } from "./Footer.tsx";

export default {
  title: "My footer",
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args} />;

export const myFooter = Template.bind({});
myFooter.args = {};
