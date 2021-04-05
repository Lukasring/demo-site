import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import classes from "./NavItem.module.scss";

export default function NavItem({ path, dropdownItems, clicked, children }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mouseEnterHandler = () => {
    setDropdownOpen(true);
  };

  const mouseLeaveHandler = () => {
    setDropdownOpen(false);
  };

  const dropdownItemClickedHandler = () => {
    setDropdownOpen(false);
  };
  return (
    <li onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <NavLink to={path} className={classes.NavItem}>
        {children}
      </NavLink>
      {dropdownOpen && (
        <Dropdown
          items={dropdownItems}
          clicked={dropdownItemClickedHandler}
        ></Dropdown>
      )}
    </li>
  );
}
