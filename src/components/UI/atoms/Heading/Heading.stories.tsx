import { Heading } from "./Heading";
import { HeadingProps } from "./Heading.types";

export default {
  title: "Atom / Heading",
  component: Heading,
  args: {},
};

const Template = (args: HeadingProps) => <Heading {...args} />;

export const headingOne = Template.bind({});
headingOne.args = {
  text: "Heading 1",
  variante: "h1",
};

export const headingTwo = Template.bind({});
headingTwo.args = {
  text: "Heading 2",
  variante: "h2",
};

export const headingThree = Template.bind({});
headingThree.args = {
  text: "Heading 3",
  variante: "h3",
};

export const headingFour = Template.bind({});
headingFour.args = {
  text: "Heading 4",
  variante: "h4",
};

export const headingfive = Template.bind({});
headingfive.args = {
  text: "Heading 5",
  variante: "h5",
};

export const headingSix = Template.bind({});
headingSix.args = {
  text: "Heading 6",
  variante: "h6",
};
