import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import '../Styles/Style.css';

function Projects({ isActive }) {
  // ... other project content ...

  return (
    <div className="home-container">
      <h2 className="projects-heading">My Projects</h2> {/* Heading */}
      {/* ... other project content ... */}
      <div className="github-link-container">
        <Link to="https://github.com/Basweshwar1999" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> View Projects on GitHub
        </Link>
      </div>
    </div>
  );
}

export default Projects;
