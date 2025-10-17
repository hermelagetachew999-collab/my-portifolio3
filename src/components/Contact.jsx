import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

export default function Contact() {
  const iconStyle = {
    fontSize: "2.5rem",
    transition: "transform 0.3s", // smooth hover effect
    cursor: "pointer",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "2rem",
    transition: "transform 0.3s",
    display: "inline-block", // allows scaling properly
    cursor: "pointer",
  };

  const [hoverHeading, setHoverHeading] = useState(false);

  return (
    <section
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "transparent",
        color: "#000",
      }}
    >
      {/* Contact Me heading */}
      <h2
        style={{
          ...headingStyle,
          transform: hoverHeading ? "scale(1.1)" : "scale(1)", // 10% bigger
        }}
        onMouseEnter={() => setHoverHeading(true)}
        onMouseLeave={() => setHoverHeading(false)}
      >
        Contact Me
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/herru-gech-19490538a"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0A66C2", ...iconStyle }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.3)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/hermelagetachew999-collab"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", ...iconStyle }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.3)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaGithub />
        </a>

        {/* Email */}
        <a
          href="mailto:hermelagetachew999@gmail.com"
          style={{ color: "#EA4335", ...iconStyle }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.3)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <MdEmail />
        </a>

        {/* Telegram */}
        <a
          href="https://t.me/hermiheb"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0088cc", ...iconStyle }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.3)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          <FaTelegram />
        </a>
      </div>
    </section>
  );
}
