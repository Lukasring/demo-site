import React from "react";
import classes from "./ThumbnailCard.module.scss";

export default function ThumbnailCard({ img, title }) {
  return (
    <div className={classes.ThumbnailCard}>
      <div
        className={classes.ImgWrapper}
        style={{ backgroundImage: `url('${img}')` }}
      >
        <div className={classes.TitleWrapper}>
          <h3 className={classes.Title}>{title}</h3>
        </div>
      </div>
    </div>
  );
}
