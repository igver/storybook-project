import React from "react";

import { Link } from "react-router-dom";

import "./header.scss";
import { HeaderProps } from "./header.types";
import { Button } from "../Button/Button";

import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";

export const Header = ({ imagePath, text }: HeaderProps) => {
  const dispatch = useDispatch();

  const modalToggleHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  return (
    <header>
      <Link to="/">
        <img src={imagePath} className="logo" alt="Logo" />
      </Link>
      <p>{text}</p>
      <Button
        enabled={true}
        buttonLabel="Cart"
        cartButton={true}
        onButtonClick={modalToggleHandler}
      />
    </header>
  );
};

Header.defaultProps = {
  imagePath: "../images/logo.png",
  text: "Some lorem ipsum dolor sit amet text goes here",
};
