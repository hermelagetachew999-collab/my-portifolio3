export default function Skills() {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Frontend Libraries",
    "Data Visualization"
  ];

  const radiusX = 200; // horizontal radius
  const radiusY = 100; // vertical radius
  const centerX = 0; // relative to container
  const centerY = 0;

  return (
    <section
      style={{
        padding: "6rem 2rem",
        textAlign: "center",
        backgroundColor: "transparent",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "4rem",
          textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
        }}
      >
        💻 Skills
      </h2>

      <div
        style={{
          position: "relative",
          width: "500px",
          height: "250px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = centerX + radiusX * Math.cos(angle);
          const y = centerY + radiusY * Math.sin(angle);

          return (
            <span
              key={index}
              style={{
                position: "absolute",
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
                fontSize: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: "#01011cff", // dark background for contrast
                color: "#fff", // text color white
                borderRadius: "20px",
                boxShadow: "0 1px 4px rgba(255, 254, 254, 1)",
                textAlign: "center",
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}
