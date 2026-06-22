import React from 'react';

export default function Features() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const features = [
    {
      id: 1,
      icon: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwyfHxHZW5lcmF0ZSUyMGElMjBmdXJuaXR1cmUlMjB3ZWJzaXRlJTIwJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1pbmltYWx8ZW58MHx8fHwxNzgxMTA0MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Minimalist Design',
      description: 'Sleek and simple furniture that complements any space. Perfect for modern living.',
    },
    {
      id: 2,
      icon: 'https://images.unsplash.com/photo-1605543667606-52b0f1ee1b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHwzfHxHZW5lcmF0ZSUyMGElMjBmdXJuaXR1cmUlMjB3ZWJzaXRlJTIwJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1pbmltYWx8ZW58MHx8fHwxNzgxMTA0MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sustainable Materials',
      description: 'Crafted with eco-friendly materials to ensure a greener planet for future generations.',
    },
    {
      id: 3,
      icon: 'https://images.unsplash.com/photo-1665093313889-f936ed2f7cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw0fHxHZW5lcmF0ZSUyMGElMjBmdXJuaXR1cmUlMjB3ZWJzaXRlJTIwJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1pbmltYWx8ZW58MHx8fHwxNzgxMTA0MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Customizable Options',
      description: 'Tailor your furniture to your style and needs with our customizable designs.',
    },
    {
      id: 4,
      icon: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5NjgwNDF8MHwxfHNlYXJjaHw1fHxHZW5lcmF0ZSUyMGElMjBmdXJuaXR1cmUlMjB3ZWJzaXRlJTIwJTBEJTBBJTIwJTIwJTIwJTIwJTIwJTIwVXNlciUyMGRpcmVjdGlvbiUzQSUyMG1pbmltYWx8ZW58MHx8fHwxNzgxMTA0MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Timeless Durability',
      description: 'Built to last, our furniture combines quality craftsmanship with timeless appeal.',
    },
  ];

  return (
    <section style={{ padding: "100px 80px", backgroundColor: "#333333" }}>
      <div style={{ marginBottom: "40px" }}>
        <p style={{ color: "#FFFFFF", textTransform: "uppercase", fontSize: "14px", marginBottom: "10px" }}>Our Features</p>
        <h2 style={{ color: "#FFFFFF", fontSize: "clamp(32px, 5vw, 56px)", lineHeight: "1.2" }}>What We Offer</h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        {features.map((feature) => (
          <div
            key={feature.id}
            onMouseEnter={() => setHoveredCard(feature.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${hoveredCard === feature.id ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "20px",
              padding: "20px",
              textAlign: "center",
              transform: hoveredCard === feature.id ? "translateY(-4px)" : "translateY(0)",
              transition: "transform 0.2s ease, border 0.2s ease",
            }}
          >
            <img src={feature.icon} alt={feature.title} style={{ width: "80px", height: "80px", marginBottom: "20px", borderRadius: "50%" }} />
            <h3 style={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{feature.title}</h3>
            <p style={{ color: "#FFFFFF", fontSize: "14px", lineHeight: "1.6" }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}