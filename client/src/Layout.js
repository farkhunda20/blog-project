import React from "react";
import Header from "./Header";
import { BrowserRoutert } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
