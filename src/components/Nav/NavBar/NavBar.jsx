import React from "react";
import NavItem from "./NavItem";
import classes from "./NavBar.module.scss";
import { PATHS } from "../../../common/paths";

export default function NavBar({ mobileOpen, clicked }) {
  const styles = [classes.NavBar];
  if (mobileOpen) {
    styles.push(classes.open);
  }
  return (
    <nav>
      <ul className={styles.join(" ")} onClick={clicked}>
        {PATHS.map((path) => (
          <NavItem
            key={path.path}
            path={path.path}
            dropdownItems={path?.dropdown}
          >
            {path.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
