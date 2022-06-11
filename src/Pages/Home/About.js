import React, { useEffect } from 'react';
import image from '../../images/image.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <section className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <img src={image} data-aos="zoom-in-down" />
            <div className='mb-5 flex items-center ml-5' data-aos="flip-right">
                <p className='text-3xl'>I'm Al Amin. I am a Full-Stack Developer. I have more than 6 months of experience in HTML, CSS, JavaScript, and React.</p>
            </div>
        </section>
    );
};

export default About;