import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Back End Developer",
      company: "Toplink Technologies Plc",
      location: "Addis Ababa",
      date: "March 2023 - Present",
      responsibilities: [
        "Worked on WUMIS, a World Bank-supported project for the Ethiopian Water Management Office.",
        "Developed HR, Finance, Customer, and Inventory management systems.",
        "Optimized database queries and designed efficient workflows.",
        "Collaborated in Agile teams to deliver milestones on time."
      ],
      technologies: ".NET Core, Web API, Entity Framework, PostgreSQL, GitLab, Unit Testing"
    },
    {
      title: "Backend Developer",
      company: "IE Networking Plc",
      location: "Addis Ababa",
      date: "July 2022 - March 2023",
      responsibilities: [
        "Developed and tested microservices for scalable systems.",
        "Implemented clean, maintainable, and high-performance code using Clean Architecture.",
        "Gathered customer requirements and converted them into technical specifications."
      ],
      technologies: "C#, .NET Core, Git, PostgreSQL"
    },
    {
      title: "Full Stack Developer",
      company: "Tohey Technologies PLC",
      location: "Addis Ababa",
      date: "March 2021 - July 2022",
      responsibilities: [
        "Developed HRMS, including payroll, attendance, and self-service features.",
        "Designed and implemented a POS system to process and record transactions.",
        "Optimized performance by adjusting design parameters and adding new features."
      ],
      technologies: "C#, .NET Core, Angular, MSSQL, Git"
    },
    {
      title: "Junior Full Stack Developer",
      company: "Sinbona Technologies PLC",
      location: "Addis Ababa",
      date: "March 2020 - March 2021",
      responsibilities: [
        "Designed and developed the Garage Management System and Lemmaji System.",
        "Wrote clean, maintainable code and ensured high performance."
      ],
      technologies: "Node.js, React.js, MongoDB, Git"
    }
  ];

  return (
    <div className="experience-container">
      <h2 className="experience-title">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title} - {exp.company}</h3>
          <p><strong>Location:</strong> {exp.location}</p>
          <p><strong>Date:</strong> {exp.date}</p>
          <ul>
            {exp.responsibilities.map((res, i) => (
              <li key={i}>{res}</li>
            ))}
          </ul>
          <p><strong>Technologies Used:</strong> {exp.technologies}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
