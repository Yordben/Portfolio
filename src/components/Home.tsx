// filepath: src/components/Home.tsx
import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section id="home">
        <h2 className="home-title">Welcome to My Portfolio</h2>
        <img src="/profile.jpg" alt="Profile" className="profile-image" />
        <div className="home-info">
        <h1 className="home-name">Yordanos Beneberu</h1>
        <h2 className="home-title">Fullstack Developer(Mainly Backend Developer)</h2>
      </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;