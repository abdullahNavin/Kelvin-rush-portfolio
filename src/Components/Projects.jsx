import React from 'react';
import { PROJECTS } from '../assets/constants';
import ProjectItem from './Shared/ProjectItem';

const Projects = () => {
    return (
        <div className='pb-20 ResContainer'>
            <h1 className='text-4xl text-center mb-16'>Projects</h1>
            <div className=''>
                {
                    PROJECTS.map((project, index)=> <ProjectItem key={index} project={project}></ProjectItem>)
                }
            </div>
        </div>
    );
};

export default Projects;