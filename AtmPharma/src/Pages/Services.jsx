import React from "react";
 // Optional: if you want to isolate styles

function Services() {
  return (
    <div>
      <div id="head">ATM PHARMA</div>

      <div className="navbar">
        <div className="nava">
          <a href="/">HOME</a>
          <a href="/services">SERVICES</a>
          <a href="/infra" style={{ color: "rgb(255, 231, 231)" }}>
            INFRASTRUCTURE
          </a>
          <a href="/comp">COMPANY LIST</a>
          <a href="/career">CAREER</a>
          <a href="/contact">CONTACT</a>
        </div>
      </div>

      <section id="sales-delivery" style={{ padding: "40px" }}>
        <h2 style={{ textDecoration: "underline", textDecorationColor: "blue", marginBottom:"20px", }}>Our Services</h2>
        <p>
          ATM Pharma specializes in pharmaceutical distribution, ensuring a seamless supply of high-quality
          medicines and healthcare products to retail pharmacies, hospitals, nursing homes, and institutions. Our
          operations are backed by a dedicated team that efficiently manages hospital and institutional sales,
          ensuring timely deliveries and top-notch service.
        </p>
        <h4 style={{marginBottom:"10px", marginTop:"10px"}}>Efficient Sales & Delivery Network</h4>
        <ul>
          <li>
            A <strong>dedicated sales force</strong> ensures comprehensive market coverage and regular engagement
            with retailers.
          </li>
          <li>
            Our sales representatives stay <strong>updated on new products, offers, and availability</strong>,
            allowing them to provide accurate information to customers.
          </li>
          <li>
            We have a <strong>fleet of 20+ delivery personnel</strong> with equipped vehicles for timely and
            efficient delivery across all locations.
          </li>
          <li>
            Our sales team is <strong>connected via mobile networks</strong>, ensuring instant communication with
            retailers and seamless operations.
          </li>
          <li>
            A <strong>curated product list</strong> is shared with retailers periodically, keeping them informed
            about our offerings.
          </li>
        </ul>
      </section>

      <div className="gg">
        <div id="back"></div>
        <div id="back2">
          <div className="info">
            <h3 style={{ textDecoration: "underline", textDecorationColor: "red" }}>INFORMATION</h3>
            <h4>HOME</h4>
            <h4>SERVICES</h4>
            <h4>INFRASTRUCTURE</h4>
            <h4>COMPANY LIST</h4>
            <h4>CAREER</h4>
            <h4>CONTACT</h4>
          </div>
          <div className="off">
            <h3 style={{ textDecoration: "underline", textDecorationColor: "red" }}>OFFICE HOURS</h3>
            <h5>MONDAY- 10:00am to 6:00pm</h5>
            <h5>TUESDAY- 10:00am to 6:00pm</h5>
            <h5>WEDNESDAY- 10:00am to 6:00pm</h5>
            <h5>THURSDAY- 10:00am to 6:00pm</h5>
            <h5>FRIDAY- 10:00am to 6:00pm</h5>
            <h5>SATDAY- 10:00am to 6:00pm</h5>
            <h5>SUNDAY- CLOSED</h5>
          </div>
          <div className="instagram">
            <p style={{ position: "relative", top: "105px" }}>@atm_pharma</p>
          </div>
          <div className="whatsapp">
            <p style={{ position: "relative", top: "105px" }}>9448111813</p>
          </div>
          <p style={{ color: "red", position: "relative", top: "20px", left: "350px", zIndex: 1999 }}>
            &copy; 2025 ATM Pharma. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
