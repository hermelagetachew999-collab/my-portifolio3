// src/components/Contact.jsx
import React, { useState } from "react";
import { FaTelegram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const iconBaseStyle = {
    fontSize: "1.6rem",
    transition: "transform 0.15s, box-shadow 0.15s",
    cursor: "default",
    borderRadius: "6px",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "2rem",
    transition: "transform 0.3s, color 0.3s",
    display: "inline-block",
    cursor: "pointer",
    color: "#0b1f3b",
  };

  const [hoverHeading, setHoverHeading] = useState(false);

  return (
    <section
      id="contact" // ✅ Added for navbar link target
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "#fff",
        color: "#000",
        boxShadow: "0 0 30px #0b1f3b inset",
      }}
    >
      {/* Contact Me heading */}
      <h2
        style={{
          ...headingStyle,
          transform: hoverHeading ? "scale(1.1)" : "scale(1)",
        }}
        onMouseEnter={() => setHoverHeading(true)}
        onMouseLeave={() => setHoverHeading(false)}
      >
        Contact Me
      </h2>

      {/* Contact rows: Email, Telegram, Phone */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <MdEmail style={{ ...iconBaseStyle, color: "#0b1f3b" }} />
          <a href="mailto:hermelagetachew999@gmail.com" style={{ color: "#000", textDecoration: "none", fontSize: "1rem" }}>
            hermelagetachew999@gmail.com
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <FaTelegram style={{ ...iconBaseStyle, color: "#0088cc" }} />
          <a href="https://t.me/hermiheb" target="_blank" rel="noopener noreferrer" style={{ color: "#000", textDecoration: "none", fontSize: "1rem" }}>
            @hermiheb
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <FaPhone style={{ ...iconBaseStyle, color: "#0b1f3b" }} />
          <a href="tel:+251909542151" style={{ color: "#000", textDecoration: "none", fontSize: "1rem" }}>
            +251909542151
          </a>
        </div>
      </div>
    </section>
  );
}
