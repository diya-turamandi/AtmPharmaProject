import React from "react";
// If you want to style it separately

function Career() {
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

      <div className="career-content" style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Bubblegum Sans, cursive" }}>Career at ATM Pharma</h1>
        <p style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
          We're always looking for passionate and dedicated professionals to join our team.
        </p>
        {/* You can later add job listings, an application form, or contact email here */}
      </div>
    </div>
  );
}

export default Career;
