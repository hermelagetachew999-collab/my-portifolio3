import React from "react";
import { motion } from "framer-motion";
import knowledgeHubImg from "../assets/knowledge-hub.jpg";
import quickcartImg from "../assets/quickcart.jpg";
import mystreamImg from "../assets/mystream.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Smart Knowledge Hub",
      description: "An interactive platform for sharing and accessing educational resources and knowledge.",
      link: "https://smart-knowledge-hub-psi.vercel.app/",
      image: knowledgeHubImg,
    },
    {
      title: "QuickCart",
      description: "A modern e-commerce application featuring product browsing, cart management, and checkout.",
      link: "https://quickcart-frontend-mu.vercel.app/",
      image: quickcartImg,
    },
    {
      title: "MyStream",
      description: "A seamless video streaming platform for watching and discovering content.",
      link: "https://mystream-rho.vercel.app/",
      image: mystreamImg,
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
          color: "#0b1f3b",
         
        }}
      >
         My Projects
      </motion.h2>

      <div
        className="projects-grid"
        style={{ gap: "2rem" }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            initial="hidden"
            animate="visible"
              whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 10px #787878ff",
            }}
            whileTap={{ scale: 0.97 }}
            style={{
              backgroundColor: "rgba(0,0,0,0.04)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 10px #787878ff",
              transition: "all 0.25s ease",
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "200px",
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
              <p style={{ fontSize: "1rem", marginBottom: "0.8rem", lineHeight: "1.4" }}>
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.4rem 0.8rem",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  borderRadius: "5px",
                  textDecoration: "none",
                  fontWeight: "500",
                  transition: "background 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0b1f3b")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
              >
                View
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
