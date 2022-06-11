import React from 'react';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const Footer = () => {
    const today = new Date();
    const year = today.getUTCFullYear();
    return (
        <footer className=" bg-black text-white p-5 ">
            <div>
                <p className='text-center'>Copyright <AiOutlineCopyrightCircle className='inline' /> {year} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;