import { CompanyCommentProps } from "./CompanyComment.types";

import "./CompanyComment.scss";

const CompanyComment = ({ text }: CompanyCommentProps) => {
  return (
    <div className="company-comment">
      <label>hessnatur</label>
      <p>{text}</p>
    </div>
  );
};

export default CompanyComment;
