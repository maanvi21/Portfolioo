import { GraduationCap, Trophy, Rocket } from 'lucide-react';
import { PixelIcon } from './PixelArt';
import AnimatedSection from './AnimatedSection';
import './About.css';

const sideQuests = [
  { icon: 'dumbbell', label: 'Fitness & lifting' },
  { icon: 'mic', label: 'Singing' },
  { icon: 'sparkle', label: 'Dancing' },
  { icon: 'plane', label: 'Travel & adventure' },
  { icon: 'rocket', label: 'Building things that scale' },
  { icon: 'bolt', label: 'Chasing the next big idea' },
];

const About = () => {
  return (
    <AnimatedSection id="about" className="about-section">
      <div className="section-label">Level 01 // Meet the Player</div>
      <h2 className="section-title">Who I Am, Beyond the Code.</h2>

      <div className="about-layout">
        {/* Left — bio text */}
        <div className="about-text">
          <div className="about-paragraphs">
            <p>
              I'm Maanvi — an engineer who's happiest in the layer most people never see: the cloud
              infrastructure, the ML pipelines, the RAG systems quietly doing the heavy lifting behind
              a good product. I care about what happens when a notebook prototype has to survive real
              traffic, real users, real failure modes.
            </p>
            <div className="about-principles">
              <div className="principle">
                <span className="principle-dot" />
                <span><strong>Cloud-Native by Default</strong>: Designing for AWS/GCP from day one — containers, scalable services, infra that doesn't fall over.</span>
              </div>
              <div className="principle">
                <span className="principle-dot" />
                <span><strong>ML That Ships</strong>: RAG pipelines, LLMs, and models that go from Jupyter to production, not just a demo.</span>
              </div>
              <div className="principle">
                <span className="principle-dot" />
                <span><strong>Builder's Mindset</strong>: Constantly asking how to scale, how to do it better, how to get to the next level faster.</span>
              </div>
            </div>

            <p className="about-outro">
              Off the clock, I'm just as intense about it — I lift, I sing, I dance, I go looking for
              the next adventure. Ambition isn't a switch I turn off after work; it's just how I'm wired.
            </p>

            <div className="side-quests">
              <span className="section-label" style={{ marginBottom: '0.9rem' }}>
                Side Quests
                <PixelIcon name="cookie" size={14} />
                <PixelIcon name="coffee" size={14} />
              </span>
              <div className="side-quest-grid">
                {sideQuests.map((q) => (
                  <div key={q.label} className="side-quest-chip">
                    <PixelIcon name={q.icon} size={18} />
                    <span>{q.label}</span>
                  </div>
                ))}
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
              <p className="about-card-val">CGPA 9.09</p>
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
              <h4 className="about-card-title">Kode &amp; Co.</h4>
              <p className="about-card-sub">Freelance Project Consultant · Apr 2025 – Present</p>
              <p className="about-card-val">4+ client contracts delivered</p>
            </div>
          </div>

          <div className="about-stack">
            <span className="section-label" style={{ marginBottom: 0 }}>Core Stack</span>
            <div className="about-tags">
              {['Python', 'AWS', 'GCP', 'Docker', 'Kubernetes', 'RAG', 'LLMs', 'FastAPI'].map(t => (
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
