import React from 'react';

const ProjectItem = ({project}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 mb-20'>
            <div className='flex justify-center items-center mb-5 md:mb-0'>
                <img className='w-[100%] md:w-[50%] rounded-2xl ' src={project.image} alt="" />
            </div>
            <div className='col-span-2 '>
                <h2 className='text-2xl'>{project.title}</h2>
                <p className='my-7'>{project.description}</p>
                <div className=''>
                    {
                        project.technologies.map((tech, index) => <span key={index} className='text-purple-600 text-sm bg-slate-900 rounded px-3 py-1 mr-2 mb-2 inline-block'>{tech}</span>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;