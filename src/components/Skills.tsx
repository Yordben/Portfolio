// filepath: src/components/Skills.tsx
import React from 'react';
import { FaNodeJs, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiSharp, SiDotnet, SiPostgresql, SiMongodb, SiExpress, SiPostman, SiGarmin } from 'react-icons/si';

const Skills: React.FC = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills/Tech Stack</h2>
      <ul className="skills-list">
        <li className="skill-item">
          <SiSharp className="skill-icon" /> C#
        </li>
        <li className="skill-item">
          <SiDotnet className="skill-icon" /> ASP.NET
        </li>
        <li className="skill-item">
          <FaNodeJs className="skill-icon" /> Node.js
        </li>
        <li className="skill-item">
          <SiExpress className="skill-icon" /> Express
        </li>
        <li className="skill-item">
          <SiPostgresql className="skill-icon" /> PostgreSQL
        </li>
        <li className="skill-item">
          <SiMongodb className="skill-icon" /> MongoDB
        </li>
        <li className="skill-item">
          <FaDocker className="skill-icon" /> Docker
        </li>
        <li className="skill-item">
          <SiPostman className="skill-icon" /> Postman
        </li>
        <li className="skill-item">
          <SiGarmin className="skill-icon" /> pgAdmin
        </li>
        {/* Add more skills here if needed */}
      </ul>
    </div>
  );
};

export default Skills;