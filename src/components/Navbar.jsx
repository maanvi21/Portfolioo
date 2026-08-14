import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PixelIcon } from './PixelArt';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const h = document.documentElement;
      const scrollable = h.scrollHeight - h.clientHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Player', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Quests', href: '#experience' },
    { name: 'Missions', href: '#projects' },
    { name: 'Kode&Co', href: '#ventures' },
    { name: 'Wins', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-hp-bar"><div className="nav-hp-fill" style={{ width: `${progress}%` }} /></div>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <PixelIcon name="heart" size={16} />
          MAANVI<span className="dot">_</span>
        </a>

        <div className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">{link.name}</a>
          ))}
          <a href="#contact" className="nav-cta">Hire Me ▸</a>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="nav-mobile">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link-mobile" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
