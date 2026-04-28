import { ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './Ventures.css';

const Ventures = () => {
  return (
    <AnimatedSection id="ventures" className="ventures-section">
      <div className="section-label">Ventures</div>
      <h2 className="section-title">Entrepreneurial Work</h2>
      <div className="section-divider" />

      <div className="venture-layout">
        <div className="venture-main card">
          <div className="venture-header">
            <div>
              <div className="venture-name-row">
                <h3 className="venture-name">Kode & Co.</h3>
                <span className="venture-badge">Founder & Tech Lead</span>
              </div>
              <a href="https://www.kodeandco.online" target="_blank" rel="noreferrer" className="venture-url">
                www.kodeandco.online <ExternalLink size={14} />
              </a>
              <div className="venture-period">Apr 2025 – Present</div>
            </div>
          </div>

          <p className="venture-desc">
            Started a freelance digital solutions venture — closed 4+ client contracts including CIBA Mumbai and Tusk Oral Care
            by leading sales meetings and translating business needs into technical scopes.
          </p>

          <div className="venture-built">
            <h4 className="built-label">What I built for clients</h4>
            <ul className="built-list">
              <li>Centralised admin panels with role-based authentication</li>
              <li>Google Calendar & Gmail API integrations via GCP OAuth 2.0 for automated scheduling</li>
              <li>Custom booking systems replacing third-party tools — managed end-to-end from build to post-launch support</li>
              <li>Full cloud hosting, deployment pipeline, and maintenance independently</li>
            </ul>
          </div>

          <div className="venture-why">
            <span className="why-label">Why it matters</span>
            <p>Running Kode & Co. means I've operated as engineer, product manager, and client lead simultaneously. I know what it takes to ship something real.</p>
          </div>
        </div>

        <div className="venture-side">
          <div className="card side-card">
            <div className="side-num">4+</div>
            <div className="side-desc">Client contracts delivered</div>
          </div>
          <div className="card side-card">
            <div className="side-num">3</div>
            <div className="side-desc">Live products in production</div>
          </div>
          <div className="card side-card side-card--full">
            <div className="side-clients-label">Clients include</div>
            <div className="side-clients">
              <a href="http://ciba.fcrit.ac.in" target="_blank" rel="noreferrer" className="client-badge-link">
                <span className="client-badge">CIBA Mumbai <ExternalLink size={12} style={{ marginLeft: '4px', opacity: 0.7 }} /></span>
              </a>
              <a href="https://mytusk.in" target="_blank" rel="noreferrer" className="client-badge-link">
                <span className="client-badge">Tusk Oral Care <ExternalLink size={12} style={{ marginLeft: '4px', opacity: 0.7 }} /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Ventures;
