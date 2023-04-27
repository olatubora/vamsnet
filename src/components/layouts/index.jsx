import React, { Fragment } from "react";
import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";

const MainLayout = ({ children, active }) => {
  return (
    <Fragment>
      <NavbarMenu active={active} />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
