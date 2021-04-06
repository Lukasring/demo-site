import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as actions from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { headerTopItems, PATHS } from "../../common/paths";
import Header from "../Header/Header";
import Hamburger from "../Nav/HamburgerBtn/HamburgerBtn";
import NavBar from "../Nav/NavBar/NavBar";
import Footer from "../Footer/Footer";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Layout.module.scss";

export default function Layout({ children }) {
  const mobileNavOpen = useSelector((state) => state.mobileNavOpen);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(actions.addToHistory(pathname));
  }, [pathname, dispatch]);

  const nav = (
    <NavBar
      links={PATHS}
      mobileOpen={mobileNavOpen}
      clicked={() => dispatch(actions.closeMobileNav())}
    ></NavBar>
  );

  return (
    <>
      {mobileNavOpen && (
        <Backdrop clicked={() => dispatch(actions.closeMobileNav())} />
      )}
      <Header
        titleBold="demo"
        titleLight="site"
        link="./"
        topItems={headerTopItems}
      >
        {nav}
        <Hamburger
          clicked={() => dispatch(actions.toggleMobileNav())}
        ></Hamburger>
      </Header>
      <main className={classes.Content}>{children}</main>
      <Footer
        links={PATHS}
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga error eos
        quae accusamus ipsam dicta eveniet vero consequatur libero perspiciatis?"
        nav={nav}
      ></Footer>
    </>
  );
}
