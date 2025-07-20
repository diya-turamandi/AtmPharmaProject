import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <div id="back"></div>
      <div id="back2">
        <div className="info">
          <h3 style={{ textDecoration: "underline black" }}>INFORMATION</h3>
          <h4>HOME</h4>
          <h4>SERVICES</h4>
          <h4>INFRASTRUCTURE</h4>
          <h4>COMPANY LIST</h4>
          <h4>CAREER</h4>
          <h4>CONTACT</h4>
        </div>

        <div className="off">
          <h3 style={{ textDecoration: "underline black" }}>OFFICE HOURS</h3>
          <h5>MONDAY- 10:00am to 6:00pm</h5>
          <h5>TUESDAY- 10:00am to 6:00pm</h5>
          <h5>WEDNESDAY- 10:00am to 6:00pm</h5>
          <h5>THURSDAY- 10:00am to 6:00pm</h5>
          <h5>FRIDAY- 10:00am to 6:00pm</h5>
          <h5>SATURDAY- 10:00am to 6:00pm</h5>
          <h5>SUNDAY- CLOSED</h5>
        </div>

        <div className="instagram">
          <p style={{ position: "relative", top: "105px" }}>atmpharma@gmail.com</p>
        </div>
        <div className="whatsapp">
          <p style={{ position: "relative", top: "105px" }}>9448111813</p>
        </div>

        <p
          style={{
            color: "white",
            position: "relative",
            top: "-290px",
            left: "350px",
            zIndex: 1999,
          }}
        >
          &copy; 2025 ATM Pharma. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
