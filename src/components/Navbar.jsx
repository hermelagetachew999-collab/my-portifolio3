// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
 { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        padding: "0.8rem 0",
        zIndex: 1000,
        boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <motion.img
            src="/profile.jpg"
            alt="Profile"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #000000",
              cursor: "pointer",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#000000ff",
              letterSpacing: "1px",
              cursor: "pointer",
              fontStyle : "italic",
            }}
          >
            Hermela Getachew
          </motion.h1>
        </div>

        {/* Desktop Menu */}
        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navItems.map((item, index) => (
            <motion.li key={index} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={item.href}
                style={{
                  color: "#000000ff",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#66ccff")}
                onMouseLeave={(e) => (e.target.style.color = "#000000ff")}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
          }}
          className="menu-toggle"
        >
          <span style={{ width: "25px", height: "3px", background: "#fff", margin: "4px 0" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#fff", margin: "4px 0" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#fff", margin: "4px 0" }}></span>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "10px",
            padding: "1rem 1.5rem",
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: "#080505ff",
                  textDecoration: "none",
                  fontSize: "1rem",
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}

      <style>
        {`
          html {
            scroll-behavior: smooth; /* ✅ smooth scroll added */
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .menu-toggle {
              display: flex;
            }
          }
        `}
      </style>
    </nav>
  );
}

