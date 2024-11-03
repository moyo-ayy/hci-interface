import React from 'react';
import usfLogo from '../assets/usflogo.png'

const Navbar = ({mode, setMode}) => {
  const getLinkClassName = (linkNumber) => {
    return `navbar-link ${mode === linkNumber ? 'active' : ''}`;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src={usfLogo} className='usfLogo' alt="USF Logo" />
            <h1 className="navbar-title">
              USF Course Evaluation
            </h1>
          </div>
          <div className="navbar-links">
            <div href="#" className={getLinkClassName(1)} onClick={()=>{setMode(1)}}>
              Search by Course
            </div>
            <div href="#" className={getLinkClassName(2)} onClick={()=>{setMode(2)}}>
              Search by Instructor
            </div>
            <div href="#" className={getLinkClassName(3)} onClick={()=>{setMode(3)}}>
              Advanced Search
            </div>
          </div>
          <button className="navbar-mobile-button">
            <svg className="navbar-mobile-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;