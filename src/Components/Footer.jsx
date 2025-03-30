import React from 'react';
import { CONTACT } from '../assets/constants';

const Footer = () => {
    return (
        <div className='ResContainer text-center border-t border-neutral-600 p-5 pb-20'>
            <h1 className='text-4xl mb-10'>Contact</h1>
            <p> Address: {CONTACT.address}</p>
            <p className='my-2'>Phone: <a href="tel:+12455566600">{CONTACT.phoneNo}</a></p>
            <p> Email: <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
        </div>
    );
};

export default Footer;