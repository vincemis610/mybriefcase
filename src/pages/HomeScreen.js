import React, { useState } from 'react';
import style from 'styled-components';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

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
        setModalAbout(!modalAbout)
    }

    return (
        <div className="container mt-4">
            <div className="row center-item">
                <div className="col-12 col-md-6 nav-burger">
                    <div className="avatar-content text-center animate__animated animate__flipInX">
                        <img src="../../assets/dev.png" alt="avatar" />
                    </div>
                </div>
                <div className="col-12 col-md-6 nav-burger animate__animated animate__fadeIn">
                    <h1 className="title-name">Hello there..!</h1>
                    <p className="text-content">
                        I'm Vince Mis and am a Fullstack Developer
                    </p>
                    <Button onClick={openModal}>
                        About Me...
                    </Button>
                    
                </div>
            </div> 

            <Modal className="modal-lg center-item" isOpen={modalAbout}>
                <ModalHeader>
                    <span className="header-modal">About Me</span>
                </ModalHeader>
                <ModalBody>
                    <div className="text-about pb-4">
                        Hello! <br/ ><br/ >
                        I'm Vicente, am a fullstack developer web, i love to learn new technology,
                        im a lover of GNU/Linux especially Debian that is my favorite distro, i like to 
                        be autodidact and practice coding a lot.<br /><br />
                        <strong>Skills</strong> <br />
                        Autodidact<br />
                        Team-Work<br />
                        Open-mindedness<br/>
                        Patience<br/>
                        Cloud Platforms(AWS, GCP)<br/>
                        Javascript(Backend, Frontend)<br/>
                        DBA MySQL, PostGreSQL, Firestore

                    </div>
                    <div className="text-about"><strong>Location: </strong> Teabo, Yucatan, Mexico</div>
                    <div className="text-about"><strong>Mail: </strong> vincemis610@gmail.com</div>
                    <div className="text-about"><strong>Phone: </strong>+52 997-121-6646</div>
                
                </ModalBody>
                <ModalFooter>
                    <Button onClick={openModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal> 
            
        </div>
    )
}
