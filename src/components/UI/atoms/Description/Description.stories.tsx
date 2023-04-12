import { Description } from "./Description";
import { DescriptionProps } from "./Description.types";

export default {
  title: "Atom/Description",
  element: Description,
  args: {},
};

const Template = (args: DescriptionProps) => <Description {...args} />;

export const defaultDescription = Template.bind({});
defaultDescription.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur quam varius faucibus tempor. Nam blandit eros vitae congue tincidunt. Curabitur ac ex lectus. Nulla facilisi. Etiam tempor posuere magna, in pellentesque eros sollicitudin id. Aliquam sed ultricies metus. Suspendisse interdum finibus magna, in bibendum ex.",
};
