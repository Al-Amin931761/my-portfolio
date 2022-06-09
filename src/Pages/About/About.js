import React from 'react';
import image from '../../images/image.png';

const About = () => {
    return (
        <section className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
            <img w src={image} />
            <div className='mb-5 flex items-center ml-5'>
                <p className='text-3xl'>I'm Al Amin. I am a Full-Stack Developer. I have more than 6 months of experience in HTML, CSS, JavaScript, and React.</p>
            </div>
        </section>
    );
};

export default About;