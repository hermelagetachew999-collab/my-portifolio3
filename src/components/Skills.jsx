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
  SiMysql,
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
  // add MySQL skill
  databaseSkills.push({ name: "MySQL", icon: <SiMysql /> });

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
    flex: "1 1 140px",
    background: "rgba(0,0,0,0.04)",
    padding: "0.5rem",
    borderRadius: "8px",
    boxShadow: "0 3px 8px #0b1f3b",
    color: "#000000",
    minWidth: "140px",
    maxWidth: "180px",
  };

  const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
    width: "100%",
    maxWidth: "900px",
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
          textShadow: "0 0 8px #0b1f3b",
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
          gap: "0.6rem",
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
              padding: "0.15rem 0.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.2rem",
              fontSize: "0.7rem",
              boxShadow: "0 1px 2px #0b1f3b",
              cursor: "pointer",
              height: "20px",
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
