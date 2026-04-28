import { Trophy, GraduationCap, FileText, Bot, Layers } from 'lucide-react';
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
    title: 'CGPA 9.08',
    org: 'B.Tech Computer Engineering with Honours in AI/ML · FCRIT',
    desc: 'Consistently high academic performance across all semesters while simultaneously running internships and a freelance venture.',
    type: 'academic',
  },
  {
    Icon: FileText,
    title: 'AWS Academy — IoT and Cloud Computing Laboratory',
    org: 'Amazon Web Services',
    desc: 'Hands-on certification covering IoT architectures, cloud infrastructure, and AWS cloud services.',
    type: 'cert',
  },
  {
    Icon: Layers,
    title: 'Data Mining and Business Intelligence · Big Data Analytics',
    org: 'Major Elective — Semester VI',
    desc: 'Comprehensive training in data mining, business intelligence workflows, and large-scale data analytics methodologies.',
    type: 'academic',
  },
];

const cocurricular = [
  {
    Icon: Bot,
    title: 'Agnel Robotics Club, FCRIT',
    period: 'Jun 2025 – Present',
    desc: 'Building object detection & classification pipelines using OpenCV and YOLO for ROBOCON 2026. Programming microcontroller systems via Arduino IDE. Mentoring juniors on robotics fundamentals.',
  },
  {
    Icon: Layers,
    title: 'AI & Deep Learning Club, FCRIT',
    period: 'Jun 2024 – Jun 2025',
    desc: 'Jr. Technical Coordinator — organised Webrush (100+ participants), managed web infrastructure, built the official HackQuinox website and multiple club platforms end-to-end.',
  },
];

const Achievements = () => {
  return (
    <AnimatedSection id="achievements" className="achievements-section">
      <div className="section-label">Recognition</div>
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
