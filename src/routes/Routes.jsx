import React from "react";
import { Routes as RoutesWrapper, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Works from "../pages/Works/Works";
import Contact from "../pages/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

const Routes = () => {
  return (
    <>
      <Header />
      <RoutesWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </RoutesWrapper>
      <Footer />
    </>
  );
};

export default Routes;
