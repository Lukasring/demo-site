import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../Spinner/Spinner";
import classes from "./BannerCard.module.scss";
import umbrella from "../../images/umbrella.svg";
import snowflake from "../../images/snowflake.svg";
import glasses from "../../images/sunglasses.svg";

export default function BannerCard() {
  const [loading, setLoading] = useState(true);
  const [img, setImg] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/v1/places/vilnius/forecasts/long-term");
        const date = new Date();
        const currDay = date.getUTCDate().toString();
        const currHour = date.getUTCHours().toString();
        const conditionCode = res.data.forecastTimestamps.find((timestamp) =>
          timestamp.forecastTimeUtc.match(`${currDay} ${currHour}`)
        ).conditionCode;
        console.log(conditionCode);
        setImgByCurrWeather(conditionCode);
        setLoading(false);
      } catch (e) {
        console.error(e.message);
        setImg(glasses);
        setLoading(false);
      }
    };

    getData();
  }, []);

  function setImgByCurrWeather(condition) {
    switch (condition) {
      case "clear":
      case "isolated-clouds":
      case "scattered-clouds":
      case "na":
        setImg(glasses);
        break;
      case "overcast":
      case "light-rain":
      case "moderate-rain":
      case "heavy-rain":
      case "fog":
        setImg(umbrella);
        break;
      case "sleet":
      case "light-snow":
      case "moderate-snow":
      case "heavy-snow":
        setImg(snowflake);
        break;
      default:
        setImg(glasses);
    }
  }

  return (
    <div className={classes.BannerCard}>
      {loading ? <Spinner /> : <img src={img} alt="umbrella"></img>}
    </div>
  );
}
