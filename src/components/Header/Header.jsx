import React from "react";
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
        <h2 className={classes.Title}>
          <span className={classes.Bold}>{titleBold}</span>
          {titleLight}
        </h2>
        {children}
      </div>
    </header>
  );
}
