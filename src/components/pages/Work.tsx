import React from "react";
import "./Work.css";

type Experience = {
  company: string;
  role: string;
  duration: string;
  location?: string;
  responsibilities: string[];
  highlights?: string[];
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

const Work: React.FC = () => {
  const experiences: Experience[] = [
    {
      company: "Up Games LLC",
      role: "Founder & Software Engineer",
      duration: "May 2025 – Present",
      location: "Boston / NYC",
      responsibilities: [
        "Building a mobile-first social app (React Native, Expo, TypeScript) with real-time gameplay and in-app events.",
        "Designing backend services (Node.js, Express, PostgreSQL) with auth, rate limiting, and CI/CD.",
        "Running user tests, instrumentation, and iteration loops to validate retention and engagement.",
      ],
    },
    {
      company: "Boston University School of Public Health (Dr. Martinez Lab)",
      role: "Software Engineer",
      duration: "Oct 2024 – Mar 2025",
      location: "Boston, MA",
      responsibilities: [
        "Built an R Shiny analytics app with automated ETL (dplyr/tidyr) and geospatial mapping (leaflet, sf) for TB policy evaluation.",
        "Improved assessment throughput by streamlining data prep, filtering, and scenario comparison workflows.",
        "Partnered with researchers to prioritize features and validate results on real program data.",
      ],
    },
    {
      company: "Boston Medical Center",
      role: "Software Engineer Intern",
      duration: "Jun 2024 – Jul 2024",
      location: "Boston, MA",
      responsibilities: [
        "Designed an interactive dashboard in TypeScript + Figma for opioid simulation outputs (uncertainty, sensitivity).",
        "Automated preprocessing for large epidemiological datasets using Python (pandas/NumPy/SciPy) and SQL.",
        "Implemented Bayesian calibration (Pyro NUTS) for improved parameter estimation on forecasting models.",
      ],
    },
    {
      company: "Spark! Technology Innovation Fellowship",
      role: "Technical PM & Lead Developer",
      duration: "Jan 2024 – May 2024",
      location: "Boston, MA",
      responsibilities: [
        "Led a small cross-functional team to ship a conversational 3D educational app (React + Three.js + WebSockets).",
        "Integrated LLM, STT/TTS services (Google Cloud, ElevenLabs) and designed prompt flows for real-time interaction.",
        "Ran Agile rituals (planning, standups, retros) and set lightweight roadmaps for on-time MVP delivery.",
      ],
    },
    {
      company: "CIDAR Lab",
      role: "Software Engineer Intern",
      duration: "May 2023 – Aug 2023",
      location: "Boston, MA",
      responsibilities: [
        "Developed bioinformatics features for graph analysis (DFS/BFS) to explore community structure and patterns.",
        "Added targeted algorithmic utilities and unit tests (Jest + React Testing Library) to reduce regressions.",
        "Collaborated on data pipelines and visualization components used by research teammates.",
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: "ALEA — Esports Betting Platform (Polkadot + Unique Network NFTs)",
      description:
        "Hackathon proof-of-concept enabling NFT-based wager tracking and payouts; full-stack MVP in 36 hours.",
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB/Mongoose",
        "Polkadot",
        "Unique Network",
        "Hardhat",
      ],
      link: "https://github.com/miloopark/ALEA",
    },
    {
      title: "Trading Strategy Playground",
      description:
        "Backtests for multiple strategies (Bollinger, pairs, RL prototypes) with walk-forward evaluation and reporting.",
      technologies: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "statsmodels",
        "scikit-learn",
        "Jupyter",
      ],
      link: "https://github.com/miloopark/trading-strategy-playground",
    },
    {
      title: "K-Means Visualizer",
      description:
        "Interactive web app demonstrating K-Means with multiple initializations and step-by-step clustering visuals.",
      technologies: ["TypeScript", "React", "Vite", "D3/Recharts"],
      link: "https://github.com/miloopark/kmeans-algo",
    },
    {
      title: "Neural Networks — From Scratch",
      description:
        "Implemented a feedforward neural network (1 hidden layer) entirely from scratch with visualizations of learned features, decision boundaries, gradients, and an interactive Flask UI.",
      technologies: ["Python", "NumPy", "Matplotlib", "scikit-learn", "Flask"],
      link: "https://github.com/miloopark/Neural-Networks",
    },
    {
      title: "Logistic Regression — Cluster Shifts Analysis",
      description:
        "Generated synthetic datasets with controllable cluster shifts, fit logistic regression models, and analyzed how coefficients, loss, and margins change with separation. Includes plots & interactive module.",
      technologies: ["Python", "NumPy", "Matplotlib", "scikit-learn", "Flask"],
      link: "https://github.com/miloopark/Logistic-Regression-Cluster-Shifts-Analysis",
    },
    {
      title: "Linear Regression Simulation",
      description:
        "Explored linear regression behavior and assumptions via simulations and visualizations; includes reproducible notebooks and plotting utilities.",
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter"],
      link: "https://github.com/miloopark/linear-regression-sim",
    },
  ];

  return (
    <div className="work-content">
      <h2 className="section-title">Experience</h2>
      <div className="section-container">
        {experiences.map((exp, idx) => (
          <div key={idx} className="item-card">
            <h3 className="item-title">{exp.company}</h3>
            <p className="item-role">
              {exp.role} | {exp.duration}
              {exp.location ? ` | ${exp.location}` : ""}
            </p>
            <ul className="item-responsibilities">
              {exp.responsibilities.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
            {exp.highlights && exp.highlights.length > 0 && (
              <>
                <p className="item-subtitle"><strong>Highlights:</strong></p>
                <ul className="item-responsibilities">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ))}
      </div>

      <h2 className="section-title">Projects</h2>
      <div className="section-container">
        {projects.map((project, idx) => (
          <div key={idx} className="item-card">
            <h3 className="item-title">{project.title}</h3>
            <p className="item-description">{project.description}</p>
            <p className="item-technologies">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
