import React from "react";

import { Story } from "@storybook/react";

import { MyModal } from "./MyModal";

export default {
  title: "My modal",
  component: MyModal,
  argTypes: {},
};

export const MyDefaultModal: Story = (args) => (
  <MyModal heading="My modal cart" show={false} usingMyModal={true} {...args} />
);
