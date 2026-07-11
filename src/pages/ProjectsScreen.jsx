import React from "react";
import { projects } from "../data/projects";
import style from "styled-components";

const Button = style.button`
    background-color: #f95959; 
    border: 0;   
    padding: 10px;
    border-radius: 3px;
    color: #fff;
`;

export const ProjectsScreen = () => {
  const reverseProjects = projects.map((item) => item).reverse();

  return (
    <div className="container">
      <div className="row mt-5 text-light">
        <div className="col-12 pt-4">
          <div className="d-flex align-items-center">
            <i className="fa fa-briefcase icon-cv mr-3" aria-hidden="true"></i>
            <h2>Projects</h2>
          </div>

          <div className="hrow"></div>

          <div className="row" style={{ padding: 0, margin: 0 }}>
            {reverseProjects.map((project) => (
              <div className="col-12 col-md-6 my-2 p-2 text-d" key={project.id}>
                <div className="card my-3 p-3 text-d">
                  <img
                    src={project.screen}
                    className="card-img-top"
                    alt={project.project}
                  />
                  <div className="card-body">
                    <h4 className="d-flex align-items-center">
                      <i className="fa fa-globe mr-3" aria-hidden="true"></i>
                      <a
                        href={project.link}
                        style={{
                          textDecoration: "none",
                          color: "#000",
                          fontWeight: 600,
                        }}
                      >
                        {project.project}
                      </a>
                      <span
                        style={{
                          margin: "0 5px",
                          fontSize: "0.6rem",
                          padding: "4px",
                          border: "1px solid #000",
                          borderRadius: "10%",
                        }}
                      >
                        {project.year}
                      </span>
                    </h4>
                    <div className="py-2">
                      <strong>Description</strong>
                      <span>: {project.description}</span>
                    </div>
                    <div className="pt-2">
                      <strong>Tech stack</strong>
                      <p>{project.technology}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
