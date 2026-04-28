import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import './Experience.css';

const experiences = [
  {
    role: 'Machine Learning Intern',
    company: 'Fr. Conceicao Rodrigues Institute of Technology (FCRIT)',
    duration: 'Apr 2026 – Present',
    location: 'Mumbai',
    description: 'Designed and deployed an end-to-end ML pipeline for predictive fault detection on digital twin sensor data — from raw unlabelled inputs to a production-ready multi-class classifier. Applied K-Means clustering to programmatically label unstructured sensor data, then trained and validated a Random Forest classifier. Benchmarked SVM, Logistic Regression, and Decision Tree models to drive data-informed model selection.',
    tags: ['Python', 'Scikit-learn', 'K-Means', 'Random Forest', 'Digital Twin', 'ML Pipeline'],
    current: true,
  },
  {
    role: 'Software Engineer Intern',
    company: 'SVIK IT Solutions & Consultancy',
    duration: 'Jun 2025 – Apr 2026',
    location: 'Navi Mumbai (Hybrid)',
    description: 'Architected and delivered a full-stack Project Management System as a live client product — with modular architecture, Role-Based Access Control (RBAC), and multi-tier subscription logic. Designed the relational database schema from scratch and owned the complete delivery cycle from build to deployment and post-launch support.',
    tags: ['Node.js', 'React', 'MySQL', 'RBAC', 'Full-Stack', 'Production Deployment'],
  },
  {
    role: 'Summer Intern — Data Engineering',
    company: 'Altimetrik',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Bengaluru',
    description: 'Contributed to a production RAG-based LLM chatbot for enterprise use. Independently architected a complete RAG pipeline — document ingestion → chunking → embedding generation (HuggingFace Transformers) → FAISS vector retrieval → question answering — designed for semantic accuracy and scalability.',
    tags: ['RAG', 'LLMs', 'FAISS', 'HuggingFace', 'Data Pipelines', 'System Design'],
  },
  {
    role: 'Student Intern',
    company: 'Indian Institute of Technology, Bombay',
    duration: 'Jun 2025 – Jul 2025',
    location: 'Mumbai',
    description: 'Built the Python GUI and integration layer for a Video Amplification & Fault Diagnosis tool — bridging a MATLAB-based signal processing algorithm with a visual interface for frame-by-frame vibrational data analysis. Delivered a production-usable diagnostic tool for mechanical fault identification.',
    tags: ['Python', 'GUI', 'Signal Processing', 'MATLAB Integration', 'Fault Diagnosis'],
  },
  {
    role: 'Mobile App Development Intern',
    company: 'ZarvisGenix',
    duration: 'Jun 2024 – Jul 2024',
    location: 'Remote',
    description: 'Built and shipped a Flutter mobile app end-to-end. Integrated a scan & pay feature using Plaid Sandbox — achieving a 30% reduction in transaction time in production testing.',
    tags: ['Flutter', 'Dart', 'Plaid API', 'Mobile Development', 'Fintech'],
  },
];

const Experience = () => {
  return (
    <AnimatedSection id="experience" className="experience-section">
      <div className="section-label">Experience</div>
      <h2 className="section-title">Work History</h2>
      <p className="section-subtitle">5 internships across ML, data engineering, full-stack, and mobile development.</p>
      <div className="section-divider" />

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className="timeline-left">
              <div className={`timeline-dot ${exp.current ? 'dot-current' : ''}`} />
              {i < experiences.length - 1 && <div className="timeline-line" />}
            </div>

            <div className="timeline-card card">
              <div className="tc-top">
                <div>
                  <div className="tc-role">{exp.role}</div>
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
