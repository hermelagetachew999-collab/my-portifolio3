import { MdEmail } from "react-icons/md";
import { FaTelegram, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ padding: '1rem 2rem', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ margin: 0 }}>&copy; 2025 Hermela Getachew. All rights reserved.</p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem' }}>
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
    </footer>
  )
}
