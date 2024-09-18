import React from 'react';
import './Work.css'; // Updated CSS file for unified styling

const Work: React.FC = () => {
  const internships = [
    {
      company: 'Boston Medical Center',
      role: 'Software Engineer Intern',
      duration: 'June 2024 - July 2024',
      responsibilities: [
        'Developed a high-performance GUI for the RESPOND simulation model using Figma and React, increasing user engagement time by 35%.',
        'Automated data normalization using Python and SQL, reducing manual prep time and enhancing data accuracy by 20%.',
        'Applied Markov Chain Monte Carlo methods for model calibration, optimizing parameter estimation and improving prediction precision by 15%.',
      ],
    },
    {
      company: 'Spark! Technology Innovation Fellowship',
      role: 'Technical Product Manager, Lead Developer, Product Designer',
      duration: 'Jan 2024 - May 2024',
      responsibilities: [
        'Led development of an AI-powered educational app with a 3D avatar, enhancing children’s learning experiences.',
        'Managed an Agile team of 3 engineers and 1 UX designer, optimizing sprint cycles and facilitating Agile development.',
        'Animated an interactive avatar in Blender and programmed dynamic responses in TypeScript for real-time conversations.',
      ],
    },
    {
      company: 'CIDAR Lab',
      role: 'Software Engineer Intern',
      duration: 'May 2023 - August 2023',
      responsibilities: [
        'Programmed a bioinformatics tool using Depth-First Search for community relationships and Breadth-First Search for pattern analysis.',
        'Implemented Subset Sum Problem algorithm to enhance data analysis precision by 70%.',
        'Set robust unit tests with React Testing Library and Jest, reducing post-deployment bugs.',
      ],
    },
  ];

  const projects = [
    {
      title: 'ALEA: Esports Betting Platform with Unique Network NFTs',
      description: 'Engineered an esports betting platform on the Polkadot blockchain utilizing Unique Network NFTs for trading and rewards.',
      technologies: ['Solidity', 'Hardhat', 'Polkadot', 'Unique Network', 'Moonbeam', 'Node', 'Express', 'Apollo Server', 'Mongoose', 'React'],
      link: 'https://github.com/miloopark/alea-esports-betting',
    },
    {
      title: 'Trading Strategy Playground',
      description: 'Implemented algorithmic trading strategies using historical stock data and conducted backtesting to evaluate potential profitability.',
      technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'yfinance', 'statsmodels', 'scikit-learn', 'TensorFlow', 'Jupyter Notebooks'],
      link: 'https://github.com/miloopark/trading-strategy-playground',
    },
  ];

  return (
    <div className="work-content">
      <h2 className="section-title">Internships</h2>
      <div className="section-container">
        {internships.map((internship, index) => (
          <div key={index} className="item-card">
            <h3 className="item-title">{internship.company}</h3>
            <p className="item-role">{internship.role} | {internship.duration}</p>
            <ul className="item-responsibilities">
              {internship.responsibilities.map((responsibility, i) => (
                <li key={i}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="section-title">Projects</h2>
      <div className="section-container">
        {projects.map((project, index) => (
          <div key={index} className="item-card">
            <h3 className="item-title">{project.title}</h3>
            <p className="item-description">{project.description}</p>
            <p className="item-technologies">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;