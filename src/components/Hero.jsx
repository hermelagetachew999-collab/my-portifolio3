import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section"
    >
      {/* LEFT SIDE — PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-left"
      >
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* RIGHT SIDE — TEXTS & ICONS */}
      <div
        className="hero-right"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Hello, I’m <span style={{ color: "rgba(243, 236, 240, 0.8)" }}>Hermela</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          <ReactTyped
            strings={[
              "Web Developer(React)",
              "Clean UI",
              "Fast & Responsive Websites",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hero-description"
        >
          I am a web developer with a focus on modern, responsive frontend development using React. I have extensive experience in creating complete web applications, encompassing everything from user interface design to backend integration.
        </motion.p>

        {/* 🌸 SOCIAL ICONS BELOW TEXT */}
        <div
          className="hero-icons"
        >
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/eleny-g-334838391?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0A66C2",
              fontSize: "1.6rem",
              transition: "transform 0.25s, text-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.textShadow = "0 0 8px #fb92e4ff";
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
              color: "#ffffffff",
              fontSize: "1.6rem",
              transition: "transform 0.25s, text-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.textShadow = "0 0 8px #fb92e4ff";
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
            href="hermelagetachew999@gmail.com"
            style={{
              color: "#ffffffff",
              fontSize: "1.6rem",
              transition: "transform 0.25s, text-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.textShadow = "0 0 8px #fb92e4ff";
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
              color: "#0088cc",
              fontSize: "1.6rem",
              transition: "transform 0.25s, text-shadow 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.textShadow = "0 0 8px #fb92e4ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.textShadow = "none";
            }}
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </section>
  );
}
