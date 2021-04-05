import React, { useState } from "react";
import Header from "../Header/Header";
import Hamburger from "../Nav/HamburgerBtn/HamburgerBtn";
import NavBar from "../Nav/NavBar/NavBar";
import Footer from "../Footer/Footer";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Layout.module.scss";

export default function Layout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenuOpen = () => {
    setMobileMenuOpen((isOpen) => !isOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <>
      {mobileMenuOpen && <Backdrop clicked={closeMobileMenu} />}
      <Header titleBold="demo" titleLight="site" link="./">
        <NavBar mobileOpen={mobileMenuOpen} clicked={closeMobileMenu}></NavBar>
        <Hamburger clicked={toggleMobileMenuOpen}></Hamburger>
      </Header>
      <main className={classes.Content}>{children}</main>
      <Footer></Footer>
    </>
  );
}
