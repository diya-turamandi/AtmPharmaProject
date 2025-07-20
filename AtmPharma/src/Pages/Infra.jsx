import React from "react";
// Extract your infra-specific CSS or use global App.css if centralized

function Infra() {
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

      <div className="sit">
        <h2 style={{ position: "relative", left: "400px", fontFamily: "Geneva, Tahoma, sans-serif", width: "600px", textAlign: "center", marginBottom: "10px", color: "rgb(74, 69, 78)" }}>
          ATM Pharma: A Legacy Since 2005
        </h2>
        <p style={{ position: "relative", left: "400px", fontFamily: "Geneva, Tahoma, sans-serif", width: "600px", textAlign: "center", color: "rgb(74, 69, 78)" }}>
          Founded in 2005, ATM Pharma started with a vision to provide high-quality pharmaceutical products and healthcare solutions. Over the years, it has grown into a trusted name in the industry, known for its commitment to innovation, quality, and customer satisfaction. From its early days, ATM Pharma focused on delivering reliable medicines and healthcare products while ensuring compliance with industry standards. Through continuous research, strategic partnerships, and a dedication to excellence, it has expanded its reach and built a strong reputation in the pharmaceutical sector.
        </p>
      </div>

      <div className="work">
        <p style={{ fontFamily: "Geneva, Tahoma, sans-serif", width: "400px", textAlign: "center", color: "rgb(74, 69, 78)", position: "relative", right: "530px", top: "60px" }}>
          At ATM Pharma, the dedication of our workers is the foundation of our success. Since 2005, our team has been committed to maintaining the highest standards in pharmaceutical development, production, and distribution. Their relentless hard work, precision, and attention to quality ensure that every product meets industry regulations and customer expectations.
        </p>
      </div>

      <div className="stock"></div>

      <div className="container">
        <h1>
          Stock Checking at <span>ATM Pharma</span>
        </h1>
        <p>
          Efficient stock management is a crucial aspect of ATM Pharma’s operations. We follow a rigorous stock-checking system to ensure the availability of essential medicines and pharmaceutical products.
        </p>

        <div className="cards">
          <div className="card">
            <h2>Regular Audits</h2>
            <p>We conduct routine stock audits to monitor inventory levels and avoid shortages or overstocking.</p>
          </div>

          <div className="card">
            <h2>Digital Tracking</h2>
            <p>Our stock management system utilizes advanced software to track incoming and outgoing products in real time.</p>
          </div>

          <div className="card">
            <h2>Quality Assurance</h2>
            <p>Expiry date checks, batch tracking, and compliance with regulatory standards are integral parts of our stock-checking process.</p>
          </div>

          <div className="card">
            <h2>Supplier Coordination</h2>
            <p>We maintain close relationships with our suppliers to ensure timely restocking of critical pharmaceutical products.</p>
          </div>
        </div>
      </div>

      <div className="build"></div>

      <header>
        <h1>ATM Pharma Building & Property</h1>
        <p><strong>Location:</strong> Basavan Galli, beside Laxmi Temple, Baswan Galli, Raviwar Peth, Belagavi, Karnataka 590001</p>
      </header>

      <section className="content">
        <h2>Building & Infrastructure</h2>
        <p><strong>Prime Location:</strong> Situated in the commercial hub of Belagavi, ensuring easy accessibility for suppliers, distributors, and customers.</p>
        <p><strong>State-of-the-Art Facilities:</strong> Equipped with modern pharmaceutical infrastructure, including storage areas with temperature-controlled environments to maintain product integrity.</p>
        <p><strong>Efficient Layout:</strong> Designed for streamlined workflow, from stock management to quality control and distribution.</p>
        <p><strong>Safety & Compliance:</strong> Built in accordance with industry regulations to ensure the safety of employees, products, and customers.</p>
      </section>

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
          <p style={{ position: "relative", top: "105px" }}>@atm_pharma</p>
        </div>
        <div className="whatsapp">
          <p style={{ position: "relative", top: "105px" }}>9448111813</p>
        </div>

        <p style={{ color: "white", position: "relative", top: "-290px", left: "350px", zIndex: 1999 }}>
          &copy; 2025 ATM Pharma. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Infra;
