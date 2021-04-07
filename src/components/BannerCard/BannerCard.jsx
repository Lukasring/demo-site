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
        const currDay =
          date.getUTCDate() < 10 ? "0" + date.getUTCDate() : date.getUTCDate();
        const currHour =
          date.getUTCHours() < 10
            ? "0" + date.getUTCHours()
            : date.getUTCHours();
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
    if (
      condition === "clear" ||
      condition === "isolated-clouds" ||
      condition === "scattered-clouds" ||
      condition === "na"
    ) {
      setImg(glasses);
      return;
    }
    if (
      condition === "overcast" ||
      condition === "light-rain" ||
      condition === "moderate-rain" ||
      condition === "fog" ||
      condition === "heavy-rain"
    ) {
      setImg(umbrella);
      return;
    }
    if (
      condition === "sleet" ||
      condition === "light-snow" ||
      condition === "moderate-snow" ||
      condition === "heavy-snow"
    ) {
      setImg(snowflake);
      return;
    }
    setImg(glasses);
  }

  return (
    <div className={classes.BannerCard}>
      {loading ? <Spinner /> : <img src={img} alt="umbrella"></img>}
    </div>
  );
}
