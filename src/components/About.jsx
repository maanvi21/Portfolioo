import { GraduationCap, Trophy, Rocket } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './About.css';

const About = () => {
  return (
    <AnimatedSection id="about" className="about-section">
      <div className="about-layout">

        {/* Left — bio text */}
        <div className="about-text">
          <div className="section-label">About</div>
          <h2 className="section-title">Not just models.<br />Production systems.</h2>

          <div className="about-paragraphs">
            <p>
              I'm a third-year Computer Engineering student at FCRIT, Vashi, specialising in AI/ML —
              with a focus on building systems that actually work in production, not just in notebooks.
            </p>
            <p>
              I've built RAG pipelines at Altimetrik, deployed ML fault detection systems at IIT Bombay,
              shipped live client products through my own freelance venture Kode & Co., and won 1st place
              at TechNova 2025 for building a community social app from scratch in 24 hours.
            </p>
            <p>
              What sets me apart is the combination: I can design a vector retrieval pipeline in the morning,
              build the API that serves it in the afternoon, and translate it into a user-centric product by evening.
              I apply design thinking to ensure every technical architecture solves a real human problem.
            </p>
            <p className="about-highlight">
              Currently looking to bring this end-to-end ownership to high-impact AI and data-driven product teams.
            </p>

            <div className="about-principles">
              <div className="principle">
                <span className="principle-dot" />
                <span><strong>Customer-First AI</strong>: Engineering systems that solve real human friction, not just optimizing metrics.</span>
              </div>
              <div className="principle">
                <span className="principle-dot" />
                <span><strong>Production-Grade Reliability</strong>: Moving from notebook prototypes to high-availability, scalable microservices.</span>
              </div>
              <div className="principle">
                <span className="principle-dot" />
                <span><strong>Design Thinking</strong>: Bridging the gap between complex ML architectures and intuitive product experiences.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — cards */}
        <div className="about-right">
          <div className="about-card card">
            <div className="about-card-icon">
              <GraduationCap size={22} />
            </div>
            <div>
              <h4 className="about-card-title">FCRIT, Vashi</h4>
              <p className="about-card-sub">B.Tech Computer Engineering (AI/ML Honours)</p>
              <p className="about-card-val">CGPA 9.08</p>
            </div>
          </div>

          <div className="about-card card">
            <div className="about-card-icon">
              <Trophy size={22} />
            </div>
            <div>
              <h4 className="about-card-title">TechNova 2025 — 1st Place</h4>
              <p className="about-card-sub">Xavier Institute of Technology · App Development Track</p>
              <p className="about-card-val">National Hackathon Winner</p>
            </div>
          </div>

          <div className="about-card card">
            <div className="about-card-icon">
              <Rocket size={22} />
            </div>
            <div>
              <h4 className="about-card-title">Kode & Co.</h4>
              <p className="about-card-sub">Founder & Tech Lead · Apr 2025 – Present</p>
              <p className="about-card-val">4+ live client contracts shipped</p>
            </div>
          </div>

          <div className="about-stack">
            <span className="section-label" style={{ marginBottom: 0 }}>Core stack</span>
            <div className="about-tags">
              {['Python', 'RAG', 'LLMs', 'React', 'FastAPI', 'Docker', 'GCP'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
};

export default About;
