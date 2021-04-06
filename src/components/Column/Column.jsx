import React from "react";
import classes from "./Column.module.scss";

export default function Column({ children }) {
  return <div className={classes.Column}>{children}</div>;
}
