import React, { useState, FormEvent } from "react";

import Heading from "../../atoms/Heading/Heading";
import InputField from "../../atoms/InputField/InputField";
import Textarea from "../../atoms/Textarea/Textarea";
import FormButton from "../../atoms/FormButton/FormButton";
import StarsBlock from "../StarsBlock/StarsBlock";
import { Review } from "src/lib/types/Review.types";

import "./ReviewForm.scss";

const ReviewForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const [ratingValidity, setRatingValidity] = useState<boolean | undefined>();
  const [emailValidity, setEmailValidity] = useState<boolean | undefined>();
  const [messageValidity, setMessageValidity] = useState<boolean | undefined>();

  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${day}. ${month}. ${year}`;

  // console.log(currentDate);

  const emailChangeHandler = (value: string) => {
    setEmailInput(value);
    value !== "" ? setEmailValidity(true) : setEmailValidity(false);
  };
  const nameInputHandler = (value: string) => {
    setNameInput(value);
  };
  const titleInputHandler = (value: string) => {
    setTitleInput(value);
  };
  const textareaInputHandler = (value: string) => {
    setMessageInput(value);
    value !== "" ? setMessageValidity(true) : setMessageValidity(false);
  };

  let userRating: number = 0;

  const onSetRatingHandler = (starRating: number) => {
    userRating = starRating;
    starRating !== 0 && setRatingValidity(true);
  };

  const addReviewHandler = (event: FormEvent) => {
    event.preventDefault();

    // userRating !== 0 ? setRatingValidity(true) : setRatingValidity(false);
    // emailInput.length > 0 ? setEmailValidity(true) : setEmailValidity(false);
    // messageInput.length > 0
    //   ? setMessageValidity(true)
    //   : setMessageValidity(false);

    // console.log(ratingValidity);
    // console.log(emailValidity);
    // console.log(messageValidity);

    if (ratingValidity && emailValidity && messageValidity) {
      const newReview: Review = {
        userName: nameInput,
        averageRating: userRating,
        date: currentDate,
        title: titleInput,
        reviewMessage: messageInput,
      };

      console.log(newReview);
    } else {
      setRatingValidity(false);
      setEmailValidity(false);
      setMessageValidity(false);
      console.log("Some fileds are empty!");
    }
  };

  return (
    <div className="form-box">
      <Heading variante="h3" text="BEWERTEN SIE DIESES PRODUKT" />
      <StarsBlock
        ratingText="Pflichtefeld"
        onSetRating={onSetRatingHandler}
        fieldValidity={ratingValidity}
      />

      <form onSubmit={addReviewHandler}>
        <InputField
          label="Email (Pflichtfeld)"
          variante="email"
          nameAttribute="email"
          value={emailInput}
          inputValidity={emailValidity}
          onChange={(event) => {
            emailChangeHandler(event.currentTarget.value);
          }}
        />

        <InputField
          label="Ihr Name (wird uber der bewertung angezeigt)"
          variante="text"
          nameAttribute="name"
          className={emailValidity === false ? "error" : ""}
          value={nameInput}
          onChange={(event) => {
            nameInputHandler(event.currentTarget.value);
          }}
        />

        <InputField
          label="Titel ihrer Bewertung"
          variante="text"
          nameAttribute="title"
          value={titleInput}
          onChange={(event) => {
            titleInputHandler(event.currentTarget.value);
          }}
        />

        <Textarea
          label="Bewertungstext (Pflichtfeld)"
          nameAttribute="message"
          value={messageInput}
          messageValidity={messageValidity}
          onChange={(event) => {
            textareaInputHandler(event?.currentTarget.value);
          }}
        />

        <p>Some lorem ipsum text goes here</p>
        <FormButton label="Send" />
      </form>

      {/* <form onSubmit={addReviewHandler}>
        <InputField
          label="E-mail"
          variante="email"
          inputName="email"
          inputType="input"
        />
        <InputField
          label="Name"
          variante="text"
          inputName="name"
          inputType="input"
        />
        <InputField
          label="Surname"
          variante="text"
          inputName="surname"
          inputType="input"
        />
        <InputField
          label="Message"
          variante="text"
          inputName="message"
          inputType="textarea"
        />
        <p>Some lorem ipsum text goes here</p>
        <InputField variante="submit" inputType="submit" />
      </form> */}
    </div>
  );
};

export default ReviewForm;
