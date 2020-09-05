import React, { useState } from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import {jobs} from '../data/jobs';
import {preparation} from '../data/preparation';
import { JobCard } from '../data/JobCard';
import { PreparationCard } from '../data/PreparationCard';

export const CurriculumScreen = () => {
    
    const [modalAbout, setModalAbout] = useState(false);

    const reverseJobs = jobs.map(item => item).reverse();
    const reversePrep = preparation.map(item => item).reverse();

    const openModal = () => {
        setModalAbout(!modalAbout)
    }

    return (
        <div className="container center-item">
            <div className="row mt-5 text-light">

                <div className="row col-12 pt-4">
                    <div className="col-12">
                        <i className="fa fa-briefcase icon-cv" aria-hidden="true"></i><h2>Laboral Experience</h2>
                    </div>
                    <div className="col-12">
                        <div className="hrow"></div>
                    </div>
                    {
                        
                        reverseJobs.map(job => 
                            <JobCard   
                                key={job.id}
                                {...job}
                            />
                        )
                    }
                </div>

                <div className="row col-12">
                    <div className="col-12">
                        <i className="fa fa-graduation-cap icon-cv" aria-hidden="true"></i><h2>Education</h2>
                    </div>
                    <div className="col-12">
                        <div className="hrow"></div>
                    </div>
                    
                    {
                        reversePrep.map(p => 
                            <PreparationCard
                            className="mycard" 
                                key={p.id}
                                {...p}
                            />
                        )
                    }
            
                </div>

            </div>


            <Modal className="modal-lg center-item" isOpen={modalAbout}>
                <ModalHeader>
                    <span className="header-modal">About Me</span>
                </ModalHeader>
                <ModalBody>
                    <div className="text-about pb-4">
                       {modalAbout.activities}
                    </div>
                    <div className="text-about"><strong>Location: </strong> Teabo, Yucatan, Mexico</div>
                    <div className="text-about"><strong>Mail: </strong> vincemis610@gmail.com</div>
                    <div className="text-about"><strong>Phone: </strong>+52 997-121-6646</div>
                
                </ModalBody>
                <ModalFooter>
                    <button onClick={openModal}>
                        Close
                    </button>
                </ModalFooter>
            </Modal> 

        </div>
    )
}


/* 
jobs.map( job => (
                    <div className="col-12 card my-2 text-d" key={job.id} onClick={() => openModal(job)}>
                        <div className="card-body">
                            <h3><i className="fa fa-building mr-3" aria-hidden="true"></i>{job.enterprise}</h3>
                            <strong>{job.charge} : </strong> {job.period}
                            <p>{job.locate}, {job.col}</p>
                            <p>{job.address}</p>
                        </div>
                                
                    </div>
                ) )
*/