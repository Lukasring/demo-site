import React from "react";
import { Link } from "react-router-dom";
import classes from "./HeaderTop.module.scss";

export default function HeaderTop({ items }) {
  return (
    <div className={classes.HeaderTop}>
      {items?.map((item) => (
        <Link to={item.path} className={classes.Item}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
