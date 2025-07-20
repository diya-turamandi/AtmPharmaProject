import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./style.css";

const Header = () => {
  return (
    <>
      <div id="head">ATM PHARMA & General Distributors</div>
      
      <Navbar />

      <div className="back">
        <div className="back1"></div>
        <div className="back2"></div>
      </div>

      <div className="abtus" style={{ padding: "40px" }}>
        <h3 style={{ textDecoration: "underline", textDecorationColor: "red" }}>
          About us
        </h3>
        <h1 style={{ fontFamily: "Impact", fontSize: "50px", color: "#4c4949" }}>
          Welcome to ATM Pharma
        </h1>
        <br />
        <p>
          ATM PHARMA is a trusted name in the pharmaceutical and medical supply
          industry, known for our dedication to quality and customer
          satisfaction...
        </p>
        <p>
          With roots in the business since 2005. Located in the heart of the
          city...
        </p>
        <p>
          ATM PHARMA is managed by a highly skilled and efficient team,
          ensuring seamless operations...
        </p>
      </div>

      <div className="out">
        <div id="left">
          <h2 style={{ textDecoration: "underline black" }}>Mission</h2>
          Our mission is to deliver high-quality medical and pharmaceutical
          supplies...
        </div>
        <div id="right"></div>
      </div>

      <div id="pic"></div>

      <div id="vision">
        <h2 style={{ textDecoration: "underline black" }}>Vision</h2>
        Our vision is to make ATM Pharma a trusted and recognized name in
        medicines and medical supplies...
      </div>

      <div className="prod">
        <h1 style={{ color: "#054e98" }}>16000</h1>
        <h4>Products</h4>
      </div>

      <div id="companies">
        <h1 style={{ color: "#054e98" }}>4923</h1>
        <h4 style ={{color:"red"}}> Leading Pharma Companies</h4>
      </div>

      <Footer />
    </>
  );
};

export default Header;
