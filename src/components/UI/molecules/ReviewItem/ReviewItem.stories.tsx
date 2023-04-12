import ReviewItem from "./ReviewItem";
import { ReviewItemProps } from "./ReviewItem.types";

export default {
  title: "Molecules/Review Item",
  component: ReviewItem,
  argTypes: {},
};

const Template = (args: ReviewItemProps) => <ReviewItem {...args} />;

export const defaultReviewItem = Template.bind({});
defaultReviewItem.args = {
  reviews: [
    {
      userName: "Katta",
      date: "08.06.2022",
      averageRating: 4.7,
      title: "Lieblingskleid",
      reviewMessage:
        "Wunderschön!!! Kreiert eine tolle Siluette, auch bei etwas mehr Hüfte und Oberschenkel.",
      reviewAnswer:
        "Wir sind begeistert, dass der Artikel sich so verhält wie erwartet.",
    },
  ],
};
