import React from "react";
import classes from "./Button.module.scss";

export default function Button({ link, inverted, fullwidth, children }) {
  let style = classes.Btn;
  style = inverted ? style + " " + classes.Inverted : style;
  style = fullwidth ? style + " " + classes.fullwidth : style;

  return <button className={style}>{children}</button>;
}
