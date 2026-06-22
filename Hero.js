import React from 'react';

export default function Hero() {
  const [primaryHover, setPrimaryHover] = React.useState(false);
  const [secondaryHover, setSecondaryHover] = React.useState(false);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", backgroundColor: "#333333", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
      <img src="https://images.unsplash.com/photo-1730106959242-faff941a0040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwxfHxHZW5lcmF0ZSUyMGElMjBmdXJuaXR1cmUlMjB3ZWJzaXRlJTIwJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1pbmltYWx8ZW58MHx8fHwxNzgxMTA0MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Hero" style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }} />
      <div style={{ position: "absolute", width: "100%", height: "100%", backgroundColor: "rgba(51, 51, 51, 0.5)", zIndex: 2 }}></div>
      <div style={{ position: "absolute", width: "100%", height: "100%", background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)", zIndex: 3 }}></div>
      <div style={{ position: "relative", zIndex: 4, textAlign: "center", color: "#FFFFFF", padding: "0 20px" }}>
        <h1 style={{ fontSize: "clamp(52px, 8vw, 100px)", fontWeight: 800, letterSpacing: "-0.05em", lineHeight: 1.2 }}>
          Timeless <span style={{ background: "linear-gradient(90deg, #FFFFFF, #F5F5F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Furniture</span>, Minimal <span style={{ background: "linear-gradient(90deg, #FFFFFF, #F5F5F5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Design</span>.
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.55, marginTop: "20px" }}>
          Discover expertly crafted furniture that blends form and function, designed to elevate your space with simplicity and elegance.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "40px" }}>
          <button
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#FFFFFF",
              backgroundColor: "#808080",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transform: primaryHover ? "translateY(-2px)" : "translateY(0)",
              boxShadow: primaryHover ? "0 10px 20px rgba(128, 128, 128, 0.3)" : "none",
              transition: "transform 0.2s, box-shadow 0.2s"
            }}
          >
            Shop Now
          </button>
          <button
            onMouseEnter={() => setSecondaryHover(true)}
            onMouseLeave={() => setSecondaryHover(false)}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#FFFFFF",
              background: "transparent",
              border: "2px solid #FFFFFF",
              borderRadius: "5px",
              cursor: "pointer",
              transform: secondaryHover ? "translateY(-2px)" : "translateY(0)",
              transition: "transform 0.2s"
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}