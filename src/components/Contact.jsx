import { Mail, Phone, ArrowRight, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

const BehanceIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 13.5h-4v-8h4c2 0 3 1 3 2.5s-1.5 2.5-1.5 2.5 2 .5 2 3-1.5 3-3.5 3z" />
    <path d="M16 8h5" />
    <path d="M16 17c.5 0 4.5 0 4.5-4h-4.5c0 2.5-3 2.5-3 0h7.5c0-5-7-5-7 0s7 5 7 0" />
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-top-line" />
      <div className="container">
        <div className="contact-layout">
          <div className="contact-left">
            <div className="section-label">Contact</div>
            <h2 className="contact-heading">Let's build<br /><span className="contact-accent">something.</span></h2>
            <p className="contact-sub">
              I'm open to ML engineering roles, AI/data internships, and high-impact projects.
              If you have an idea or an opening — let's talk.
            </p>
            <div className="contact-links-group">
              <a href="mailto:shadaksharimaanvi@gmail.com" className="contact-link-row">
                <div className="contact-link-icon"><Mail size={18} /></div>
                <span>shadaksharimaanvi@gmail.com</span>
                <ArrowRight size={16} className="contact-arrow" />
              </a>
              <a href="tel:+917208014200" className="contact-link-row">
                <div className="contact-link-icon"><Phone size={18} /></div>
                <span>+91 7208014200</span>
                <ArrowRight size={16} className="contact-arrow" />
              </a>
              <a href="https://kodeandco.online" target="_blank" rel="noreferrer" className="contact-link-row">
                <div className="contact-link-icon"><Globe size={18} /></div>
                <span>kodeandco.online</span>
                <ArrowRight size={16} className="contact-arrow" />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-card card">
              <div className="contact-card-label">Find me on</div>
              <div className="contact-socials">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-pill">
                  <GithubIcon size={18} />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-pill">
                  <LinkedinIcon size={18} />
                  LinkedIn
                </a>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="social-pill">
                  <BehanceIcon size={18} />
                  Behance
                </a>
              </div>
              <div className="contact-cta">
                <a href="mailto:shadaksharimaanvi@gmail.com" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Get In Touch <Mail size={16} />
                </a>
              </div>
            </div>

            <div className="contact-open-to">
              <div className="open-label">Currently open to</div>
              <div className="open-tags">
                <span className="open-tag">ML Engineering</span>
                <span className="open-tag">AI / Data Internships</span>
                <span className="open-tag">Full-Stack Projects</span>
                <span className="open-tag">Research Collaborations</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <p>© {new Date().getFullYear()} Maanvi Shadakshari · Built with precision.</p>
          <div className="footer-links">
            <a href="#hero">Back to top ↑</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
