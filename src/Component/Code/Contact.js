import React, { useRef } from 'react';
import logoImage from '../Images/1st.MOV'; // Replace with your logo path

function Contact() {
  const videoRef = useRef(null);

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Video Container */}
        <div className="video-container" style={{borderRadius:10}}>
          <video ref={videoRef} src={logoImage} className="background-video"  style={{borderRadius:10}} controls />
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h1 className="contact-heading">Contact Us</h1>
          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/basweshwar-gubge-1340952b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="icon"
              >
                <path d="M16 8a3 3 0 1 1 3 3 3 3 0 0 1-3-3zM8 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM22 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM12 16a4 4 0 1 0 0-8 4 4 0 0 1 0 8z" />
              </svg>
              basweshwargubge
            </a>
          </p>
          <p>
            <span className="contact-label">Email:</span>
            <a href="mailto:basweshwargubge1902@gmail.com">
              basweshwargubge1902@gmail.com
            </a>
          </p>
          <p>
            <span className="contact-label">Phone:</span> +91-8530617353
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
