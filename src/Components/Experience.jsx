import React from 'react';
import { EXPERIENCES } from '../assets/constants';
import ExperienceItem from './Shared/ExperienceItem';

const Experience = () => {
    return (
        <div className='py-20 ResContainer'>
            <h1 className='text-4xl text-center pb-20'>Experiences</h1>
            <div className=''>
                {
                    EXPERIENCES.map((item,index)=> <ExperienceItem key={index} item={item}></ExperienceItem>)
                }
            </div>
        </div>
    );
};

export default Experience;