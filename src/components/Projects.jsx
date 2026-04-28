import { Bot, TrendingUp, Settings2, FileSearch, Stethoscope, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import AnimatedSection from './AnimatedSection';
import './Projects.css';

const projects = [
  {
    Icon: FileSearch,
    title: 'AI Resume Intelligence API',
    built: 'Full-stack · Deployed',
    description: 'An intelligent resume screening API using semantic matching, BERT-based NER, and Gemini 2.5 Flash. Features PDF bounding-box reconstruction, synonym-aware skill extraction, and dataset-grounded skill suggestions via RAG over the Kaggle Resume Dataset.',
    impact: 'Reconstructs visual lines from PDFs to prevent NLP truncation; delivers grounded, field-specific skill rewrites and career-path suggestions.',
    tech: ['FastAPI', 'Gemini 2.5', 'HuggingFace', 'PyTorch', 'pdfplumber', 'Transformers'],
    featured: true,
    github: 'https://github.com/maanvi21/Smart-Resume-Analyser',
  },
  {
    Icon: TrendingUp,
    title: 'AI-Powered Sales Forecasting Dashboard',
    built: 'Full-stack · Deployed',
    description: 'Built a full-stack sales & inventory forecasting platform using an MLP + XGBoost ensemble for accurate 30-day predictions. Engineered 20+ features (seasonality, lags, categorical encoding) and developed a lead-time-aware safety stock system to prevent stockouts.',
    impact: 'End-to-end: raw data → feature engineering → model serving via REST API → live visualisation.',
    tech: ['FastAPI', 'Next.js', 'TensorFlow', 'LSTM', 'XGBoost', 'Recharts'],
    github: 'https://github.com/maanvi21/sales-forecasting-dashboard',
  },
  {
    Icon: Settings2,
    title: 'Ball Bearing Fault Diagnosis System',
    built: 'Production ML Pipeline',
    description: 'Developed a machine learning pipeline to detect and classify ball bearing defects using digital twin sensor data; applied K-Means clustering to label unstructured faulty data before training a Random Forest multi-class classifier.',
    impact: 'Achieved 95% accuracy and 98.7% ROC-AUC on unseen pump data, showing strong real-world generalisation.',
    tech: ['Python', 'Scikit-learn', 'SMOTE', 'K-Means', 'Random Forest'],
    github: 'https://github.com/maanvi21/Fault-Diagnosis',
  },
  {
    Icon: Bot,
    title: 'AI Email Follow-up Automation',
    built: 'Agentic System · Deployed',
    description: 'Built an AI-powered email automation system generating contextual follow-ups based on user interaction patterns; designed an event-driven workflow engine with trigger-based logic (no-reply / open / response) for multi-step communication sequences.',
    impact: 'A working agentic system in production — not a demo, a live automation pipeline.',
    tech: ['Firebase', 'Node.js', 'React', 'Grok API', 'Google Sheets API'],
    github: 'https://github.com/maanvi21/followup-ai-pro',
  },
  {
    Icon: Stethoscope,
    title: 'Skin Disease Classifier',
    built: 'ML + Deployment + Explainability',
    description: 'Benchmarked 3 transfer-learning architectures (MobileNet, EfficientNet, DenseNet121) across 22 dermatological conditions; selected DenseNet121 for peak diagnostic accuracy. Mitigated severe class imbalance with custom Weighted Random Samplers + Weighted Cross-Entropy Loss.',
    impact: 'Built a Flask web app integrating Grad-CAM visualisations to highlight the skin features driving each prediction.',
    tech: ['PyTorch', 'CNN', 'DenseNet121', 'Transfer Learning', 'Grad-CAM', 'Flask'],
    github: 'https://github.com/maanvi21/Skin-Disease-Classification',
  },
];

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="projects-section">
      <div className="section-label">Projects</div>
      <h2 className="section-title">Selected Work</h2>
      <p className="section-subtitle">Production systems, not prototypes. Every project is deployed or production-architected.</p>
      <div className="section-divider" />

      <div className="projects-bento">
        {projects.map((p, i) => (
          <div key={i} className={`project-card card ${p.featured ? 'project-featured' : ''}`}>
            <div className="project-top">
              <div className="project-icon-box">
                <p.Icon size={20} />
              </div>
              <div className="project-actions">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-action" title="GitHub">
                  <span className="action-label">View Repo</span>
                  <GithubIcon size={15} />
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-action" title="Live">
                    <span className="action-label">Live Demo</span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{p.title}</h3>
            <div className="project-built">{p.built}</div>
            <p className="project-desc">{p.description}</p>

            <div className="project-impact">
              <span className="impact-label">Impact</span>
              <span className="impact-text">{p.impact}</span>
            </div>

            <div className="project-tags">
              {p.tech.map((t, j) => (
                <span key={j} className={`tag ${p.featured ? 'tag-accent' : ''}`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;
