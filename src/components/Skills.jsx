import { Cloud, Brain, Settings2, Wrench, Monitor, Database } from 'lucide-react';
import { PixelIcon } from './PixelArt';
import AnimatedSection from './AnimatedSection';
import './Skills.css';

const skills = [
  {
    category: 'Cloud & Infrastructure',
    Icon: Cloud,
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Firebase', 'REST APIs', 'CI/CD'],
    featured: true,
  },
  {
    category: 'ML, AI & GenAI',
    Icon: Brain,
    items: ['RAG', 'LLMs', 'NLP', 'Transformers', 'CNNs', 'LSTMs', 'FAISS', 'PyTorch', 'TensorFlow', 'Hugging Face'],
    featured: true,
  },
  {
    category: 'MLOps & Modeling',
    Icon: Settings2,
    items: ['XGBoost', 'Transfer Learning', 'YOLO', 'OpenCV', 'Grad-CAM', 'SMOTE', 'Scikit-learn'],
  },
  {
    category: 'Backend',
    Icon: Wrench,
    items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'Express.js', 'ASP.NET', 'Supabase'],
  },
  {
    category: 'Frontend',
    Icon: Monitor,
    items: ['React.js', 'Next.js', 'React Native', 'Flutter', 'JavaScript'],
  },
  {
    category: 'Databases & Tools',
    Icon: Database,
    items: ['MySQL', 'MongoDB', 'Postgres', 'Git / GitHub', 'OAuth 2.0', 'RBAC', 'Figma'],
  },
];

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="skills-section">
      <div className="section-label">Level 02 // Skill Tree</div>
      <h2 className="section-title">
        Technical Arsenal <PixelIcon name="arcade" size={20} className="title-flair" />
      </h2>
      <p className="section-subtitle">Cloud-native infrastructure meets applied ML — from raw data to deployed, scalable systems.</p>
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
