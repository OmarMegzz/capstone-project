import React from "react";
import NavBar from "../navBar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      {/*layOut for routing */}
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
