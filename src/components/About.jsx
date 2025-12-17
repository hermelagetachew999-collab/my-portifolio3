import { useState, useEffect } from "react";

export default function About() {
  const [showAltBio, setShowAltBio] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setShowAltBio((prev) => !prev);
        setFade(true);
      }, 1000);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="about-section"
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top left, rgba(0,0,0,0.05), transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        className="about-inner"
      >
        <h2
          style={{
            fontSize: "2.4rem",
            marginBottom: "1rem",
            marginTop: "0.3rem",
            color: "#0b1f3b", // blue-black title
             // soft blue-black glow
          }}
        >
          About Me
        </h2>

        <div
          className="about-cards"
        >
          {[
            {
              title: "🎓 Education",
              text: "As a third-year Information Systems student, I combine academic knowledge with hands-on experience in web development and creative design to craft impactful digital experiences.",
            },
            {
              title: "💻 Skills & Certificates",
              text: "I enjoy blending technology and art to create interactive web experiences. My certifications reflect a deep commitment to growth and mastery in frontend and backend development, including Git and GitHub.",
            },
            {
              title: "🎨 Creativity",
              text: "I’m also a certified artist — I draw and paint. My artistic side inspires me to craft visually appealing, responsive, and meaningful digital designs.",
            },
            {
              title: "🏅 Certifications",
              text: "I hold certificates in Responsive Web Design, JavaScript, Frontend Libraries, Data Visualization, Backend & API Development, and version control with Git and GitHub. I have strong skills in React, HTML, CSS, and modern web design.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="about-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 5px 30px #0b1f3b";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px #0b1f3b";
              }}
            >
              <h3 style={{ fontSize: "1.3rem", marginBottom: "0rem", color: "#24037cff" }}>
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: "1rem",
                  opacity: index === 1 ? (fade ? 1 : 0) : 1,
                  transition: "opacity 1s ease-in-out",
                }}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
