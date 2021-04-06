import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.scss";

export default function Button({
  link,
  inverted,
  fullwidth,
  children,
  onClick,
}) {
  let style = classes.Btn;
  style = inverted ? style + " " + classes.Inverted : style;
  style = fullwidth ? style + " " + classes.fullwidth : style;

  if (link) {
    return (
      <Link to={link} className={style}>
        {children}
      </Link>
    );
  }

  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
