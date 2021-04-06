import React from "react";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import classes from "./Header.module.scss";

/**
 *
 * @param {string} titleBold - bold part of title
 * @param {string} titleLight - light part of title
 * @param {Path} link - Header title link
 * @param {arr} topItems - optional items on top of header
 * @param {*} children
 */
export default function Header({
  titleBold,
  titleLight,
  link,
  topItems,
  children,
}) {
  return (
    <header className={classes.Header}>
      <div className={classes.TopItems}>
        {topItems && <HeaderTop items={topItems} />}
      </div>
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
