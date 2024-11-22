import React from "react";
import "./Connect.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Connect = () => {
  return (
    <>
      <div className="tooltip-container">
        <ul className="links-icon">
          <li className="icon-content">
            <a
              href="https://www.linkedin.com/in/saiprashanthk"
              aria-label="LinkedIn"
              data-social="linkedin"
              rel="noreferrer"
              target="_blank"
            >
              <div className="filled"></div>
              <FaLinkedin />
            </a>
            <div className="tooltip">LinkedIn</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.github.com/ksaiprashanth"
              aria-label="GitHub"
              data-social="github"
              rel="noreferrer"
              target="_blank"
            >
              <div className="filled"></div>
              <FaGithub />
            </a>
            <div className="tooltip">GitHub</div>
          </li>
          <li className="icon-content">
            <a
              href="https://www.x.com/saiprashanth0"
              aria-label="X"
              data-social="x"
              rel="noreferrer"
              target="_blank"
            >
              <div className="filled"></div>
              <FaXTwitter />
            </a>
            <div className="tooltip">X</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Connect;
