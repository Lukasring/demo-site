import React from "react";
import classes from "./SectionTitle.module.scss";

export default function SectionTitle({ underline, dark, subtitle, children }) {
  let titleStyle = classes.SectionTitle;
  let subtitleStyle = classes.SectionSubtitle;

  titleStyle = underline ? titleStyle + " " + classes.Underline : titleStyle;
  titleStyle = dark ? titleStyle + " " + classes.Dark : titleStyle;
  subtitleStyle = dark ? subtitleStyle + " " + classes.Dark : subtitleStyle;

  return (
    <div className={classes.TitleWrapper}>
      <h2 className={titleStyle}>{children}</h2>
      {subtitle ? <h3 className={subtitleStyle}>{subtitle}</h3> : null}
    </div>
  );
}
