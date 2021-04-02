import React from "react";
import classes from "./ThumbnailCard.module.scss";

export default function ThumbnailCard({ img, title }) {
  return (
    <div className={classes.ThumbnailCard}>
      <div>
        <img src={img} alt="thumbnail-img" />
      </div>
      <div className={classes.TitleWrapper}>
        <h3 className={classes.Title}>{title}</h3>
      </div>
    </div>
  );
}
