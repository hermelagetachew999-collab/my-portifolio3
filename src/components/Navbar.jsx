// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          padding: "0 1.5rem",
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
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #000000",
              cursor: "pointer",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1 className="brand-name"
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

        {/* Mobile Menu Icon (Burger) - Right Side */}
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            cursor: "pointer",
            gap: "4px",
            padding: "8px",
          }}
          className="menu-toggle"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span 
            style={{ 
              width: "25px", 
              height: "3px", 
              background: "#000", 
              borderRadius: "2px",
              transition: "all 0.3s ease"
            }}
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          ></motion.span>
          <motion.span 
            style={{ 
              width: "25px", 
              height: "3px", 
              background: "#000", 
              borderRadius: "2px",
              transition: "all 0.3s ease"
            }}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          ></motion.span>
          <motion.span 
            style={{ 
              width: "25px", 
              height: "3px", 
              background: "#000", 
              borderRadius: "2px",
              transition: "all 0.3s ease"
            }}
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          ></motion.span>
        </motion.div>
      </div>

      {/* Mobile Dropdown with Fade-in Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "absolute",
             top: "100%",
marginTop: "0.5rem",
              right: "1rem",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: "12px",
              padding: "1rem 1.5rem",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              minWidth: "200px",
            }}
          >
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: "#080505ff",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    display: "block",
                    padding: "0.5rem 0",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#66ccff")}
                  onMouseLeave={(e) => (e.target.style.color = "#080505ff")}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          @media (max-width: 768px) {
            .nav-links {
              display: none !important;
            }
            .menu-toggle {
              display: flex !important;
            }
            .brand-name {
              font-size: 0.9rem !important;
            }
          }

          @media (max-width: 480px) {
            .brand-name {
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

