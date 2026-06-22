import React from 'react';

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(5,5,15,0.9)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 20px" }}>
      <div style={{ color: "transparent", backgroundImage: "linear-gradient(to right, #FFFFFF, #F5F5F5)", WebkitBackgroundClip: "text", fontSize: "24px", fontWeight: "bold" }}>
        Form & Function
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        {["Home", "Shop", "About", "Contact"].map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            style={{
              color: hoveredLink === index ? "#FFFFFF" : "#F5F5F5",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "500",
              transition: "color 0.3s ease"
            }}
          >
            {link}
          </a>
        ))}
      </div>
      <button style={{ background: "linear-gradient(to right, #FFFFFF, #F5F5F5)", color: "#333333", padding: "10px 20px", border: "none", borderRadius: "5px", fontWeight: "bold", boxShadow: "0 0 10px rgba(255,255,255,0.5)", cursor: "pointer" }}>
        Shop Now
      </button>
    </div>
  );
}