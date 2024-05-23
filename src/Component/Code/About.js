import React from 'react';
import teamImage from '../Images/r1.png'; // Replace with your team image path

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        {/* About Content Section */}
        <div className="about-content">
          <h1 className="about-heading">About Us</h1>
          <p className="about-slogan">Empowering Developers  Through Various Solutions</p>
          <p>
            [Your Company Name] is a team of passionate individuals dedicated to [Your Mission Statement]. We believe in [Your Core Values] and strive to [Your Goals]. Founded in [Year Founded] by [Founder(s) Name(s)], we have a track record of [Highlight Achievements].
          </p>
          <p>
            Our team comprises experienced professionals with expertise in [List Skills/Areas of Expertise]. We are committed to providing [Your Products or Services] that are [Benefits/Qualities of Offerings]. Whether you're [Target Audience Need] or [Another Target Audience Need], we have the solutions to help you achieve your goals.
          </p>
        </div>

        {/* Team Section (Optional) */}
        <div className="about-team">
          <h2>Meet Our Team</h2>
          <img src={teamImage} alt="Team Photo" className="team-image" />
          <p>
            We are a diverse group of individuals with a shared passion for [Your Industry/Focus]. From our [Department 1] team to our [Department 2] team, we bring a wealth of experience and creativity to the table.
          </p>
        </div>
      </div>

      {/* Call to Action Section (Optional) */}
      <div className="about-cta">
        <a href="#" className="cta-button">Learn More</a>
        <a href="#" className="cta-button">Contact Us</a>
      </div>
    </div>
  );
}

export default About;
