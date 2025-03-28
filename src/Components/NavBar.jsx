import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className='flex justify-between items-center py-6 ResContainer'>
            <div>
                <img className='w-10' src="/src/assets/kevinRushLogo.png" alt="" />
            </div>
            <div className='flex gap-3 items-center text-2xl text-amber-50'>
                <FaLinkedin/>
                <FaGithub/>
                <FaTwitter/>
                <FaInstagram/>
            </div>
        </div>
    );
};

export default NavBar;