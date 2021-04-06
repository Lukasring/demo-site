import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import classes from "./ContentPageHeader.module.scss";

export default function ContentPageHeader({ children, link }) {
  return (
    <div className={classes.ContentPageHeader}>
      <SectionTitle dark underline>
        {children}
      </SectionTitle>
      <Button inverted link={link}>
        ← Back
      </Button>
    </div>
  );
}
