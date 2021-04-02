import React from "react";
import Header from "../Header/Header";
import Hamburger from "../Nav/HamburgerBtn/HamburgerBtn";
import Footer from "../Footer/Footer";
import classes from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header titleBold="demo" titleLight="site" link="./">
        <nav>
          <Hamburger></Hamburger>
        </nav>
      </Header>
      <main className={classes.Content}>{children}</main>
      <Footer></Footer>
    </>
  );
}
