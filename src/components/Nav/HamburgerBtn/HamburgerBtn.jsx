import React from "react";
import classes from "./HamburgerBtn.module.scss";

export default function HamburgerBtn({ clicked }) {
  return (
    <div className={classes.Hamburger} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
