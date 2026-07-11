import React, { useState } from "react";
import style from "styled-components";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

const Button = style.button`
    background-color: #f95959; 
    border: 0;   
    padding: 10px;
    border-radius: 3px;
    color: #fff;
`;

export const HomeScreen = () => {
  const [modalAbout, setModalAbout] = useState(false);

  const openModal = () => {
    setModalAbout(!modalAbout);
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv_vicente.pdf";
    link.download = "Vince_Mis_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mt-4">
      <div className="row center-item">
        <div className="col-12 col-md-6 nav-burger">
          <div className="avatar-content text-center animate__animated animate__flipInX">
            <img
              src="https://raw.githubusercontent.com/vincemis610/mybriefcase/master/public/assets/dev.png"
              alt="avatar"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 nav-burger animate__animated animate__fadeIn">
          <h1 className="title-name">Hello there..!</h1>
          <p className="text-content">
            I'm Vince Mis, a Full Stack Developer passionate about building
            modern, scalable, and user-friendly web applications.
          </p>
          <div className="d-flex justify-content-between w-100">
            <Button onClick={openModal}>About Me</Button>
            <Button onClick={downloadCV}>Download CV</Button>
          </div>
        </div>
      </div>

      <Modal className="modal-lg center-item" isOpen={modalAbout}>
        <ModalHeader className="justify-content-center">
          <div className="w-100 text-center header-modal">About Me</div>
        </ModalHeader>
        <ModalBody>
          <div className="content-about-me px-4">
            <div className="personal-summary">
              <div className="title">Personal Summary</div>
              <div className="content">
                Fullstack Developer with over 6 years of experience building web
                applications, APIs, and distributed systems using Node.js,
                TypeScript, React, and Next.js. I’ve worked on legacy system
                migrations, performance improvements, and microservices in cloud
                environments such as AWS and GCP. I’ve collaborated with
                distributed teams to deliver and maintain production systems
                that are scalable, stable, and easy to evolve over time.
              </div>
            </div>
            <div className="personal-information">
              <div className="title">Information</div>
              <div className="content d-flex flex-wrap">
                <div>
                  <strong>Location:</strong> Teabo, Yucatan
                </div>

                <div>
                  <strong>Email:</strong> vincemis610@gmail.com
                </div>

                <div>
                  <strong>Phone:</strong> +52 997 121 6646
                </div>
                <div>
                  <strong>LinkedIn:</strong>{" "}
                  <a
                    href="https://www.linkedin.com/in/vince-mis-609b27185/"
                    style={{ wordBreak: "break-all", textDecoration: "none" }}
                  >
                    https://www.linkedin.com/in/vince-mis-609b27185/
                  </a>
                </div>
              </div>
            </div>
            <div className="personal-skills">
              <div className="title">Skills</div>
              <section className="content">
                <section className="d-flex flex-column">
                  <label>Backend</label>
                  <div className="d-flex flex-wrap">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" />
                  </div>
                </section>
                <section className="d-flex flex-column">
                  <label>Frontend</label>
                  <div className="d-flex flex-wrap">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
                  </div>
                </section>
                <section className="d-flex flex-column flex-wrap">
                  <label>Tools</label>
                  <div className="d-flex flex-wrap">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/homebrew/homebrew-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zsh/zsh-original.svg" />
                  </div>
                </section>
              </section>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="px-4">
          <Button onClick={openModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
