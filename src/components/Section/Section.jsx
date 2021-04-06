import React from "react";
import classes from "./Section.module.scss";

export const columns = {
  smallLarge: "small-large",
  largeSmall: "large-small",
};

export default function Section({ children, layout, Title }) {
  const styles = [classes.Section];
  if (layout === columns.smallLarge) {
    styles.push(classes.SmallLarge);
  }
  if (layout === columns.largeSmall) {
    styles.push(classes.LargeSmall);
  }

  return (
    <>
      <section className={styles.join(" ")}>{children}</section>
    </>
  );
}
