import React from "react";
import classes from "./ContactForm.module.scss";
import Button from "../Button/Button";

const defaultSubmitHandler = (e) => {
  e.preventDefault();
  console.warn("Please Add submitHandler to ContactForm component!");
};

export default function ContactForm({ submitHandler = defaultSubmitHandler }) {
  return (
    <form className={classes.ContactForm} onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="msg">Message</label>
      <textarea type="text" name="msg" id="msg" rows="10" />
      <Button inverted fullwidth>
        Learn More
      </Button>
    </form>
  );
}
