import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-content">
      <h2>About Me</h2>
      <div className="about-intro">
        <p>
          Hey! I'm Milo [Min Sung], a senior at Boston University, majoring in Computer Science and Mathematics. I'm passionate
          about development and love the idea that you can create anything if you put your mind to it. Someday, I wish
          to create my own creative agency.
          
        </p>
        <img src="/public/assets/me.jpg" className="about-image" alt="Milo" />
      </div>
      <p>
          I enjoy creative pursuits like sound engineering, music production,
          and video editing. I love physical activities such as golf, soccer, basketball, swimming, etc.
          In my downtime, I'm either reading, at the driving range, or playing poker with my friends.
      </p>
      <p>
          I started programming Java when I was 16 for an AP course. I started Python when I was 18 for an intro CS course
          freshman year of college. Since then, I've learned various languages and technologies, including 
          JavaScript, TypeScript, HTML/CSS, SQL, and C/C++. I've also worked extensively with frameworks and libraries such as 
          React, React Native, Node.js, Express, Flask, Pandas, NumPy, Mongoose, and more.
      </p>
    </div>
  );
};

export default About;
