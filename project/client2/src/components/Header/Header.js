import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
      <div className="header">
        <div className="header-wrapper">
          <div className="header-branding">
            <h1 className="header-title">Paléo-H2O</h1>
          </div>
          <div className="header-links">
            <nav className="header-nav">
              <ul className="header-nav-ul">
                  <a href="/about">
                    <li className="header-nav-li">À propos</li>
                  </a>
                  <a href="/team">
                    <li className="header-nav-li">Équipe</li>
                  </a>
                  <a href="/news">
                    <li className="header-nav-li">News/Expo</li>
                  </a>
                  <a href="/lab">
                    <li className="header-nav-li">Lab</li>
                  </a>
                  <a href="/proposer">
                    <li className="header-nav-li">Proposer</li>
                  </a>
                  <a href="contact">
                    <li className="header-nav-li">Contact</li>
                  </a>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }

export default Header;