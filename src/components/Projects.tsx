import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <ul className="projects-list">
        <li className="project-item">
          <h3>WUMIS (Water Utility Management Information System)</h3>
          <p>
            <strong>Overview:</strong> A comprehensive system developed for the Ethiopian Water Management Office to streamline and manage operations effectively.
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>HR System: Manages employee records, payroll, and performance metrics.</li>
              <li>Finance System: Tracks financial transactions, budgets, and reporting.</li>
              <li>Customer Management System: Handles customer data, service subscriptions, and feedback.</li>
              <li>Property Management System: Manages assets and property details.</li>
              <li>Inventory Management System: Tracks inventory levels, procurement, and stock usage.</li>
              <li>
                Billing and Reading: Automates the process of reading customer water meters, preparing bills based on consumption, and managing the sale of prepared bills.
              </li>
              <li>
                Customer Service Workflow: Includes handling the installation of water meters, managing the installation process, and overseeing related workflows to ensure efficient service delivery.
              </li>
            </ul>
          </p>
          <p>
            <strong>Technologies Used:</strong> .NET Core, Web API, Entity Framework, PostgreSQL, Git, GitLab, Unit Testing
          </p>
          <p>
            <strong>Impact:</strong> Enhanced operational efficiency and accuracy by integrating multiple systems into a unified platform. Improved billing processes and customer service workflows.
          </p>
        </li>
        <li className="project-item">
          <h3>Inventory Management System</h3>
          <p>
            <strong>Overview:</strong> A system for tracking and managing inventory levels, procurement, and stock movements.
          </p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Developed and tested features using C#, .NET Core, and PostgreSQL.</li>
              <li>Implemented high-performance, maintainable, and clean code based on business requirements.</li>
              <li>Collaborated with teams in an Agile environment to meet development milestones.</li>
            </ul>
          </p>
          <p>
            <strong>Technologies Used:</strong> C#, .NET Core, PostgreSQL, Git, Clean Architecture
          </p>
        </li>
        <li className="project-item">
          <h3>Human Resource Management System (HRMS)</h3>
          <p>
            <strong>Overview:</strong> A complete HR solution including employee self-service, attendance management, payroll processing, and dashboards.
          </p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Gathered and defined customer requirements for clear project specifications.</li>
              <li>Developed scalable microservices for HR processes using C# and .NET Core.</li>
              <li>Improved performance by optimizing database queries and code structure.</li>
            </ul>
          </p>
          <p>
            <strong>Technologies Used:</strong> C#, .NET Core, Angular, PostgreSQL, Git
          </p>
        </li>
        <li className="project-item">
          <h3>Garage Management System</h3>
          <p>
            <strong>Overview:</strong> A system to streamline garage operations, including service tracking and customer management.
          </p>
          <p>
            <strong>Responsibilities:</strong>
            <ul>
              <li>Designed and implemented database structures using MongoDB.</li>
              <li>Developed backend APIs with Node.js and React.js for frontend integration.</li>
            </ul>
          </p>
          <p>
            <strong>Technologies Used:</strong> Node.js, React.js, MongoDB, Git
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
