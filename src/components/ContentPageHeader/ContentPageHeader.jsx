import React from "react";
// import { useHistory } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import classes from "./ContentPageHeader.module.scss";

export default function ContentPageHeader({ children, link }) {
  // const history = useHistory();
  const history = useSelector((state) => state.history);
  const lastRoute = history[history.length - 2];

  return (
    <div className={classes.ContentPageHeader}>
      <SectionTitle dark underline>
        {children}
      </SectionTitle>
      <Button inverted link={lastRoute ? lastRoute : "/"}>
        ← Back
      </Button>
    </div>
  );
}
