import React from "react";
// Put related styles here or move shared ones to App.css

function Contact() {
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

      <div className="bod">
        <a
          href="https://www.google.com/maps/dir/15.8400512,74.5088314/atm+pharma/@15.8482038,74.5012034,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bbf66bb59651db9:0x3b7349834a75dd6c!2m2!1d74.5129892!2d15.8566715"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="box1">
            <div className="insta"></div>
          </div>
          <div >
          <p style={{ position: "relative", top: "50px", fontWeight: 600, left: "100px",marginTop: "20px" }}>
            Click and Follow me!
          </p></div>
        </a>

        <div className="box2">
          <div className="phone">
            <p style={{ position: "relative", top: "100px", fontWeight: 600 }}>
              Phone no: 9448111813
            </p>
          </div>
        </div>

        <div className="box3">
          <div className="mail">
            <p style={{ position: "relative", top: "120px", fontWeight: 600, right: "50px" }}>
              gangadharatm@gmail.com
            </p>
          </div>
        </div>

        <div style={{ position: "relative", left: "30px", top: "-220px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.998589124663!2d74.51040890803694!3d15.856671484729013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf66bb59651db9%3A0x3b7349834a75dd6c!2sATM%20Pharma%20%26%20Gen%20distributors!5e0!3m2!1sen!2sin!4v1740825493219!5m2!1sen!2sin"
            width="1000"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ATM Pharma Location"
          ></iframe>
        </div>
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
          <h5>MONDAY - 10:00am to 6:00pm</h5>
          <h5>TUESDAY - 10:00am to 6:00pm</h5>
          <h5>WEDNESDAY - 10:00am to 6:00pm</h5>
          <h5>THURSDAY - 10:00am to 6:00pm</h5>
          <h5>FRIDAY - 10:00am to 6:00pm</h5>
          <h5>SATURDAY - 10:00am to 6:00pm</h5>
          <h5>SUNDAY - CLOSED</h5>
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
    </div>
  );
}

export default Contact;
