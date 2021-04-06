import React from "react";
import classes from "./Paragraph.module.scss";

export default function Paragraph({ placeholder, margin, children }) {
  const styles = [classes.Paragraph];
  switch (margin) {
    case "none":
      styles.push(classes.noMargin);
      break;
    case "large":
      styles.push(classes.largeMargin);
      break;
    case "medium":
      styles.push(classes.mediumMargin);
      break;
    default:
      break;
  }

  return placeholder ? (
    <p className={styles.join(" ")}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  ) : (
    <p className={styles.join(" ")}>{children}</p>
  );
}
