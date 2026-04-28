import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import './Hero.css';

const BehanceIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 13.5h-4v-8h4c2 0 3 1 3 2.5s-1.5 2.5-1.5 2.5 2 .5 2 3-1.5 3-3.5 3z" />
    <path d="M16 8h5" />
    <path d="M16 17c.5 0 4.5 0 4.5-4h-4.5c0 2.5-3 2.5-3 0h7.5c0-5-7-5-7 0s7 5 7 0" />
  </svg>
);

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.6 + i * 0.1, duration: 0.5 } })
};

const Hero = () => {
  const stats = [
    { value: '5+', label: 'Internships' },
    { value: '4+', label: 'Client Products' },
    { value: '9.08', label: 'CGPA' },
    { value: '1st', label: 'TechNova 2025' },
  ];

  return (
    <section id="hero" className="hero-section">
      {/* Background abstract shapes */}
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-grid-lines" aria-hidden="true">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="grid-line" />
          ))}
        </div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="badge-dot" />
            Available for ML & AI roles
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Maanvi<br />
            <span className="name-outline">Shadakshari</span>
          </motion.h1>

          <motion.div
            className="hero-title-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <span>ML Engineer</span>
            <span className="divider-dot">·</span>
            <span>Generative AI</span>
            <span className="divider-dot">·</span>
            <span>Full-Stack Developer</span>
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
          >
            "I've built RAG pipelines at Altimetrik, deployed fault detection ML systems at IIT Bombay, and shipped products for clients like CIBA Mumbai — all before finishing my degree. I don't wait to get good. I just build."
          </motion.p>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            Computer Engineering Honours (AI/ML) · FCRIT · 9.08 CGPA · National Hackathon Winner (TechNova 2025)
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
          >
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Download Resume <Download size={16} />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-link" title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://behance.net" target="_blank" rel="noreferrer" className="icon-link" title="Behance">
              <BehanceIcon size={18} />
            </a>
            <a href="mailto:shadaksharimaanvi@gmail.com" className="icon-link" title="Email">
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats panel */}
        <div className="hero-right">
          <div className="stats-panel">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-item"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={statVariants}
              >
                <span className="stat-val">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Abstract SVG visualisation */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <svg viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <circle cx="190" cy="190" r="140" fill="url(#glow1)" />
              <circle cx="190" cy="190" r="140" fill="none" stroke="#00e5ff" strokeWidth="1" strokeDasharray="8 6" opacity="0.4" className="svg-spin" />
              <circle cx="190" cy="190" r="95" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.35" className="svg-spin-rev" />
              <circle cx="190" cy="190" r="55" fill="none" stroke="#00e5ff" strokeWidth="2" opacity="0.6" />
              {/* Data nodes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x = 190 + 140 * Math.cos(rad);
                const y = 190 + 140 * Math.sin(rad);
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="5" fill="#00e5ff" opacity="0.9" />
                    <circle cx={x} cy={y} r="12" fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.3" />
                    <line x1="190" y1="190" x2={x} y2={y} stroke="url(#line-grad)" strokeWidth="1" opacity="0.2" />
                  </g>
                );
              })}
              <circle cx="190" cy="190" r="8" fill="#00e5ff" />
              <circle cx="190" cy="190" r="16" fill="none" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5" />
              <circle cx="190" cy="190" r="24" fill="none" stroke="#00e5ff" strokeWidth="0.8" opacity="0.25" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
