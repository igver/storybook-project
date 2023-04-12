import Star from "./Star";
import { StarProps } from "./Star.types";

export default {
  title: "Atom/Star",
  component: Star,
  argTypes: {},
};

const Template = (args: StarProps) => <Star {...args} />;

export const emptyStar = Template.bind({});
emptyStar.args = {
  fill: false,
};

export const FilledStar = Template.bind({});
FilledStar.args = {
  fill: true,
};
