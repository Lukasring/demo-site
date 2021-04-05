import React from "react";
import classes from "./Backdrop.module.scss";

export default function Backdrop({ clicked }) {
  return <div className={classes.Backdrop} onClick={clicked}></div>;
}
