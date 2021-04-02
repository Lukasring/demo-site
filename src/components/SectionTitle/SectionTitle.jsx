import React from "react";
import classes from "./SectionTitle.module.scss";

export default function SectionTitle({ underline, dark, children }) {
  let style = classes.SectionTitle;
  style = underline ? style + " " + classes.Underline : style;
  style = dark ? style + " " + classes.Dark : style;

  return <h2 className={style}>{children}</h2>;
}
