import React from "react";
import classes from "./ContentCard.module.scss";

export default function ContentCard({ img }) {
  return (
    <div className={classes.ContentCard}>
      <div className={classes.ImgContainer}>
        <img src={img} alt="coffee" />
      </div>
      <div className={classes.Content}>
        <h3 className={classes.Title}>Ui/UX Design</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
