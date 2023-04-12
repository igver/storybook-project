import { FormButtonProps } from "./FormButton.types";

import "./FormButton.scss";

const FormButton = ({ label, ...htmlInputProps }: FormButtonProps) => {
  return (
    <div className="form-control">
      <input
        className="form-button"
        type="submit"
        value={label}
        {...htmlInputProps}
      />
    </div>
  );
};

export default FormButton;
