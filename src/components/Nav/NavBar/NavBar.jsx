import React from "react";
import NavItem from "./NavItem";
import classes from "./NavBar.module.scss";
import { PATHS } from "../../../common/paths";

export default function NavBar({ mobileOpen, clicked, links }) {
  const styles = [classes.NavBar];
  if (mobileOpen) {
    styles.push(classes.open);
  }
  return (
    <nav>
      <ul className={styles.join(" ")} onClick={clicked}>
        {links?.map((link) => (
          <NavItem
            key={link.path}
            path={link.path}
            dropdownItems={link?.dropdown}
          >
            {link.name}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
