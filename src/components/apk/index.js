import React from 'react';
import './index.css'; // Ensure your CSS is updated
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
const BuildPage = () => {

  const handleInstall = () => {
    const apkFile = "/app-release.apk"; 

    const link = document.createElement("a");
    link.href = apkFile;
    link.download = "app-release.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleNavigation = () => {
    window.location.href = 'https://www.vspazetechnologies.in/hosting.html';
  };

  return (
    <div className="page-container">
      <div className="navbar">
       
          <nav className="navbar navbar-dark bg-dark">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/space-logo-png-transparent.png" alt="logo"/>
          <h3>VSPAZE  TECHNOLOGIES</h3>
          </nav>
        
      </div>

      <div className="apk-file">
        <h1>@Vspazetech/groceriesapp</h1>
        <p className='view-para'>View and install apps built for internal distribution.</p>

        <div className="build-card">
          <div className="card-header"><div>
            <span className="label">Build artifact</span>
            <span className="badge">APK</span></div>
            <div className="button-group">
            <button className="buttonStyle" onClick={handleInstall}>Install
            <FontAwesomeIcon icon={faDownload} beat size="sm" style={{ color: "white" }} />

            </button>
            <button className="buttonStyle secondary">Open with Orbit</button>
           
          </div>
          </div>
          <p className="description">Android internal distribution build</p>
          
          <div className="status">
            <span>Status</span>
            <span className="status-finished">Finished</span>
          </div>
        </div>

        <div className="button-container">
  <div className="button-row">
 <Link to="/services">  <button className="buttonStyle" onClick={handleNavigation}>
      <span>Services</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ color: "#ffffff", marginLeft: "8px" }} beat />
    </button></Link>
  </div>
  <div className="button-row">
<Link to="/privacy"> <button className="buttonStyle secondary">Privacy</button></Link> 
 <Link to="/termsandconditions"><button className="buttonStyle secondary privacy-button" >
          Terms & Conditions
        </button></Link> 
  </div>
</div>

      </div>
    </div>
  );
};

export default BuildPage;
