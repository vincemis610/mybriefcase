import React from 'react';
import {projects} from '../data/projects';
import style from 'styled-components';

const Button = style.button`
    background-color: #f95959; 
    border: 0;   
    padding: 10px;
    border-radius: 3px;
    color: #fff;
`;

export const ProjectsScreen = () => {

    const reverseProjects = projects.map(item => item).reverse();

    return (
        <div className="container center-item">
            <div className="row mt-5 text-light">

            <div className="row col-12 pt-4">
                    <div className="col-12">
                        <i className="fa fa-briefcase icon-cv" aria-hidden="true"></i><h2>Projects</h2>
                    </div>
                    <div className="col-12">
                        <div className="hrow"></div>
                    </div>
                    {
                        
                        reverseProjects.map(project => 
                            <div className="col-12 col-md-6 my-2 p-2 text-d" key={project.id}>
                                <div className="card my-3 p-3 text-d">
                                    <img src={project.screen} className="card-img-top" alt={project.project}/>
                                    <div className="card-body">
                                        <h4><i className="fa fa-globe mr-3" aria-hidden="true"></i><strong>{project.project}</strong></h4><br/>
                                        <span>{project.description}</span><br/><br/>
                                        <Button onClick={()=> window.open(project.link)}><i className="fa fa-eye mx-2" aria-hidden="true"></i>View</Button><br/><br/>
                                        <p>{project.technology}</p>
                                    </div>                     
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}
 