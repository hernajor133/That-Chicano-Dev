import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-colz">
            <div className="colz-icon">
              <a href="https://github.com/hernajor133">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/jordi-hernandez-b731b7223/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Jordi!</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Passionate Dev",
                    1000,
                    "Full Stack Dev",
                    1000,
                    "Mern Stack Dev",
                    1000,
                    "My SQL Server Dev",
                    1000,
                    "Mongo Database Dev",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a
              href="Web-Developer-Resume2022.pdf"
              download="Web-Developer-Resume2022.pdf"
            >
              <button className="btn highlighted-btn">Get Resume!</button>
            </a>
          </div>
        </div>
        <dive className="profile-picture">
          <div className="profile-picture-background"></div>
        </dive>
      </div>
    </div>
  );
}
