import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Skills from './components/Skills';

function App() {
  const backgroundImageUrl =
    "https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1080&w=1920"

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw", // <-- full width of screen
        margin: 0,
        padding: 0,
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // center vertically
        alignItems: "center", // center horizontally
        color: "#000",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden", // prevent horizontal scroll
        position: "relative",
      }}
    >
      {/* Slight dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          zIndex: 0,
        }}
      ></div>

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px", // keeps content nicely centered
          padding: "1rem",
        }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
