export default function Hero() {
  return (
    <section
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        padding: "0 4rem",
        backgroundColor: "transparent",
        color: "#000",
      }}
    >
      {/* Profile picture */}
      <img
        src="\IMG_20251016_090219_416_edit_102751386247937.jpg"
        alt="Hermela Getachew"
        style={{
          width: "300px",
          height: "470px",           // make it an ellipse
          borderRadius: "50% / 40%", // ellipse shape
          objectFit: "cover",
          marginRight: "3rem",       // move a little to the left
          border: "3px solid transparent",
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
          transition: "transform 0.3s",
          cursor: "pointer",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      />

      {/* Text info */}
      <div>
        <h3 style={{ fontSize: "2rem", marginBottom: "1rem", fontWeight: "bold" }}>
          I am Hermela Getachew
        </h3>
        <p style={{ fontSize: "1rem", maxWidth: "600px", lineHeight: "1.5" }}>
          Frontend Developer | Designer | Creator
        </p>
      </div>
    </section>
  );
}

 