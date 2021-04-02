import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import classes from "./HeroCard.module.scss";

export default function HeroCard() {
  return (
    <div className={classes.HeroCard}>
      <SectionTitle underline>Welcome</SectionTitle>
      <p className={classes.Content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className={classes.Control}>
        <a href="#" className={classes.Btn}>
          Learn More
        </a>
      </div>
    </div>
  );
}
