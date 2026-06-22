import React from 'react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#333333", color: "#FFFFFF", padding: "80px 80px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
        <div>
          <h2 style={{ margin: 0, color: "#FFFFFF" }}>Form & Function</h2>
          <p style={{ margin: 0, color: "#F5F5F5" }}>Timeless furniture, minimal design.</p>
        </div>
        <div style={{ display: "flex", gap: "40px" }}>
          <div>
            <h4 style={{ margin: "0 0 16px 0", color: "#FFFFFF" }}>Shop</h4>
            <a href="/living-room" style={{ display: "block", color: "#F5F5F5", textDecoration: "none", marginBottom: "8px" }}>Living Room</a>
            <a href="/bedroom" style={{ display: "block", color: "#F5F5F5", textDecoration: "none", marginBottom: "8px" }}>Bedroom</a>
            <a href="/dining" style={{ display: "block", color: "#F5F5F5", textDecoration: "none" }}>Dining</a>
          </div>
          <div>
            <h4 style={{ margin: "0 0 16px 0", color: "#FFFFFF" }}>About</h4>
            <a href="/our-story" style={{ display: "block", color: "#F5F5F5", textDecoration: "none", marginBottom: "8px" }}>Our Story</a>
            <a href="/sustainability" style={{ display: "block", color: "#F5F5F5", textDecoration: "none", marginBottom: "8px" }}>Sustainability</a>
            <a href="/careers" style={{ display: "block", color: "#F5F5F5", textDecoration: "none" }}>Careers</a>
          </div>
          <div>
            <h4 style={{ margin: "0 0 16px 0", color: "#FFFFFF" }}>Support</h4>
            <a href="/contact" style={{ display: "block", color: "#F5F5F5", textDecoration: "none", marginBottom: "8px" }}>Contact Us</a>
            <a href="/faqs" style={{ display: "block", color: "#F5F5F5", textDecoration: "none", marginBottom: "8px" }}>FAQs</a>
            <a href="/returns" style={{ display: "block", color: "#F5F5F5", textDecoration: "none" }}>Returns</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ margin: 0, color: "#F5F5F5" }}>© {new Date().getFullYear()} Form & Function</p>
        <p style={{ margin: 0, color: "#F5F5F5" }}>Made with AgentIQ</p>
      </div>
    </footer>
  );
}