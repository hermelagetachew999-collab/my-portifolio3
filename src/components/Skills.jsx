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
    padding: "0.4rem",
    borderRadius: "15px",
    boxShadow: "0 8px 10px #787878ff",
    color: "#000000",
    minWidth: "140px",
    maxWidth: "280px",
    margin: "5px",
  };

  const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
    width: "150%",
    maxWidth: "1200px",
  };

  return (
    <section
      id="skills"
      style={{
        padding: "0rem 1rem",
        minHeight: "20vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
        fontWeight:"bold",
        background: "#ffffff",
        color: "#000000",
        minWidth: "20vh",
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
          
        }}
      >
         My Skills
      </motion.h2>

      <div style={skillsContainerStyle}>
        <SkillCategory title="Frontend" color="#0f2754ff" skills={frontendSkills} variants={skillVariants} sectionStyle={sectionStyle} />
        <SkillCategory title="Backend" color="#0f2754ff" skills={backendSkills} variants={skillVariants} sectionStyle={sectionStyle} />
        <SkillCategory title="Database" color="#0f2754ff" skills={databaseSkills} variants={skillVariants} sectionStyle={sectionStyle} />
        <SkillCategory title="Version Control" color="#0f2754ff" skills={versionControlSkills} variants={skillVariants} sectionStyle={sectionStyle} />
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
          gap: "0.4rem",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={variants}
            whileHover="hover"
            style={{
            display: "flex",
    alignItems: "center",
    gap: "1.2rem",
    padding: "0.3rem 0.6rem",
    borderRadius: "25px",
    backgroundColor: "transparent",
    color: "#000",
    fontSize: "0.95rem",
    fontWeight: "450",
            }}
          >
            {skill.icon && <span style={{ fontSize: "1.6rem" }}>{skill.icon}</span>}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
