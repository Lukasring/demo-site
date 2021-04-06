import React from "react";
import classes from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={classes.Footer}>
      ©️ <span className={classes.Bold}>DEMO</span>SITE All rights reserved
    </footer>
  );
}
