import React from 'react';
import Me from "../../../public/assets/me.jpg"
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-content">
      <h2>About Me</h2>
      <img src={Me} className="about-image" alt="Milo" />
      <p>
        Hey! I'm Milo (Min Sung Park). I recently graduated from Boston University with a degree in Computer Science, 
        and I’m passionate about building software that’s creative, impactful, and people-centered. 
        Right now, I’m balancing two paths: growing my own startup and exploring software engineering opportunities where I can contribute and learn from a strong team.
      </p>
      <p>
        On the entrepreneurial side, I’m building <strong>Up Games</strong>, a startup focused on creating engaging social and mobile experiences. 
        It’s been a way for me to apply full-stack development, product design, and rapid iteration — while also teaching me a lot about the realities of shipping and scaling products. 
      </p>
      <p>
        At the same time, I’m excited to join a collaborative team as a Software Engineer. I’m looking for opportunities to deepen my skills in 
        frontend (React, Next.js, TypeScript), backend (Node.js, Python), and data-driven applications, while contributing to meaningful projects.
      </p>
      <p>
        Beyond code, I’m a creative at heart — I DJ, produce music, and design visuals — and I believe creativity fuels my engineering. 
        I also love staying active: golf, basketball, swimming, and late-night poker hands with friends. 
      </p>
    </div>
  );
};

export default About;
