import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

export default function Skills() {
  const frontendSkills = [
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Vite", icon: <SiVite /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Mongoose", icon: <SiMongoose /> },
  ];

  const databaseSkills = [{ name: "MongoDB", icon: <SiMongodb /> }];

  const versionControlSkills = [
    { name: "Git", icon: <SiGit /> },
    { name: "GitHub", icon: <SiGithub /> },
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    hover: { scale: 1.05, transition: { duration: 0.1 } },
  };

  const sectionStyle = {
    flex: "1 1 160px",
    background: "rgba(0,0,0,0.05)",
    padding: "0.8rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px #ff4d4d",
    color: "#000000",
    minWidth: "180px",
    maxWidth: "220px",
  };

  const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "3rem",
    width: "200%",
    maxWidth: "850px",
  };

  return (
    <section
      id="skills"
      style={{
        padding: "0rem 1rem",
        minHeight: "30vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        fontWeight:"bold",
        background: "#ffffff",
        color: "#000000",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "1.8rem",
          marginBottom: "2rem",
          color: "#000000",
          textShadow: "0 0 8px #ff4d4d",
        }}
      >
        ⚙️ My Skills
      </motion.h2>

      <div style={skillsContainerStyle}>
        <SkillCategory title="🎨 Frontend" color="#000000" skills={frontendSkills} variants={skillVariants} sectionStyle={sectionStyle} />
        <SkillCategory title="⚙️ Backend" color="#000000" skills={backendSkills} variants={skillVariants} sectionStyle={sectionStyle} />
        <SkillCategory title="🗄️ Database" color="#000000" skills={databaseSkills} variants={skillVariants} sectionStyle={sectionStyle} />
        <SkillCategory title="🧭 Version Control" color="#000000" skills={versionControlSkills} variants={skillVariants} sectionStyle={sectionStyle} />
      </div>
    </section>
  );
}

function SkillCategory({ title, color, skills, variants, sectionStyle }) {
  return (
    <motion.div initial="hidden" animate="visible" variants={variants} style={sectionStyle}>
      <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem", color }}>{title}</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.9rem",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={variants}
            whileHover="hover"
            style={{
              background: "rgba(0,0,0,0.05)",
              borderRadius: "20px",
              padding: "0.2rem 0.6rem",
              display: "flex",
              alignItems: "center",
              gap: "0.1rem",
              fontSize: "0.75rem",
              boxShadow: "0 1px 3px #ff4d4d",
              cursor: "pointer",
              height: "15px",
            }}
          >
            {skill.icon && <span style={{ fontSize: "0.9rem" }}>{skill.icon}</span>}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
