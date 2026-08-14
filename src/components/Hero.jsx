import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PixelIcon } from './PixelArt';
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
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.6 + i * 0.1, duration: 0.4 } })
};

const Hero = () => {
  const stats = [
    { value: '6', label: 'Internships' },
    { value: '9.09', label: 'CGPA' },
    { value: '4+', label: 'Clients Closed' },
    { value: '1st', label: 'TechNova 2025' },
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" aria-hidden="true">
        <div className="px-cloud px-cloud-1"><PixelIcon name="cloud" size={64} /></div>
        <div className="px-cloud px-cloud-2"><PixelIcon name="cloud" size={44} /></div>
        <div className="px-star px-star-1"><PixelIcon name="star" size={20} /></div>
        <div className="px-star px-star-2"><PixelIcon name="star" size={14} /></div>
        <div className="px-star px-star-3"><PixelIcon name="sparkle" size={16} /></div>
        <div className="px-coin px-coin-1"><PixelIcon name="coin" size={22} /></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="badge-dot" />
            PLAYER STATUS: OPEN TO AI / ML / CLOUD ROLES
          </motion.div>

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            2026 // PORTFOLIO.exe
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            MAANVI<br />
            <span className="name-outline">SHADAKSHARI</span>
          </motion.h1>

          <motion.div
            className="hero-title-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <span>Cloud &amp; Infra Engineer</span>
            <span className="divider-dot">✦</span>
            <span>AI / ML / GenAI</span>
            <span className="divider-dot">✦</span>
            <span>Full-Stack Builder</span>
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            I build the systems underneath the magic — RAG pipelines, cloud infrastructure,
            and ML that ships to production. Six internships, four client contracts, one degree,
            zero patience for sitting still.
          </motion.p>

          <motion.p
            className="hero-sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            B.Tech Computer Engineering · AI/ML Honours · FCRIT · 9.09 CGPA · TechNova 2025 Winner
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">
              ▶ START <ArrowRight size={14} />
            </a>
            <a href="/resume.pdf" className="btn btn-outline" download>
              Resume <Download size={14} />
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <a href="https://github.com/maanvi21" target="_blank" rel="noreferrer" className="icon-link" title="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/maanvi-shadakshari/" target="_blank" rel="noreferrer" className="icon-link" title="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href="https://behance.net/maanvishadakshari" target="_blank" rel="noreferrer" className="icon-link" title="Behance">
              <BehanceIcon size={18} />
            </a>
            <a href="mailto:shadaksharimaanvi@gmail.com" className="icon-link" title="Email">
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — game console panel */}
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

          <motion.div
            className="console"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="console-notch" />
            <div className="console-screen">
              <div className="screen-scanlines" />
              <div className="screen-line">{'>'} LOADING PLAYER...</div>
              <div className="screen-line screen-line-2">{'>'} ROLE: ML + CLOUD ARCHITECT</div>
              <div className="screen-line screen-line-3">{'>'} STACK: PYTORCH · AWS · RAG</div>
              <div className="screen-cursor">█</div>
            </div>
            <div className="console-controls">
              <div className="dpad">
                <span className="dpad-v" /><span className="dpad-h" />
              </div>
              <div className="abxy">
                <span className="ab-btn ab-b">B</span>
                <span className="ab-btn ab-a">A</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
