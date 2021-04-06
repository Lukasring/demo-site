import React from "react";
import Paragraph from "../Paragraph/Paragraph";
import classes from "./Footer.module.scss";

export default function Footer({ text, nav }) {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Content}>
        <div>
          <Paragraph margin="medium">{text}</Paragraph>
        </div>
        <div>{nav}</div>
      </div>
      <div className={classes.copyright}>
        ©️ <span className={classes.Bold}>DEMO</span>SITE All rights reserved
      </div>
    </footer>
  );
}
