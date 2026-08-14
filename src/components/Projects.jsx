import { MessageSquare, TrendingUp, Settings2, FileSearch, Stethoscope, Bot, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PixelIcon } from './PixelArt';
import AnimatedSection from './AnimatedSection';
import './Projects.css';

const projects = [
  {
    Icon: MessageSquare,
    title: 'Production RAG Pipeline',
    built: 'GenAI · System Design · Microservices',
    description: 'A RAG assistant for internal engineering knowledge (runbooks, postmortems, architecture docs), built as staged system-design upgrades instead of a single script: service-separated ingestion and query APIs backed by Qdrant for vector search and MinIO for durable object storage, with a roadmap through async ingestion, hybrid search + caching, observability, and RAGAS-based evaluation.',
    impact: 'Each phase deliberately targets one production concern — durability across restarts, decoupled scaling, cost control — turning the build into a system-design log, not just a working demo.',
    tech: ['RAG', 'FastAPI', 'Qdrant', 'MinIO', 'Docker', 'Microservices'],
    featured: true,
    github: 'https://github.com/maanvi21/production-rag-pipeline',
  },
  {
    Icon: TrendingUp,
    title: 'AI-Powered Sales Forecasting Dashboard',
    built: 'Full-stack · Deployed',
    description: 'Designed an LSTM–XGBoost ensemble for 30-day demand forecasting (RMSE: 488) using 30+ engineered features, with a lead-time-aware safety stock model served via FastAPI and visualised in a Next.js dashboard.',
    impact: 'End-to-end: raw data → feature engineering → model serving via REST API → live visualisation.',
    tech: ['FastAPI', 'Next.js', 'TensorFlow', 'LSTM', 'XGBoost', 'Recharts'],
    github: 'https://github.com/maanvi21/sales-forecasting-dashboard',
  },
  {
    Icon: FileSearch,
    title: 'AI Resume Intelligence API',
    built: 'Full-stack · Deployed',
    description: 'An intelligent resume screening API using semantic matching, BERT-based NER, and Gemini 2.5 Flash. Features PDF bounding-box reconstruction, synonym-aware skill extraction, and dataset-grounded skill suggestions via RAG.',
    impact: 'Reconstructs visual lines from PDFs to prevent NLP truncation; delivers grounded, field-specific skill rewrites and career-path suggestions.',
    tech: ['FastAPI', 'Gemini 2.5', 'HuggingFace', 'PyTorch', 'RAG'],
    github: 'https://github.com/maanvi21/Smart-Resume-Analyser',
  },
  {
    Icon: Settings2,
    title: 'Ball Bearing Fault Diagnosis System',
    built: 'Production ML Pipeline',
    description: 'A machine learning pipeline to detect and classify ball bearing defects using digital twin sensor data; applied K-Means clustering to label unstructured faulty data before training a Random Forest multi-class classifier.',
    impact: 'Achieved 95% accuracy and 98.7% ROC-AUC on unseen pump data, showing strong real-world generalisation.',
    tech: ['Python', 'Scikit-learn', 'SMOTE', 'K-Means', 'Random Forest'],
    github: 'https://github.com/maanvi21/Fault-Diagnosis',
  },
  {
    Icon: Bot,
    title: 'AI Email Follow-up Automation',
    built: 'Agentic System · Deployed',
    description: 'An event-driven workflow engine for automated 3-step email sequences, using the Grok API for contextual generation across multi-day campaigns — no-reply / open / response trigger logic included.',
    impact: 'A working agentic system in production — not a demo, a live automation pipeline.',
    tech: ['Firebase', 'Node.js', 'React', 'Grok API', 'Google Sheets API'],
    github: 'https://github.com/maanvi21/followup-ai-pro',
  },
  {
    Icon: Stethoscope,
    title: 'Skin Disease Classifier',
    built: 'ML + Deployment + Explainability',
    description: 'Benchmarked MobileNet, EfficientNet, and DenseNet121 across 22 dermatological conditions, resolving class imbalance with Weighted Random Samplers and deploying a Flask app with Grad-CAM overlays for interpretability.',
    impact: 'Interpretable predictions — Grad-CAM overlays show exactly which skin features drove each diagnosis.',
    tech: ['PyTorch', 'DenseNet121', 'Transfer Learning', 'Grad-CAM', 'Flask'],
    github: 'https://github.com/maanvi21/Skin-Disease-Classification',
  },
];

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="projects-section">
      <div className="section-label">Level 04 // Missions</div>
      <h2 className="section-title">
        Selected Work <PixelIcon name="cursor" size={18} className="title-flair" />
      </h2>
      <p className="section-subtitle">Production systems, not prototypes. Every mission shipped code, not just a notebook.</p>
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
