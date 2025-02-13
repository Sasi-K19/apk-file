import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Services = () => {
  return (
    <div className="page-container">
      <div className="navbar">
        <nav className="navbar navbar-dark bg-dark">
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/space-logo-png-transparent.png"
            alt="logo"
          />
          <h3>VSPAZE TECHNOLOGIES</h3>
        </nav>
      </div>

      <div className="content">
        <h1>Our Services</h1>
        <p>
          At Vspaze Technologies, we offer a wide array of services designed to drive the success of your business in the digital landscape. 
          Whether you're looking to host your website with the latest technology, develop a stunning user-friendly website, or enhance your business with custom software solutions, we are here to help you succeed.
        </p>
        
        <h2>Our Key Services:</h2>
        <ul>
          <li><strong>Web Hosting:</strong> Fast, reliable, and secure hosting solutions for businesses of all sizes.</li>
          <li><strong>Web Design:</strong> Beautiful, responsive designs that provide an exceptional user experience.</li>
          <li><strong>Cloud Services:</strong> Scalable, secure cloud-based solutions to keep your business agile and efficient.</li>
          <li><strong>Custom Software Development:</strong> Tailored software solutions to automate your business processes and increase efficiency.</li>
        </ul>

        <p>
          We pride ourselves on delivering high-quality, results-driven services that are designed to help your business grow. Explore our offerings and get in touch with us to discuss how we can help you achieve your goals.
        </p>
        
        <div className="button-center">
        <button className="buttonStyle">
       <a href="https://www.vspazetechnologies.in/hosting.html" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
         Visit Website
         </a>
       </button>
          <Link to="/">
            <button className="buttonStyle secondary privacy-button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
