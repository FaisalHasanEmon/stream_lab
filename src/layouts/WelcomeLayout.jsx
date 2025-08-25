import React from "react";
import NavBar from "../components/shared/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import HeroCarousel from "../components/welcomePageComponents/heroCarosusel/heroCarousel";
import AllMovies from "../components/welcomePageComponents/allMovies/AllMovies";

const WelcomeLayout = () => {
  return (
    <div className="bg-blackPrimary font-poppins">
      <NavBar />
      <HeroCarousel />
      <AllMovies />
      {/* <div className="min-h-[calc(100vh-338.5px)]">
        <Outlet></Outlet>
      </div> */}
      <Footer />
    </div>
  );
};

export default WelcomeLayout;
