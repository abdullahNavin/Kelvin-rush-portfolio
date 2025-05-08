import React from 'react';
import { ABOUT_TEXT } from '../assets/constants';
import { motion } from "motion/react"

const About = () => {
    
    return (
        <div className='mt-30 pb-14 ResContainer'>
            <h1 className='text-2xl md:text-4xl text-center pb-16'>About <span className='text-gray-600'>Me</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-9'>
                <motion.div
                    whileHover={{ scale: 1.05,rotate:10 }}
                    whileTap={{scale:0.9,rotate:-10}}
                    transition={{ type: 'spring', stiffness: 500, }}
                    className='flex justify-center items-center'>
                    <img className='rounded-2xl w-3/4' src="/src/assets/about.jpg" alt="" />
                </motion.div>
                <div className='text-center md:text-left'>
                    <motion.p
                    >{ABOUT_TEXT}</motion.p>
                </div>
                <div className='text-center'>
                    <motion.button
                     className='cursor-pointer bg-blue-900 rounded text-gray-400 font-semibold px-3 py-2'>click me</motion.button>
                </div>
            </div>
        </div>
    );
};

export default About;