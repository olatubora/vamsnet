import React, { Fragment } from "react";
import NavbarMenu from "./NavbarMenu";

const MainLayout = ({ children, active }) => {
  return (
    <Fragment>
      <NavbarMenu active={active} />
      {children}
    </Fragment>
  );
};

export default MainLayout;
