import { Brain, Settings2, Cloud, Wrench, Monitor, Cpu } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './Skills.css';

const skills = [
  {
    category: 'GenAI & Machine Learning',
    Icon: Brain,
    items: ['NLP', 'RAG', 'LLMs', 'Prompt Engineering', 'Vector DBs', 'Transformers', 'CNN', 'YOLO', 'HuggingFace'],
    featured: true,
  },
  {
    category: 'MLOps & Data Systems',
    Icon: Settings2,
    items: ['Docker', 'Kubernetes', 'Scalable Data Pipelines', 'FastAPI Serving', 'Model Monitoring', 'CI/CD', 'FAISS'],
  },
  {
    category: 'Cloud & Infrastructure',
    Icon: Cloud,
    items: ['AWS', 'GCP', 'Firebase', 'Data Engineering', 'Feature Stores', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Backend',
    Icon: Wrench,
    items: ['Python', 'Node.js', 'Express.js', 'Flask', 'FastAPI', 'ASP.NET'],
  },
  {
    category: 'Frontend',
    Icon: Monitor,
    items: ['React.js', 'Next.js', 'React Native', 'Flutter', 'JavaScript'],
  },
  {
    category: 'Tools',
    Icon: Cpu,
    items: ['Git / GitHub', 'Figma', 'Arduino IDE', 'Canva'],
  },
];

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="skills-section">
      <div className="section-label">Skills</div>
      <h2 className="section-title">Technical Arsenal</h2>
      <p className="section-subtitle">Full-stack ML engineering, from data ingestion to deployed products.</p>
      <div className="section-divider" />

      <div className="skills-grid">
        {skills.map((cat, i) => (
          <div key={i} className={`skill-card card ${cat.featured ? 'skill-card--featured' : ''}`}>
            <div className="skill-card-header">
              <div className="skill-icon-box">
                <cat.Icon size={18} />
              </div>
              <h3 className="skill-cat">{cat.category}</h3>
            </div>
            <div className="skill-tags">
              {cat.items.map((item, j) => (
                <span key={j} className={`tag ${cat.featured ? 'tag-accent' : ''}`}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Skills;
