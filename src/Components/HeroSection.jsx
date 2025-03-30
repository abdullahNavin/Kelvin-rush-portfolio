import React from 'react';
import { HERO_CONTENT } from '../assets/constants';
import { motion } from "motion/react"


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay }
    },
})
const HeroSection = () => {

    return (
        <div className='ResContainer mt-9 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-2.5 justify-center items-center'>
            <div className='flex'>
                <div className=''>
                    <motion.h1
                        variants={container(0.2)}
                        initial="hidden"
                        animate="visible"
                        className='text-2xl md:text-5xl playfair tracking-tight mb-3 md:mb-6'>Kelvin Rush</motion.h1>
                    <motion.span 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:10}}
                    className='bg-gradient-to-r from-purple-700 via-slate-500 to-green-500 text-xl sm:text-3xl bg-clip-text text-transparent tracking-tight '>
                        Full Stack Developer
                    </motion.span>
                    <p className='mt-2.5 md:mt-3.5 text-slate-200'>{HERO_CONTENT}</p>
                </div>
            </div>
            <div className=' flex justify-center items-center '>
                <img className='w-4/5' src="/src/assets/kevinRushProfile.png" alt="" />
            </div>
        </div>
    );
};

export default HeroSection;