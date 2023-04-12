import ReviewPanel from "./ReviewPanel";
import { ReviewPanelProps } from "./ReviewPanel.types";

export default {
  title: "Organism/Review Panel",
  component: ReviewPanel,
  argTypes: {},
};

const Template = (args: ReviewPanelProps) => <ReviewPanel {...args} />;

export const reviewPanelWithReviews = Template.bind({});
reviewPanelWithReviews.args = {
  id: 1,
};

export const reviewPanelWithoutReviews = Template.bind({});
reviewPanelWithoutReviews.args = {
  id: 2,
};
