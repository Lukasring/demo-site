import React from "react";
import classes from "./ContentCard.module.scss";

export default function ContentCard({ img, title, children }) {
  return (
    <div className={classes.ContentCard}>
      <div
        className={classes.ImgContainer}
        style={{ backgroundImage: `url('${img}')` }}
      ></div>
      <div className={classes.Content}>
        <h3 className={classes.Title}>{title}</h3>
        {children}
      </div>
    </div>
  );
}
