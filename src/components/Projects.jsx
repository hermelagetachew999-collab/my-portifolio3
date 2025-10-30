import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal site built to display my projects and skills interactively.",
      link: "#",
      image: "https://via.placeholder.com/300x150?text=Portfolio",
    },
    {
      title: "E-Commerce Platform",
      description: "An online shopping platform with a secure checkout system.",
      link: "#",
      image: "https://via.placeholder.com/300x150?text=E-Commerce",
    },
    {
      title: "Task Manager",
      description: "A productivity app for creating and organizing daily tasks.",
      link: "#",
      image: "https://via.placeholder.com/300x150?text=Task+Manager",
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog app with user authentication and content editing.",
      link: "#",
      image: "https://via.placeholder.com/300x150?text=Blog",
    },
  ];

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="projects"
      style={{
        padding: "6rem 1rem",
        textAlign: "center",
        background: "#ffffff",
        minHeight: "100vh",
        color: "#000000",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.3rem",
          marginBottom: "3rem",
          color: "#000000",
          textShadow: "0 0 10px #fb92e4ff",
        }}
      >
        🛠️ My Projects
      </motion.h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 16px #fb92e4ff",
            }}
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 12px #fb92e4ff",
              transition: "all 0.3s ease",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "130px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "0.8rem" }}>
              <h3
                style={{
                  fontSize: "1.1rem",
                  color: "#000000",
                  marginBottom: "0.4rem",
                }}
              >
                {project.title}
              </h3>
              <p style={{ fontSize: "0.85rem", marginBottom: "0.8rem" }}>
                {project.description}
              </p>
              <a
                href={project.link}
                style={{
                  padding: "0.4rem 0.8rem",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#fb92e4ff")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
