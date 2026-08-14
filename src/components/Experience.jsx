import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import './Experience.css';

const experiences = [
  {
    role: 'Product Tech Fellow — Tusk Kids Project',
    company: 'Tusk Oral Care (Creatures of Habit Pvt. Ltd.)',
    duration: 'Apr 2026 – Present',
    location: 'Remote',
    description: 'Selected as one of 2 Product Tech Fellows for Tusk Kids — delivered the Kids landing page and led initial development of the Tusk mobile app, collaborating directly with founders on architecture and delivery.',
    tags: ['Product Architecture', 'Mobile App', 'React Native', 'Founder Collaboration'],
    current: true,
  },
  {
    role: 'Software Engineer Intern',
    company: 'SVIK IT Solutions and Consultancy',
    duration: 'Jun 2025 – Apr 2026',
    location: 'Navi Mumbai (Hybrid)',
    description: 'Developed a full-stack Project Management System — a live client product — with modular architecture and Role-Based Access Control (RBAC); designed the relational database schema from scratch while iterating with design and SQL teams.',
    tags: ['Node.js', 'React', 'MySQL', 'RBAC', 'System Design'],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Fr. Conceicao Rodrigues Institute of Technology (FCRIT)',
    duration: 'Oct 2025 – Feb 2026',
    location: 'Mumbai',
    description: 'Built an ML pipeline for predictive fault detection on ball bearing defects from digital twin sensor data — K-Means clustering for labeling and an ensemble of Random Forest and XGBoost resolved with SMOTE, achieving 95% accuracy and 98.7% ROC-AUC.',
    tags: ['Python', 'K-Means', 'Random Forest', 'XGBoost', 'SMOTE'],
  },
  {
    role: 'Data Engineering Intern',
    company: 'Altimetrik',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Bengaluru',
    description: 'Built an end-to-end RAG pipeline — chunking, HuggingFace embeddings, FAISS retrieval — and contributed to a production enterprise LLM chatbot, supporting architecture and design decisions at scale.',
    tags: ['RAG', 'FAISS', 'HuggingFace', 'LLMs', 'Data Pipelines'],
  },
  {
    role: 'Student Intern',
    company: 'Indian Institute of Technology, Bombay',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Mumbai',
    description: 'Built the Python GUI for a Video Amplification & Fault Diagnosis tool, integrating with an underlying MATLAB signal processing algorithm for frame-by-frame vibrational data analysis.',
    tags: ['Python', 'GUI', 'Signal Processing', 'MATLAB Integration'],
  },
  {
    role: 'Mobile App Development Intern',
    company: 'ZarvisGenix',
    duration: 'Jun 2024 – Jul 2024',
    location: 'Remote',
    description: 'Built a Flutter mobile app end-to-end; integrated scan-and-pay via Plaid Sandbox, reducing transaction time by 30%.',
    tags: ['Flutter', 'Dart', 'Plaid API', 'Fintech'],
  },
];

const Experience = () => {
  return (
    <AnimatedSection id="experience" className="experience-section">
      <div className="section-label">Level 03 // Quest Log</div>
      <h2 className="section-title">Work History</h2>
      <p className="section-subtitle">Six internships spanning cloud-adjacent infra, ML, data engineering, and full-stack — each one a completed quest.</p>
      <div className="section-divider" />

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
          >
            <div className="timeline-left">
              <div className={`timeline-dot ${exp.current ? 'dot-current' : ''}`} />
              {i < experiences.length - 1 && <div className="timeline-line" />}
            </div>

            <div className="timeline-card card">
              <div className="tc-top">
                <div>
                  <div className="tc-role">{exp.role}{exp.current && <span className="tc-current-tag">LIVE</span>}</div>
                  <div className="tc-company">{exp.company}</div>
                </div>
                <div className="tc-meta">
                  <span className="tc-duration">{exp.duration}</span>
                  <span className="tc-location">{exp.location}</span>
                </div>
              </div>
              <p className="tc-desc">{exp.description}</p>
              <div className="tc-tags">
                {exp.tags.map((t, j) => (
                  <span key={j} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
