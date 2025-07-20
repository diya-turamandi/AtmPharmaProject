import React from "react";// optional if you add specific styles

function CompanyList() {
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

      <div className="company-list-page" style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Bubblegum Sans, cursive" }}>Company List</h1>
        <p style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
          This page will display all the companies associated with ATM Pharma.
        </p>
        {/* Add table, grid or cards here in the future */}
      </div>
    </div>
  );
}

export default CompanyList;
