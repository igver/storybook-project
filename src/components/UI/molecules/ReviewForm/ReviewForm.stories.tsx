import React from "react";

import ReviewForm from "./ReviewForm";

export default {
  title: "Molecules/Review form",
  component: ReviewForm,
};

const Template = () => <ReviewForm />;

export const defaultReviewForm = Template.bind({});
defaultReviewForm.args = {};
