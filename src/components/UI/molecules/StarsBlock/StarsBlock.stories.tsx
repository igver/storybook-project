import React from "react";
import StarsBlock from "./StarsBlock";

import { StarsBlockProps } from "./StarsBlock.types";

export default {
  title: "Molecules/Stars block",
  component: StarsBlock,
  argTypes: {},
};

const Template = (args: StarsBlockProps) => <StarsBlock {...args} />;

export const defaultStarsBlock = Template.bind({});
defaultStarsBlock.args = {};

export const RatingFour = Template.bind({});
RatingFour.args = {
  averageRating: 4,
};
