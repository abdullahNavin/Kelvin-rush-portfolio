import React from 'react';

const ExperienceItem = ({item}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-10 mb-10'>
            <div >
                <p className='text-neutral-400 md:text-center'>{item.year}</p>
            </div>
            <div className='md:col-span-2'>
                <h1 className='text-xl md:text-2xl mb-4'>{item.role} - {item.company}</h1>
                <p className='mb-4 text-slate-400'>{item.description}</p>
                <div>
                    {
                        item.technologies.map((tech, index) => (
                            <span key={index} className="text-purple-600 text-sm bg-slate-900 rounded px-3 py-1 mr-2 mb-2 inline-block">
                                {tech}
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;