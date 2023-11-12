import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
