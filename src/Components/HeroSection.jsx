import React from 'react';
import { HERO_CONTENT } from '../assets/constants';

const HeroSection = () => {
    return (
        <div className='ResContainer mt-9 grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-2.5 justify-center items-center'>
            <div className='flex'>
                <div className=''>
                    <h1 className='text-2xl md:text-5xl playfair tracking-tight mb-3 md:mb-6'>Kelvin Rush</h1>
                    <span className='bg-gradient-to-r from-purple-700 via-slate-500 to-green-500 text-xl sm:text-3xl bg-clip-text text-transparent tracking-tight '>
                        Full Stack Developer
                    </span>
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