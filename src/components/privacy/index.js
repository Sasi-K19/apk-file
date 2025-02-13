import React from 'react';
import { Link } from 'react-router-dom'; 

const PrivacyPage = () => {
  return (
    <div className="page-container">
      <div className="navbar">
        <nav className="navbar navbar-dark bg-dark">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/space-logo-png-transparent.png" alt="logo" />
          <h3>VSPAZE TECHNOLOGIES</h3>
        </nav>
      </div>
      <div className="content">
        <h1>Privacy Policy</h1>
        <p>
          At Vspaze Technologies, we are committed to protecting your privacy. This privacy policy explains how we collect,
          use, and protect your personal information when you use our app and services.
        </p>
        <p>
          <strong>Information Collection:</strong> We may collect personal information such as your name, email address,
          and usage data to improve your experience.
        </p>
        <p>
          <strong>Data Usage:</strong> The data we collect is used to provide better services, monitor app performance,
          and ensure security.
        </p>
        <p>
          <strong>Third-Party Services:</strong> We may share data with trusted third-party services for analytics and
          improvements.
        </p>
        <p>
          <strong>Contact Us:</strong> If you have any questions about our privacy practices, feel free to contact us at
          support@vspazetechnologies.in.
        </p>
        <Link to="/"><button className="buttonStyle">
           Back
        </button></Link>
      </div>
    </div>
  );
};
export default PrivacyPage;
