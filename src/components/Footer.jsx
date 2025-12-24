import { MdEmail } from "react-icons/md";
import { FaTelegram, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" style={{ padding: '1.5rem 1.5rem', width: '100%', boxSizing: 'border-box', backgroundColor: '#e6e6e6ff', color: '#000000ff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>

        {/* Top row: Services | About Me | Contact Me (inline) */}
        <div id="footer-top" className="footer-top" style={{ width: '100%', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '200px', textAlign: 'left' }}>
            <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.1rem' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#000000ff', fontSize: '0.95rem', lineHeight: '1.8' }}>
              <li>Responsive Web Design</li>
              <li>React & Frontend Development</li>
              <li>Backend & API Integration</li>
              <li>Data Visualization</li>
              <li>Version Control (Git & GitHub)</li>
            </ul>
          </div>

          <div style={{ flex: '1', minWidth: '200px', textAlign: 'center' }}>
            <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.1rem' }}>About Me</h4>
            <p style={{ margin: 0, color: '#000000ff', fontSize: '0.95rem', lineHeight: '1.6' }}>Third-year Information Systems student combining academic knowledge with hands-on web development and creative design.</p>
          </div>

          <div style={{ flex: '1', minWidth: '200px', textAlign: 'right' }}>
            <h4 style={{ margin: '0 0 0.8rem 0', fontSize: '1.1rem' }}>Contact Me</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', alignItems: 'flex-end' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <MdEmail style={{ color: '#000000ff', fontSize: '1.2rem' }} />
                <a href="mailto:hermelagetachew999@gmail.com" style={{ color: '#000000ff', textDecoration: 'none' }}>hermelagetachew999@gmail.com</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <FaTelegram style={{ color: '#4481d6ff', fontSize: '1.2rem' }} />
                <a href="https://t.me/hermiheb" target="_blank" rel="noopener noreferrer" style={{ color: '#000000ff', textDecoration: 'none' }}>@hermiheb</a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <FaPhone style={{ color: '#000000ff', fontSize: '1.2rem' }} />
                <a href="tel:+251909542151" style={{ color: '#000000ff', textDecoration: 'none' }}>+251909542151</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: copyright centered */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1rem' }}>
          <p style={{ margin: 0, color: '#000000ff', fontSize: '0.9rem' }}>&copy; 2025 Hermela Getachew. All rights reserved.</p>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .footer-top {
              flex-direction: column !important;
              text-align: center !important;
              gap: 1.5rem !important;
            }
            
            .footer-top > div {
              text-align: center !important;
              min-width: 100% !important;
            }
            
            .footer-top > div > div {
              align-items: center !important;
            }
            
            #footer {
              padding: 1.5rem 1rem !important;
            }
          }

          @media (max-width: 480px) {
            .footer-top h4 {
              font-size: 1rem !important;
            }
            
            .footer-top ul,
            .footer-top p,
            .footer-top a {
              font-size: 0.85rem !important;
            }
          }
        `}
      </style>
    </footer>
  )
}
