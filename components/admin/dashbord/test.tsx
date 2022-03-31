import React from "react";

const Sssd = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__container__logo">
          <img src="/static/images/logo.png" alt="logo" />
        </div>
        <div className="navbar__container__menu">
          <ul>
            <li>
              <a href="#">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-user"></i>

                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sssd;
