import { MdEmail } from "react-icons/md";
import { FaTelegram, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" style={{ padding: '1.25rem 2rem', width: '100%', boxSizing: 'border-box', backgroundColor: '#e6e6e6ff', color: '#000000ff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>

        {/* Top row: Services | About Me | Contact Me (inline) */}
        <div id="footer-top" style={{ width: '100%', display: 'flex', gap: '1.5rem' }}>
          <div style={{ flex: '1', textAlign: 'left' }}>
            <h4 style={{ margin: '0 0 0 0' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#000000ff' }}>
              <li>Responsive Web Design</li>
              <li>React & Frontend Development</li>
              <li>Backend & API Integration</li>
              <li>Data Visualization</li>
              <li>Version Control (Git & GitHub)</li>
            </ul>
          </div>

          <div style={{ flex: '1', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>About Me</h4>
            <p style={{ margin: 0, color: '#000000ff' }}>Third-year Information Systems student combining academic knowledge with hands-on web development and creative design.</p>
          </div>

          <div style={{ flex: '1', textAlign: 'right' }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Contact Me</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MdEmail style={{ color: '#000000ff' }} />
                <a href="mailto:hermelagetachew999@gmail.com" style={{ color: '#000000ff', textDecoration: 'none' }}>hermelagetachew999@gmail.com</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaTelegram style={{ color: '#4481d6ff' }} />
                <a href="https://t.me/hermiheb" target="_blank" rel="noopener noreferrer" style={{ color: '#000000ff', textDecoration: 'none' }}>@hermiheb</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaPhone style={{ color: '#000000ff' }} />
                <a href="tel:+251909542151" style={{ color: '#000000ff', textDecoration: 'none' }}>+251909542151</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright centered */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem' }}>
          <p style={{ margin: 0, color: '#000000ff' }}>&copy; 2025 Hermela Getachew. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
