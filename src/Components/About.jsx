import React from 'react';
import { ABOUT_TEXT } from '../assets/constants';

const About = () => {
    return (
        <div className='mt-30 pb-14 ResContainer'>
            <h1 className='text-2xl md:text-4xl text-center pb-16'>About <span className='text-gray-600'>Me</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-9'>
                <div className='flex justify-center items-center'>
                    <img className='rounded-2xl w-3/4' src="/src/assets/about.jpg" alt="" />
                </div>
                <div className='text-center md:text-left'>
                    <p>{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    );
};

export default About;