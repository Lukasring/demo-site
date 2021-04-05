import React from "react";
import classes from "./BannerCard.module.scss";
import umbrellaImg from "../../images/umbrella.svg";

export default function BannerCard() {
  return (
    <div
      className={classes.BannerCard}
      // style={{ backgroundImage: `url('${umbrellaImg}')` }}
    >
      <img src={umbrellaImg} alt="umbrella"></img>
    </div>
  );
}
