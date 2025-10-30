// src/components/Contact.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const iconBaseStyle = {
    fontSize: "2.5rem",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    boxShadow: "0 0 15px #fb92e4ff",
    borderRadius: "50%",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "2rem",
    transition: "transform 0.3s, color 0.3s",
    display: "inline-block",
    cursor: "pointer",
    color: "#000",
    textShadow: "0 0 10px #fb92e4ff",
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
        boxShadow: "0 0 30px #fb92e4ff inset",
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
          href="https://www.linkedin.com/in/herru-gech-19490538a"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...iconBaseStyle,
            color: "#0A66C2",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.3)";
            e.currentTarget.style.textShadow = "0 0 25px #fb92e4ff";
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
            e.currentTarget.style.textShadow = "0 0 25px #fb92e4ff";
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
          style={{
            ...iconBaseStyle,
            color: "#000",
            boxShadow: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.3)";
            e.currentTarget.style.textShadow = "0 0 25px #fb92e4ff";
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
            e.currentTarget.style.textShadow = "0 0 25px #fb92e4ff";
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
