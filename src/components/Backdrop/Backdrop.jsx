import React, { useEffect } from "react";
import classes from "./Backdrop.module.scss";

export default function Backdrop({ clicked }) {
  useEffect(() => {
    document.body.classList.add("no-scroll");

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return <div className={classes.Backdrop} onClick={clicked}></div>;
}
