import { Trophy, GraduationCap, BrainCircuit, Database, Cloud, Bot } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import './Achievements.css';

const achievements = [
  {
    Icon: Trophy,
    title: '1st Place — TechNova 2025, App Development',
    org: 'Xavier Institute of Technology · Jan 2025',
    desc: 'Built Roots — a community social media app connecting users via contacts, location, and family graphs — in a national hackathon. First place in App Development track.',
    type: 'award',
  },
  {
    Icon: GraduationCap,
    title: 'CGPA 9.09 / 10',
    org: 'B.Tech Computer Engineering with Honours in AI/ML · FCRIT',
    desc: 'Consistently high academic performance across all semesters while simultaneously running internships and freelance client work.',
    type: 'academic',
  },
  {
    Icon: BrainCircuit,
    title: 'Deep Learning Specialization',
    org: 'DeepLearning.AI / Coursera · 2026',
    desc: '5-course specialization covering Neural Networks, Hyperparameter Tuning, CNNs, Sequence Models, and Structuring ML Projects.',
    type: 'cert',
  },
  {
    Icon: Database,
    title: 'SQL (Intermediate)',
    org: 'HackerRank · 2026',
    desc: 'Covers complex joins, aggregations, subqueries, and window functions — Advanced SQL certificate in progress.',
    type: 'cert',
  },
  {
    Icon: Cloud,
    title: 'IoT & Cloud Computing',
    org: 'AWS Academy · Relevant Coursework',
    desc: 'Hands-on coursework covering IoT architectures, cloud infrastructure design, and AWS cloud services.',
    type: 'cert',
  },
];

const cocurricular = [
  {
    Icon: Bot,
    title: 'Agnel Robotics Club & AI/DL Club, FCRIT',
    period: 'Jun 2024 – Present',
    role: 'Technical Team Member (ROBOCON 2026) · Jr. Technical Coordinator',
    desc: 'Building YOLO + OpenCV object detection pipelines and programming microcontrollers via Arduino IDE for ROBOCON. Organised Webrush (100+ participants) and built the official HackQuinox website.',
  },
];

const Achievements = () => {
  return (
    <AnimatedSection id="achievements" className="achievements-section">
      <div className="section-label">Level 06 // High Scores</div>
      <h2 className="section-title">Achievements & Certifications</h2>
      <div className="section-divider" />

      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <div key={i} className={`ach-card card ${a.type === 'award' ? 'ach-award' : ''}`}>
            <div className={`ach-icon-box ${a.type === 'award' ? 'ach-icon-award' : ''}`}>
              <a.Icon size={20} />
            </div>
            <div>
              <h3 className="ach-title">{a.title}</h3>
              <div className="ach-org">{a.org}</div>
              <p className="ach-desc">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cocurr-block">
        <div className="section-label" style={{ marginTop: '3rem' }}>Co-Curricular</div>
        <h3 className="cocurr-title">Clubs & Leadership</h3>
        <div className="cocurr-grid">
          {cocurricular.map((c, i) => (
            <div key={i} className="cocurr-card card">
              <div className="cocurr-header">
                <div className="cocurr-icon-box">
                  <c.Icon size={18} />
                </div>
                <div>
                  <div className="cocurr-name">{c.title}</div>
                  <div className="cocurr-role">{c.role}</div>
                  <div className="cocurr-period">{c.period}</div>
                </div>
              </div>
              <p className="cocurr-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Achievements;
