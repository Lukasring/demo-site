import React from "react";
import { Link } from "react-router-dom";
import classes from "./Dropdown.module.scss";

export default function Dropdown({ items, clicked }) {
  return items ? (
    <ul className={classes.Dropdown}>
      {items?.map((item) => (
        <li key={item.path} onClick={clicked}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
