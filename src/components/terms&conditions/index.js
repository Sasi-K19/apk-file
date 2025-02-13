import React from 'react';

import { Link } from 'react-router-dom'; 
const TermsandConditions = () => {
  return (
    <div className="page-container">
      <div className="navbar">
        <nav className="navbar navbar-dark bg-dark">
          <img src="https://cdn.freebiesupply.com/logos/large/2x/space-logo-png-transparent.png" alt="logo" />
          <h3>VSPAZE TECHNOLOGIES</h3>
        </nav>
      </div>

      <div className="content">
        <h1>Terms and Conditions</h1>
        <p>
          These terms and conditions outline the rules and regulations for the use of Vspaze Technologies' apps and
          services.
        </p>
        <p>
          <strong>Usage Guidelines:</strong> By using our services, you agree to comply with all applicable laws and
          regulations.
        </p>
        <p>
          <strong>Limitation of Liability:</strong> Vspaze Technologies is not liable for any damages resulting from the
          use of our apps.
        </p>
        <p>
          <strong>Termination:</strong> We reserve the right to terminate access to our services without notice in case
          of violation of these terms.
        </p>
        <p>
          <strong>Changes to Terms:</strong> We may modify these terms at any time, and it is your responsibility to
          review them periodically.
        </p>
        <p>
          <strong>Contact Us:</strong> For questions about these terms, please contact us at support@vspazetechnologies.in.
        </p>
        <Link to="/"> <button className="buttonStyle">
          Back
        </button></Link>
       
      </div>
    </div>
  );
};

export default TermsandConditions;
