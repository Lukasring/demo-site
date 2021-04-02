import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import classes from "./BannerCard.module.scss";
import umbrellaImg from "../../images/umbrella.svg";

export default function BannerCard() {
  return (
    <div className={classes.BannerCard}>
      <SectionTitle dark>Products</SectionTitle>
      <h3 className={classes.Subtitle}>Offers Today</h3>
      <div>
        <img src={umbrellaImg} alt="umbrella"></img>
      </div>
    </div>
  );
}
