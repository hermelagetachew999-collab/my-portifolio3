import { useState, useEffect } from "react";

export default function About() {
  const texts = [
    "I’m a 3rd-year Information Systems student passionate about web development and creative design.",
    "I enjoy blending technology and art to create interactive web experiences. My certifications reflect a deep commitment to growth and mastery in frontend development.",
    "I hold multiple certificates in Responsive Web Design (HTML & CSS), JavaScript, Frontend Libraries, and Data Visualization. I have strong skills in React, HTML, CSS, and modern web design.",
    "I’m also a certified artist — I draw and paint. My artistic side inspires me to craft visually appealing, responsive, and meaningful digital designs."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out

      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % texts.length); // next text
        setFade(true); // fade in
      }, 5000); // fade duration
    }, 20000); // display each text for 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        padding: "4rem 2rem",
        textAlign: "center",
        background: "linear-gradient(to bottom right, #000, #fff)",
        cursor: "default",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "1.5rem",
          textShadow: "2px 2px 8px rgba(47, 32, 32, 0.7)",
          color: "#3b2020ff",
        }}
      >
        About Me
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          maxWidth: "900px",
          margin: "0 auto",
          textShadow: "1px 1px 6px rgba(44, 27, 27, 0.6)",
        }}
      >
        <div style={{ gridColumn: "1 / -1" }}>
          <h3>💻 About & Skills</h3>
          <p
            style={{
              transition: "opacity 1.2s ease-in-out, color 1.5s ease-in-out",
              opacity: fade ? 1 : 0,
              color: "#3b2525ff",
            }}
          >
            {texts[currentIndex]}
          </p>
        </div>
      </div>
    </section>
  );
}
