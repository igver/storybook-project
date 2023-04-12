import React from "react";
import CompanyComment from "./CompanyComment";

import { CompanyCommentProps } from "./CompanyComment.types";

export default {
  title: "Atom/Company comment",
  component: CompanyComment,
  argTypes: {},
};

const Template = (args: CompanyCommentProps) => <CompanyComment {...args} />;

export const defaultCompanComment = Template.bind({});
defaultCompanComment.args = {
  text: "Some lorem ispum text goes here like comment or answer to customer comment",
};
