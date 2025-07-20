import React from "react";
import "../Style/style.css";
import med1 from "../assets/img/med1.jpg"; // Adjust the path as necessary
import med2 from "../assets/img/med2.jpg"; // Adjust the path as necessary
import med3 from "../assets/img/med3.jpg"; // Adjust the path as necessary

const Home = () => {
  return (
    <div>
      <div className="heading1">ATM PHARMA</div>
       <div className="heading2">& General Distributors</div>

      <div className="navbar">
        <div className="nava">
          <a href="/">HOME</a>
          <a href="/services">SERVICES</a>
          <a href="/infra">INFRASTRUCTURE</a>
          <a href="/comp">COMPANY LIST</a>
          <a href="/career">CAREER</a>
          <a href="/contact">CONTACT</a>
        </div>
      </div>

      <div className="back">
        <div className="back1">
          <img src={med1} alt="ATM Pharma Logo" />
        </div>
        <div className="back2">
          <img src={med2} alt="ATM Pharma Logo" />
        </div>
      </div>

      <div className="abtus" style={{ padding: "40px" }}>
        <h3 style={{ textDecoration: "underline", textDecorationColor: "red" }}>
          About us
        </h3>
        <h1
          style={{
            fontFamily: "Impact, Haettenschweiler",
            fontSize: "50px",
            color: "#4c4949",
          }}
        >
          Welcome to ATM Pharma
        </h1>
        <p>
          ATM PHARMA is a trusted name in the pharmaceutical and medical supply
          industry, committed to delivering quality healthcare products and
          services. With roots in the business since 2005, we have built a
          strong reputation for reliability, integrity, and excellence. Our
          extensive product portfolio meets the needs of hospitals, clinics, and
          individual customers alike. ATM PHARMA is managed by a highly skilled
          and efficient team, dedicated to ensuring timely delivery, customer
          satisfaction, and continuous innovation. We strive to uphold the
          highest standards of quality and compliance, making healthcare
          accessible and affordable for all pharmaceutical and medical supply
          industry!
        </p>
      </div>

      <div className="out">
        <div id="left">
          <h2 style={{ textDecoration: "underline black" }}>Mission</h2>
          Our mission is to deliver high-quality medical and pharmaceutical
          supplies that meet the evolving needs of healthcare professionals and
          patients. We are committed to maintaining the highest standards of
          safety, efficacy, and affordability in every product we offer. Through
          strong partnerships, continuous innovation, and a customer-centric
          approach, we aim to improve health outcomes and contribute to a
          healthier society. At ATM PHARMA, we believe that access to quality
          healthcare is a right—not a privilege—and we work tirelessly to make
          that a reality every day.
        </div>
        <div id="right">
          <img src={med3} alt="ATM Pharma Mission" />
        </div>
      </div>

      <div id="pic"></div>

      <div id="vision">
        <h2 style={{ textDecoration: "underline black" }}>Vision</h2>
        Our vision is to make ATM PHARMA a trusted and recognized name in the
        pharmaceutical and healthcare industry, known for excellence, integrity,
        and innovation. We aspire to become a leading force in the distribution
        of high-quality medical and pharmaceutical products, serving not only
        our local community but expanding our reach across regions. By
        continuously evolving with advancements in medical science and
        technology, we aim to set new benchmarks in service, reliability, and
        customer satisfaction. Our goal is to build long-lasting relationships
        with healthcare providers, institutions, and individuals by consistently
        delivering value, maintaining ethical practices, and prioritizing health
        above all. We envision a future where ATM PHARMA is synonymous with
        care, trust, and quality—making a meaningful difference in people's
        lives
      </div>

      <div className="prod">
        <h1 style={{ color: "#054e98" }}>6000&nbsp;+</h1>
        <h4 style={{ color: "red" }}>Products</h4>
      </div>
      <div id="companies">
        <h1 style={{ color: "#054e98", height:"40px", width:"40px" }}>100&nbsp;+</h1>
        <h4 style={{color :'red'}}> leading Pharma Companies</h4>
      </div>
      <div className="customer">
        <h1 style={{ color: "#054e98" }}>4000&nbsp;+</h1>
        <h4 style={{ color: "red" }}>Happy Customers!</h4>
      </div>

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
          <p style={{ position: "relative", top: "105px" }}>@atm_pharma</p>
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
    </div>
  );
};

export default Home;
