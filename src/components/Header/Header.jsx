import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

/**
 *
 * @param {string} titleBold - bold part of title
 * @param {string} titleLight - light part of title
 * @param {*} children
 */
export default function Header({ titleBold, titleLight, link, children }) {
  return (
    <header className={classes.Header}>
      <div className={classes.Content}>
        <Link to="/" className={classes.Title}>
          <span className={classes.Bold}>{titleBold}</span>
          {titleLight}
        </Link>
        {children}
      </div>
    </header>
  );
}
