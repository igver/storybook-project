import React, { useEffect, useState } from "react";

import "./toast.scss";
import { ToastProps } from "./Toast.types";
import { Portal } from "react-portal";

export const Toast = ({ label, displayed, variante }: ToastProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 2000);
    }, 1000);
  }, [displayed]);

  return displayed ? (
    <Portal>
      <div
        className={`toast ${show && "toast__displayed"} toast__${variante} `}
      >
        <p>{label}</p>
      </div>
    </Portal>
  ) : null;
};

Toast.defaultProps = {
  label: "Added to Card",
  displayed: false,
  variante: `add-to-cart`,
};
