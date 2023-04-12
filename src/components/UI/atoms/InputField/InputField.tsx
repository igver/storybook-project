import { InputFieldProps } from "./InputField.types";

import "./InputField.scss";

const InputField = ({
  label,
  variante,
  nameAttribute,
  inputValidity,
  ...htmlInputProps
}: InputFieldProps) => {
  return (
    <div className={`form-control ${inputValidity === false ? "error" : ""} `}>
      <label>{label}</label>
      <input {...htmlInputProps} type={variante} name={nameAttribute} />
    </div>
  );
};

export default InputField;
