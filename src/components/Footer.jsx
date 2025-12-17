import { MdEmail } from "react-icons/md";
import { FaTelegram, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ padding: '1.25rem 2rem', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem' }}>
        {/* Left: Copyright */}
        <div style={{ flex: '0 0 auto' }}>
          <p style={{ margin: 0 }}>&copy; 2025 Hermela Getachew. All rights reserved.</p>
        </div>

        {/* Center: Services and About Me */}
        <div style={{ flex: '1 1 50%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 0.5rem 0' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#fff' }}>
              <li>Responsive Web Design</li>
              <li>React & Frontend Development</li>
              <li>Backend & API Integration</li>
              <li>Data Visualization</li>
              <li>Version Control (Git & GitHub)</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center', marginTop: '0.6rem' }}>
            <h4 style={{ margin: '0 0 0.25rem 0' }}>About Me</h4>
            <p style={{ margin: 0, maxWidth: '560px', color: '#ddd' }}>
              Third-year Information Systems student combining academic knowledge with hands-on web development and creative design.
            </p>
          </div>
        </div>

        {/* Right: Contact Me */}
        <div style={{ flex: '0 0 300px', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem' }}>
          <h4 style={{ margin: 0 }}>Contact Me</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MdEmail style={{ color: '#fff' }} />
              <a href="mailto:hermelagetachew999@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>hermelagetachew999@gmail.com</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FaTelegram style={{ color: '#fff' }} />
              <a href="https://t.me/hermiheb" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none' }}>@hermiheb</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <FaPhone style={{ color: '#fff' }} />
              <a href="tel:+251909542151" style={{ color: '#fff', textDecoration: 'none' }}>+251909542151</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
