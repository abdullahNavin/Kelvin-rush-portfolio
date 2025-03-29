import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Technologies = () => {
    return (
        <div className='py-14 pb-20 ResContainer'>
            <h1 className='text-4xl text-center'>Technologies</h1>
            <div className='flex justify-center items-center flex-wrap gap-10 mt-14'>
                <div className='border-2 border-slate-500 p-5 rounded-2xl'>
                    <FaReact className='text-6xl text-sky-600' />
                </div>
                <div className='border-2 border-slate-500 p-5 rounded-2xl'>
                    <IoLogoNodejs className='text-6xl text-green-600' />
                </div>
                <div className='border-2 border-slate-500 p-5 rounded-2xl'>
                    <SiMongodb className='text-6xl text-green-600' />
                </div>
                <div className='border-2 border-slate-500 p-5 rounded-2xl'>
                    <SiRedux className='text-6xl text-purple-600' />
                </div>
                <div className='border-2 border-slate-500 p-5 rounded-2xl'>
                    <SiTailwindcss className='text-6xl text-blue-600' />
                </div>
                <div className='border-2 border-slate-500 p-5 rounded-2xl'>
                    <SiExpress className='text-6xl text-slate-400-600' />
                </div>
            </div>
        </div>
    );
};

export default Technologies;