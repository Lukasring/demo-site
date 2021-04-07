import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import classes from "./HeroCard.module.scss";

export default function HeroCard({ title, children }) {
  return (
    <div className={classes.HeroCard}>
      <SectionTitle underline>{title}</SectionTitle>
      <div className={classes.Content}>{children}</div>
      <div className={classes.Control}>
        <Button link="learn-more">Learn more</Button>
      </div>
    </div>
  );
}
