import React from "react";
import classes from "./Article.module.scss";

export default function Article({ children }) {
  return <div className={classes.Article}>{children}</div>;
}
