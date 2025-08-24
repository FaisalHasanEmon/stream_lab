import React from "react";
import NavBar from "../components/shared/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";

const WelcomeLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-386px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default WelcomeLayout;
