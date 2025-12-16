// src/components/Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const iconBaseStyle = {
    fontSize: "2.5rem",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    boxShadow: "0 0 15px #ff4d4d",
    borderRadius: "50%",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "2rem",
    transition: "transform 0.3s, color 0.3s",
    display: "inline-block",
    cursor: "pointer",
    color: "#000",
    textShadow: "0 0 10px #ff4d4d",
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
        boxShadow: "0 0 30px #ff4d4d inset",
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

      {/* Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/eleny-g-334838391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconBaseStyle,
            color: "#0A66C2",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.3)";
            e.currentTarget.style.textShadow = "0 0 25px #ff4d4d";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/hermelagetachew999-collab"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconBaseStyle,
            color: "#000",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.3)";
            e.currentTarget.style.textShadow = "0 0 25px #ff4d4d";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          <FaGithub />
        </a>

        {/* Email */}
        <a
          href="mailto:hermelagetachew999@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconBaseStyle,
            color: "#000",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.3)";
            e.currentTarget.style.textShadow = "0 0 25px #ff4d4d";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          <MdEmail />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/hermiheb"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconBaseStyle,
            color: "#0088cc",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.3)";
            e.currentTarget.style.textShadow = "0 0 25px #ff4d4d";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.textShadow = "none";
          }}
        >
          <FaTelegram />
        </a>
      </div>
    </section>
  );
}
