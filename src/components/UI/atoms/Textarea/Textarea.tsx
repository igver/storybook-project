import { TextareaProps } from "./Textarea.types";

import "./Textarea.scss";

const Textarea = ({
  label,
  nameAttribute,
  rows,
  cols,
  messageValidity,
  ...htmlTextProps
}: TextareaProps) => {
  return (
    <div className={`form-control ${messageValidity === false ? "error" : ""}`}>
      <label>{label}</label>
      <textarea
        {...htmlTextProps}
        name={nameAttribute}
        rows={rows}
        cols={cols}
      />
    </div>
  );
};

export default Textarea;
