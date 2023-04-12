import ReviewTemplate from "./ReviewTemplate";
import { ReviewTemplateProps } from "./ReviewTemplate.types";

export default {
  title: "Template/ Review Template",
  component: ReviewTemplate,
  argTypes: {},
};

const Template = (args: ReviewTemplateProps) => <ReviewTemplate {...args} />;

export const reviewTemplateDefault = Template.bind({});
reviewTemplateDefault.args = {
  productId: 1,
};
